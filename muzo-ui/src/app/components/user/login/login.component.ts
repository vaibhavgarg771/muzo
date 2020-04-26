import { Component, OnInit } from "@angular/core";
import { IUser } from '../../../models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector:"login", 
    templateUrl:'./login.component.html',
})

export class LoginComponent implements OnInit{
   
    loading: boolean = false;
    returnUrl: string;
    loginForm: FormGroup;
    // showUsernameErrors: Boolean = false;
    // showPasswordErrors: Boolean = false;
    constructor(private formBuilder: FormBuilder,
                private authService: AuthenticationService,
                private router: Router,
                private route: ActivatedRoute, 
                private toastr: ToastrService){
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

    getFormElement(elementName: string){
        return this.loginForm.get(elementName);
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

    login(){
        this.loading = true;
        this.authService.login(this.formControl.username.value, this.formControl.password.value, this.returnUrl);
        this.loading = false;
    }
}