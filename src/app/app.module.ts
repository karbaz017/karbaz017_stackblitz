import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {SuccessAlertComponent} from './success-alert/success-alert.component';
import{WarningAlertComponent} from './warning-alert/warning-alert.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SuccessAlertComponent, WarningAlertComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
