// stuff
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MetaModule, MetaConfig, MetaService } from 'ng2-meta';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { routing, routes, RootComponent } from './routes';

// pages
import { HomePage } from '../pages/home/home';

// providers
import { Storage } from '../providers/storage';
import { Events } from '../providers/events';

// pipes
// components
// directives

// meta configuration
const metaConfig: MetaConfig = {
  // append a title suffix such as a site name to all titles
  // defaults to false
  useTitleSuffix: true,
  defaults: {
    title: 'Angular Starter Boilerplate',
    description: 'A very useful angular2 starter seed kit',
    titleSuffix: '',
    'og:image': 'http://i.imgur.com/lVk8dGm.png' // facebook open:graph image
  }
};

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    MetaModule.forRoot(metaConfig),
    RouterModule.forRoot(routes),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  ],
  declarations: [
    RootComponent,
    HomePage
  ],
  providers: [MetaService, Events, Storage],
  bootstrap: [RootComponent]
})
export class AppModule { }
