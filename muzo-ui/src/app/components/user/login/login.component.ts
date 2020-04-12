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
            password: ['', [Validators.required, Validators.minLength(8)]]        })
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "muzo/home";
    }

    get formControls(){
        // this.loginForm.controls.username.errors.email
        return this.loginForm.controls;
    }

    login(){
        if(this.loginForm.invalid){
            return;
        }
        this.loading = true;
        this.authService.login(this.formControls.username.value, this.formControls.password.value)
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