import { Component, OnInit } from "@angular/core";
import { IUser } from './user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector:"login", 
    templateUrl:'./login.component.html',
})

export class LoginComponent implements OnInit{
   
    public status: string;
    loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private authService: AuthenticationService){}

    ngOnInit(){
    }

    login(loginForm: IUser){
        console.log(loginForm);
        this.authService.login(loginForm).subscribe(
            status => { this.status = String(status)}, 
            err => console.error(err), 
            () => console.log("status is:"+this.status)
        );
    }

    cancel(){
        //doNOTHING
    }
}