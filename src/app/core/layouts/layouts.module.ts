import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './wrapper/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [WrapperComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [WrapperComponent]
})
export class LayoutsModule { }
