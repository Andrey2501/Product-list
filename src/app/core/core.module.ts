import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsModule,
    HttpClientModule
  ],
  exports: [
    LayoutsModule
  ]
})
export class CoreModule { }
