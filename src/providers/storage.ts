declare var window;

/**
 * @class Storage
 * @example
 * 
 * import { Storage } from '../../providers/storage'
 * 
 * class MyClass {
 * 
 *      construct(public storage: Storage) {}
 *      
 *      saveData() {
 *          let obj:any = {
 *              a: 1,
 *              b: 2
 *          }
 *          this.storage.set('my:data', obj)
 *      }
 * 
 *      getData() {
 *          console.log(this.storage.get('my:data'))
 *      }
 * }
 */
export class Storage {
    _local: string = 'session';

    local(v?: string): string {
        return v ? this._local = v + 'Storage' : this._local + 'Storage';
    }

    get(k: string): any {
        return JSON.parse(window[this.local()].getItem(k));
    }

    set(k: string, v: any): void {
        window[this.local()].setItem(k, JSON.stringify(v));
    }

    clear(): void {
        window[this.local()].clear();
    }
}
