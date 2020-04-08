import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { IUser } from '../../../models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoggedInUser } from '../../../models/loggedInUser.model';
import { SessionService } from 'src/app/services/session.service';
import { NavComponent } from '../../nav/nav.component';
import { Session } from 'protractor';
// import { Session } from 'inspector';

@Component({
    selector:"login", 
    templateUrl:'./login.component.html',
})

export class LoginComponent implements OnInit{
   
    public loggedInUser:ILoggedInUser;
    @Output() userIsLoggedIn: EventEmitter<any> = new EventEmitter();

    session2: Session
    loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private authService?: AuthenticationService, private router?: Router, private session?: SessionService){}

    ngOnInit(){
        if(this.session.isAuthenticated()){
            this.router.navigate(['muzo/home']);
        }
    }

    login(loginForm: IUser){
        console.log(loginForm);
        this.authService.login(loginForm)
    }

    getUserIsLoggedIn(){
        return this.userIsLoggedIn;
    }
    cancel(){
        //doNOTHING
    }
}