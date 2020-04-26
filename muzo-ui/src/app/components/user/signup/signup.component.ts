import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { patternValidator, passwordNotMatch } from '../../../shared/validation.directive';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: "signup",
    templateUrl: './signup.component.html',
})

export class SignupComponent implements OnInit {
    signUpForm: FormGroup;
    loading: boolean = false;
    status: string;
    error_messages = {
        email: {
            required: "Email is required",
            invalidEmailFormat: "Please enter a valid email"
        },
        password: {
            required: "Password is required",
            minLength: "Password must contain atleast 8 characters",
            hasNumber: "Password must contain a number",
            hasLowerCase: "Password must contain a lower case letter",
            hasUpperCase: "Password must contain an upper case letter",
            hasSpecialCharacter: "Password must contain a special character !@#$%^&*_+-=:,.?"
        }, 
        confirmPassword: {
            required: "Please enter your password again",
            passwordNotMatch: "Passwords do not match"
        }
    };
    constructor(private formBuilder: FormBuilder,
        private authService: AuthenticationService,
        private router: Router,
        private toastr: ToastrService) { }

    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            username: ['', [Validators.required, patternValidator(new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), { email: true})]],
            password: ['', [Validators.required,
            patternValidator(/\d/, { hasNumber: true }),
            patternValidator(/[A-Z]/, { hasUpperCase: true }),
            patternValidator(/[a-z]/, { hasLowerCase: true }),
            patternValidator(/[\!\@\#\$\%\^\&\*\_\+\-\=\:\,\.\?\~]/, { hasSpecialCharacter: true }),
            Validators.minLength(8)]],
            confirmPassword: ['', [Validators.required]]
        }, {
            validators: passwordNotMatch
        });
    }

    get formControl() {
        return this.signUpForm.controls;
    }

    getFormElement(elementName: string){
        return this.signUpForm.get(elementName);
    }
    
    fieldStyling(element: string){
        if (this.getFormElement(element).pristine) {
            return "";
        }
        else if (this.getFormElement(element).dirty && this.getFormElement(element).valid) {
            return "is-valid";
        }
        else {
            return "is-invalid";
        }
    }

    signUp() {
        console.log("going in for signup");
        const username = this.formControl.username.value;
        const password = this.formControl.password.value;
        console.log(username + " : " + password + " : these were used to register");
        // this.toastr.success("Successfully signup user");
        this.authService.signup(username, password);
    }

    matches() {
        // don't know what this method is for 
    }

    cancel() {
        //doNOTHING
    }
}