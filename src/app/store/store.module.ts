import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IState } from './shared/interfaces/state.interface';
import { StoreModule } from '@ngrx/store';
import { getReducers } from './index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppEffectsModule } from './effects.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot<IState>(getReducers(), {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
    StoreRouterConnectingModule.forRoot(),
    AppEffectsModule
  ]
})
export class AppStoreModule { }
