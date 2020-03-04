import { Component, OnInit, Input } from "@angular/core";
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../user/login/login.component';

@Component({
    selector: "nav-bar", 
    templateUrl: "./nav.component.html", 
    styles: [
        `
            li > a.active {color: #F97924;}
        `
    ] 
})

export class NavComponent implements OnInit{

    searchTerm: string = "";
    displayName: string = "";
    i: number=0;
    constructor(private session?: SessionService, private router?: Router){}
    ngOnInit(){
        console.log("called ngOnInit of navComponent with displayName:", this.displayName, this.i);
        this.i+=1;
        this.getdisplaName();
        new LoginComponent().getUserIsLoggedIn().subscribe(name=> {
            this.displayName = name;
            console.log("just checking if this is even called everytime I login or logout!!");
        })
        this.session.getUserIsLoggedOut().subscribe(name => {
            this.displayName = "";
            console.log("just checking if this is even called everytime I login or logout!!");
        })
    }
    search(){
        console.log("Searching"+this.searchTerm)
        //Search for Songs
    }

    getdisplaName(){
        console.log("fetching getdisplaName")
        var expiresAt = localStorage.getItem('expiresAt');
        if(expiresAt != null){
            var expiry = new Date(expiresAt); 
            if(expiry > new Date()){
                this.displayName = localStorage.getItem("name");
                console.log("displayName is", this.displayName);
                var newExpiry = new Date();
                newExpiry.setDate(newExpiry.getDate()+2);
                localStorage.setItem("expiresAt", newExpiry.toString());
            }
            else{
                localStorage.removeItem("emaill");
                localStorage.removeItem("expiresAt");
            }
        }
    }

    public logout():void{
        this.session.destroySession();
        this.ngOnInit();
        this.router.navigate(['/muzo/home']);
    }

    switchToProfile(){
        this.router.navigate(['/muzo/random']);
    }

}