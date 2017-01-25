/**
 * @class Events
 * @example
 * 
 * import { Events } from '../../providers/events'
 * 
 * class MyNewClass {
 *    constructor(public events: Events) {}
 *    myNewMethod() {
 *        // to subscribe an event
 *        this.events.subscribe('ThatEvent', (something) => {
 *            // do whatever with something, when ThatEvent happen
 *            console.log(something);
 *        })
 *
 *       // to fire an event
 *       this.events.publish('ThatEvent', { something: 'is beautiful' })
 *    }
 * }
 */
export class Events {
  private _channels: any = [];

  /**
   * Subscribe to an event topic. Events that get posted to that topic will trigger the provided handler.
   *
   * @param {string} topic the topic to subscribe to
   * @param {function} handler the event handler
   */
  subscribe(topic: string, ...handlers: Function[]) {
    // console.log('subscribe to ' + topic);
    if (!this._channels[topic]) {
      this._channels[topic] = [];
    }
    handlers.forEach((handler) => {
      this._channels[topic].push(handler);
    });
  }

  /**
   * Unsubscribe from the given topic. Your handler will no longer receive events published to this topic.
   *
   * @param {string} topic the topic to unsubscribe from
   * @param {function} handler the event handler
   *
   * @return true if a handler was removed
   */
  unsubscribe(topic: string, handler: Function = null) {
    let t = this._channels[topic];
    if (!t) {
      // Wasn't found, wasn't removed
      return false;
    }

    if (!handler) {
      // Remove all handlers for this topic
      delete this._channels[topic];
      return true;
    }

    // We need to find and remove a specific handler
    let i = t.indexOf(handler);

    if (i < 0) {
      // Wasn't found, wasn't removed
      return false;
    }

    t.splice(i, 1);

    // If the channel is empty now, remove it from the channel map
    if (!t.length) {
      delete this._channels[topic];
    }

    return true;
  }

  /**
   * Publish an event to the given topic.
   *
   * @param {string} topic the topic to publish to
   * @param {any} eventData the data to send as the event
   */
  publish(topic: string, ...args: any[]) {
    // console.log('publish to ' + topic);
    var t = this._channels[topic];
    if (!t) {
      return null;
    }

    let responses: any[] = [];
    t.forEach((handler: any) => {
      responses.push(handler(...args));
    });
    return responses;
  }
}
