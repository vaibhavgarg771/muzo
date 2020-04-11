import { Component, OnInit, Input } from "@angular/core";
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Subscription } from 'rxjs';

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

    currentUser: IUser;
    currentUserSubscription: Subscription;
    searchTerm: string = "";

    constructor(private authService: AuthenticationService, private router: Router){
        this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
            this.currentUser = user;
        })
    }
    
    ngOnInit(){

    }
    
    search(){
        console.log("Searching"+this.searchTerm)
        //Search for Songs
    }

    public logout():void{
        this.currentUserSubscription.unsubscribe();
        this.router.navigate(['/muzo/home']);
    }

    switchToProfile(){
        this.router.navigate(['/muzo/random']);
    }

}