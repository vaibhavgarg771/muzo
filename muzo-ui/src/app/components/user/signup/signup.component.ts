import { Component, OnInit } from "@angular/core";
import { IUser } from '../../../models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../../services/validation.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
    selector:"signup", 
    templateUrl:'./signup.component.html',
})

export class SignupComponent implements OnInit{
    signUpForm: FormGroup;
    loading:boolean = false;


    status: string;
    constructor(private formBuilder: FormBuilder,
                private authService: AuthenticationService, 
                private router: Router, 
                private alertService: AlertService, 
                private custValidations: ValidationService){}

    ngOnInit(){
        this.signUpForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]], 
            password: ['', [Validators.required,
                this.custValidations.patternValidator(/\d/, {hasNumber: true}), 
                this.custValidations.patternValidator(/[A-Z]/, {hasUpperCase: true}), 
                this.custValidations.patternValidator(/[a-z]/, {hasLowerCase: true}), 
                this.custValidations.patternValidator(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/, {hasSpecialCharacter: true}),
                Validators.minLength(8)]], 
            confirmPassword: ['', Validators.required, Validators.minLength(8)]
        },{
            validator: this.custValidations.passwordMatch
        });
    }

    private get formControl(){
        return this.signUpForm.controls;
    }
    signup(){
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