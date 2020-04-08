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

@NgModule({
  declarations: [
    AppComponent, 
    ErrorComponent,
    LoginComponent,
    SignupComponent, 
    RandomComponent, 
    NavComponent, 
    HomeComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ErrorService, 
    AuthenticationService, 
    SessionService, 
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
