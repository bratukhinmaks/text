import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {UiModule} from '../../../../libs/ui/src';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [AppComponent, ButtonsComponent],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forChild([{path:'',component: ButtonsComponent}]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
