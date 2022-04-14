import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from "./main/main.component";
import {AngularYandexMapsModule} from "angular8-yandex-maps";



@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    AngularYandexMapsModule
  ]
})
export class DashboardModule { }
