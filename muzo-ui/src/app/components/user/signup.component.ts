import { Component, OnInit } from "@angular/core";
import { IUser } from './user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector:"signup", 
    templateUrl:'./signup.component.html',
})

export class SignupComponent implements OnInit{
    // username: string; 
    // password: string;
    status: string;
    signupForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private authService: AuthenticationService){}

    ngOnInit(){
    }

    signup(signupForm: IUser){
        console.log(signupForm);
        this.authService.signup(signupForm).subscribe(
            status => { this.status = String(status)}, 
            err => console.error(err), 
            () => console.log("Successfully Logged In")
        );
    }

    cancel(){
        //doNOTHING
    }
}