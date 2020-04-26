import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { ILoggedInUser } from '../models/loggedInUser.model';
import { IUser } from '../models/user.model';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError, first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

// Authentication Service class to perform login/ logout stuff
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<IUser>
    public currentUser: Observable<IUser>

    loggedInUser: ILoggedInUser;
    constructor(private router: Router,
        private http: HttpClient,
        private toastr: ToastrService) {
        this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem("currentUser")));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): IUser {
        return this.currentUserSubject.value;
    }

    // login a user and fetch the jwt token from backend
    public login(username: string, password: string, returnUrl: string) {
        return this.http.post<any>("/server/authenticate", { username, password })
            .pipe(first())
            .subscribe(user => {
                if (user && user.message) {
                    console.log("saving user token");
                    console.log(user);
                    localStorage.setItem("currentUser", JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                this.toastr.success("Logged in successfully");
                this.router.navigate([returnUrl]);
                console.log(user);
            },
                err => {
                    console.log(err);
                    this.toastr.error(err.error.message);
                }
            );
    }

    // TODO need to think this one through .. end to end.
    public signup(username: String, password: String) {
        // console.log(user.username+user.password);
        return this.http.post("/server/register", { username, password })
            .pipe(first())
            .subscribe(user => {
                this.toastr.success("Successfully signed up user. Kindly Login");
                this.router.navigate(['muzo/login']);
            },
                err => {
                    this.toastr.error(err.error.message);
                });
    }

    public fetchAllUsers() {
        return this.http.get("/server/muzo/get-all-users")
    }

    public logout() {
        // remove saved user values from local storage
        localStorage.removeItem("currentuser");
        this.currentUserSubject.next(null);
    }

}
