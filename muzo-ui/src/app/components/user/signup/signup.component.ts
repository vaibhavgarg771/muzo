import { Component, OnInit } from "@angular/core";
import { IUser } from '../../../models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
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
                this.custValidations.patternValidator(/[`!@#$%^&*_+-=:,.?~]/, {hasSpecialCharacter: true}),
                Validators.minLength(8)]], 
            confirmPassword: ['', [Validators.required]]
        }, {
            validators: this.custValidations.passwordNotMatch.bind(this)
        });
    }

    get formControl(){
        return this.signUpForm.controls;
    }

    public patternValidator(regex:RegExp, error: ValidationErrors){
        return (control: AbstractControl): {[key:string]: any} => {
            if(!control.value){
                return null;
            }
            const valid = regex.test(control.value);
            return valid ? null: error;
        }
    }

    public passwordMatch(error:ValidationErrors){
        const password = this.formControl.password.value;
        const confirmPassword = this.formControl.confirmPassword.value;
        
        return (control: AbstractControl): {[key: string]: any} | null => {
            if(!control.value){
                return null;
            }
            const match = (password === confirmPassword);
            return match ? error : null;
          };
    }

    get usernameFieldStylingClass(){
        if(this.formControl.username.untouched){
            return "";
        }
        else if(this.formControl.username.dirty && this.formControl.username.valid){
            return "is-valid";
        }
        else {
            return "is-invalid";
        }
    }
    get passwordFieldStylingClass(){
        if(this.formControl.password.untouched){
            return "";
        }
        else if(this.formControl.password.dirty && this.formControl.password.valid){
            return "is-valid";
        }
        else {
            return "is-invalid";
        }
    }

    get confirmPasswordFieldStylingClass(){

        if(this.formControl.confirmPassword.untouched){
            return "";
        }
        else if(this.formControl.confirmPassword.dirty && this.formControl.confirmPassword.errors == null){
            return "is-valid";
        }
        else {
            return "is-invalid";
        }
    }



    signUp(){
        
    }

    matches(){
        // don't know what this method is for 
    }

    cancel(){
        //doNOTHING
    }
}