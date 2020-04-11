import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { ILoggedInUser } from '../models/loggedInUser.model';
import { IUser } from '../models/user.model';
import { SessionService } from './session.service';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Authentication Service class to perform login/ logout stuff
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService{

    private currentUserSubject: BehaviorSubject<IUser>
    public currentUser: Observable<IUser>
    
    loggedInUser: ILoggedInUser;
    constructor(private router: Router, private http: HttpClient, private session: SessionService){
        this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem("currentUser")));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue():IUser{
        return this.currentUserSubject.value;
    }


    // login a user and fetch the jwt token from backend
    public login(username: string, password: string){

        return this.http.post<any>("server/authenticate", {username, password})
            .pipe(map(user => {
                if(user && user.token){
                    localStorage.setItem("currentUser", JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }   
                return user;
            }), 
            catchError(err => {
                console.log(err);
                return throwError(err);
            }))

        // old self written stuff... 
        // return this.http.post("/server/authenticate", {username, password }).subscribe(
        //     loggedInUser => {
        //         if(loggedInUser !=null){
        //             this.loggedInUser = <ILoggedInUser>loggedInUser; 
        //             if(this.loggedInUser.name == null || this.loggedInUser.name == undefined){
        //                 this.loggedInUser.name = user.username;
        //             }
        //             this.session.persistSession(this.loggedInUser);

        //             this.router.navigate(['/muzo/home']);
        //             // this.userIsLoggedIn.emit(this.loggedInUser.name);
        //             new NavComponent().getdisplayName();
        //         }
        //         else {
        //             console.log("Invalid username or passwword");
        //         }
        //     }, 
        //     err => {
        //         console.error(err); 
        //         this.router.navigate(['muzo/error']);
        //     }, 
        // );;
    }

    // TODO need to think this one through .. end to end.
    public signup(username: String, password: String){
        // console.log(user.username+user.password);
        return this.http.post("server/register", {username, password}, {responseType: 'text'});
    }

    public fetchAllUsers(){
        return this.http.get("/server/muzo/get-all-users")
    }

    public logout(){
        // remove saved user values from local storage
        localStorage.removeItem("currentuser");
        this.currentUserSubject.next(null);
    }

}
