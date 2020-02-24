import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  
@Injectable({
    providedIn: 'root'
})
export class ErrorService{

    constructor(private http: HttpClient){}

    getError(){
        return this.http.get("http://localhost:8080/muzo/error", {responseType: 'text'});
    }
}