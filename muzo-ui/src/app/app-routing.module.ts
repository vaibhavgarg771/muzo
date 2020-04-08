import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/user/login/login.component';
import { RandomComponent } from './components/random/random.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "muzo/home", pathMatch:'full'},
  { path: "muzo/", redirectTo: "muzo/home", pathMatch:'full'},
  { path: "muzo/home", component: HomeComponent},
  { path: "muzo/error", component: ErrorComponent}, 
  { path: "muzo/login", component: LoginComponent},
  { path: "muzo/signup", component: SignupComponent},
  { path: "muzo/random", component: RandomComponent},
  { path: "**", redirectTo:'muzo/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
