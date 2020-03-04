import { Component, OnInit } from "@angular/core";
import { IUser } from '../../../models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../services/validation.service';

@Component({
    selector:"signup", 
    templateUrl:'./signup.component.html',
})

export class SignupComponent implements OnInit{
    // username: string; 
    // password: string;
    status: string;
    signupForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8),
            this.validations.patternValidator(/\d/, {hasNumber: true}), 
            this.validations.patternValidator(/[A-Z]/, {hasUpperCase: true}), 
            this.validations.patternValidator(/[a-z]/, {hasLowerCase: true}), 
            this.validations.patternValidator(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/, {hasSpecialCharacter: true})]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    constructor(private authService: AuthenticationService, private validations: ValidationService){}

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

    matches(){
        if(this.signupForm.value.confirmPassword == this.signupForm.value.password)
            return true;
        return false;
    }

    cancel(){
        //doNOTHING
    }
}