import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component'
import { SuccessAlert } from './success-alert/success-alert.component';
import { AssigmentComponent } from './assigment/assigment.component';
import { Assigment2Component } from './assigment2/assigment2.component';
import { CourseappComponent } from './courseapp/courseapp.component';
import { ShopppingListComponent } from './shoppping-list/shoppping-list.component';
import { ShoppingListComponent } from './courseapp/shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './courseapp/shopping-list/shopping-list-item/shopping-list-item.component';
import { LearnFormsComponent } from './learn-forms/learn-forms.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { AboutComponent } from './admin/about/about.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { AdminModule } from './admin/admin.module';

// Traversy Media
import { UserComponent } from './components/user.component';
import { UsersComponent } from './components/users/users.component';
import { MatSlideToggleModule,MatAutocompleteModule, MatFormFieldModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    // ALl the components need to added here Ex: custom components
    UserComponent,

    AppComponent,
      UsersComponent,
      NavbarComponent,
    // ServerComponent,
    // ServersComponent,
    // Assigment2Component,
    // CourseappComponent,
    // ShopppingListComponent,
    // ShoppingListComponent,
    // ShoppingListItemComponent,
    // LearnFormsComponent,
    // RxjsLearningComponent,
    // AssigmentComponent,
    // WarningAlertComponent,
    // SuccessAlert

    // DashboardComponent,
    // AboutComponent,
    // MyProfileComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule

    // FormsModule,
    // ReactiveFormsModule,
    // AppRoutingModule,
    // HttpClientModule,
    // AdminModule
  ],
  exports:[
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
