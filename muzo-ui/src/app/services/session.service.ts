import { Injectable, Output, EventEmitter, Input } from "@angular/core";
import { ILoggedInUser } from '../models/loggedInUser.model';


// need to phase out the usage of this, and instead use any framework provided classes if exists
@Injectable({
    providedIn:'root'
})
export class SessionService{
    
    @Output() userIsLoggedOut: EventEmitter<any> = new EventEmitter();
    @Input() userName: String = "";
    public isAuthenticated(): Boolean{
        var expiresAt = localStorage.getItem('expiresAt');
        if(expiresAt != null){
            var expiry = new Date(expiresAt); 
            if(expiry > new Date()){
                return true;
            }
            else {
                localStorage.removeItem('expiresAt');
            }
        }
        return false;
    }

    public persistSession(loggedInUser:ILoggedInUser){
        let loggedInUserId = loggedInUser.userId;
        localStorage.setItem("userId", loggedInUserId.toString());
        localStorage.setItem("name", loggedInUser.name);
        this.userName = loggedInUser.name;
        let expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate()+3);
        localStorage.setItem("expiresAt", expiresAt.toString());
    }

    public destroySession():void{
        this.userIsLoggedOut.emit("");
        localStorage.clear();
    }

    getUserIsLoggedOut(){
        return this.userIsLoggedOut;
    }
}