import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { HomePage } from '../pages/home/home';

import { MetaService } from 'ng2-meta';

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {
  constructor(public metaService: MetaService, public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) { }
};

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  // 404
  // { path: '**', component: Error404Page }
];

export const routing = RouterModule.forRoot(routes);
