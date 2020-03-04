import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from "./../components/user/user.model"
import { ILoggedInUser } from '../models/loggedInUser.model';
import { SessionService } from './session.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService{

    loggedInUser: ILoggedInUser;
    constructor(private router: Router, private http: HttpClient, private session: SessionService){}

    public login(user: IUser){
        this.http.post("/server/muzo/login", user).subscribe(
            loggedInUser => {
                if(loggedInUser !=null){
                    this.loggedInUser = <ILoggedInUser>loggedInUser; 
                    if(this.loggedInUser.name == null || this.loggedInUser.name == undefined){
                        this.loggedInUser.name = user.username;
                    }
                    this.session.persistSession(this.loggedInUser);
                    this.router.navigate(['/muzo/home']);
                    // this.userIsLoggedIn.emit(this.loggedInUser.name);
                    // new NavComponent().ngOnInit();
                }
                else {
                    console.log("Invalid username or passwword");
                }
            }, 
            err => {
                console.error(err); 
                this.router.navigate(['muzo/error']);
            }, 
        );;
    }

    public signup(user: IUser){
        console.log(user.username+user.password);
        return this.http.post("server/muzo/signup", user, {responseType: 'text'});
    }

    public fetchAllUsers(){
        return this.http.get("/server/muzo/get-all-users")
    }

}
