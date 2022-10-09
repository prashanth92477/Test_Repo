import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component'
import { SuccessAlert } from './success-alert/success-alert.component';

@NgModule({
  declarations: [
    // ALl the components need to added here Ex: custom components
    AppComponent,
    // ServerComponent,
    // ServersComponent,
    WarningAlertComponent,
    SuccessAlert
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
