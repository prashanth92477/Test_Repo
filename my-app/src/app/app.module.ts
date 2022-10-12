import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component'
import { SuccessAlert } from './success-alert/success-alert.component';
import { AssigmentComponent } from './assigment/assigment.component';

@NgModule({
  declarations: [
    // ALl the components need to added here Ex: custom components
    AppComponent,
    ServerComponent,
    ServersComponent,
    // AssigmentComponent,
    // WarningAlertComponent,
    // SuccessAlert
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
