import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { ErrorService } from './services/error.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/user/login.component';
import { RandomComponent } from './components/random/random.component';
import { SignupComponent } from './components/user/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
    ErrorComponent,
    LoginComponent,
    SignupComponent, 
    RandomComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ErrorService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
