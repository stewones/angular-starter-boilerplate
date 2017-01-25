import { Component } from '@angular/core';
import { MetaService } from 'ng2-meta';

// import * as _ from 'lodash';
// import * as $ from 'jquery';

@Component({
  selector: 'home-page',
  template: require('./home.html')
})
export class HomePage {

  constructor(public metaService: MetaService) { }

  ngOnInit() {
    // this.metaService.setTag('description', 'Home description');
    // this.metaService.setTag('keywords', 'home, keyword');
    // this.metaService.setTitle('Home title');
  }
}