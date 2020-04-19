import { Component, OnInit } from "@angular/core";
import { IUser } from '../../../models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { first } from 'rxjs/operators';

@Component({
    selector:"login", 
    templateUrl:'./login.component.html',
})

export class LoginComponent implements OnInit{
   
    loading: boolean = false;
    private returnUrl: String;
    loginForm: FormGroup;
    // showUsernameErrors: Boolean = false;
    // showPasswordErrors: Boolean = false;
    constructor(private formBuilder: FormBuilder,
                private authService: AuthenticationService,
                private router: Router,
                private route: ActivatedRoute, 
                private alertService: AlertService){
        if(this.authService.currentUserValue){
            this.router.navigate(["muzo/home"]);
        }
    }

    ngOnInit(){
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]], 
            password: ['', [Validators.required, Validators.minLength(8)]]});
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "muzo/home";
    }

    get formControl(){
        // this.loginForm.controls.username.errors.email
        return this.loginForm.controls;
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

    login(){
        if(this.loginForm.invalid){
            return;
        }
        this.loading = true;
        this.authService.login(this.formControl.username.value, this.formControl.password.value)
            .pipe(first())
            .subscribe(user => {
                this.router.navigate([this.returnUrl]);
            }, 
            err => {
                this.alertService.error("Invalid username or password :" + err);
                this.loading = false;
            });
    }
}