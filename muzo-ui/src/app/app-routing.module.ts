import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/user/login.component';
import { RandomComponent } from './components/random/random.component';
import { SignupComponent } from './components/user/signup.component';

const routes: Routes = [
  { path: "muzo/error", component: ErrorComponent}, 
  { path: "muzo/login", component: LoginComponent},
  { path: "muzo/signup", component: SignupComponent},
  { path: "muzo/random", component: RandomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
