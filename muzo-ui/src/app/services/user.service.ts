import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn:'root'})
export class UserService{
    constructor(private http: HttpClient){}
    getAll(){
        return this.http.get<any>("/server/get-all-users");
    }

    getById(id:number){
        return this.http.get<any>("server/users/${id}")
    }

    // update(phone: number){
    //     return this.http.post<any>
    // }
}