import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DashboardModule} from "./feature/dashboard/dashboard.module";
import {AngularYandexMapsModule, YaConfig} from "angular8-yandex-maps";

const mapConfig: YaConfig = {
  apikey: '070d5a71-8566-4e57-bc1e-c7e9317e4a5a',
  lang: 'en_US',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AngularYandexMapsModule.forRoot(mapConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
