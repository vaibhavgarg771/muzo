import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
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
import { UserService } from './services/user.service';

// keep the modules in ascending order
@NgModule({
  declarations: [
    AppComponent, 
    ErrorComponent,
    HomeComponent,
    LoginComponent,
    NavComponent, 
    RandomComponent, 
    SignupComponent, 
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthenticationService, 
    ErrorService, 
    SessionService, 
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
