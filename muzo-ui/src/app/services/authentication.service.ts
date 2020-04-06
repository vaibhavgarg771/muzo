import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from "./../components/user/user.model"

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService{

    constructor(private authService: AuthenticationService, private router: Router, private http: HttpClient){}

    public login(user: IUser){
        return this.http.post("/server/muzo/login", user, {responseType: 'text'});
    }

    public signup(user: IUser){
        return this.http.post("server/muzo/signup", user, {responseType: 'text'});
    }

    public fetchAllUsers(){
        return this.http.get("/server/muzo/get-all-users")
    }
}
