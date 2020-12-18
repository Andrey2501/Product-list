import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './product/product.effect';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([
      ProductEffects
    ])
  ]
})
export class AppEffectsModule { }
