import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { ErrorService } from './services/error.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/user/login/login.component';
import { RandomComponent } from './components/random/random.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationService } from './services/authentication.service';
import { SessionService } from './services/session.service';
import { ValidationService } from './services/validation.service';
import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service';
import { AlertsComponent } from './components/_alerts/alerts.component';

// keep the modules in ascending order
@NgModule({
  declarations: [
    AlertsComponent,
    AppComponent, 
    ErrorComponent,
    HomeComponent,
    LoginComponent,
    NavComponent, 
    RandomComponent, 
    SignupComponent, 
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AlertService,
    ErrorService, 
    AuthenticationService, 
    SessionService, 
    UserService,
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
