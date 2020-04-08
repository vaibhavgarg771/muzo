import { Component } from "@angular/core";

@Component({
    selector:'user-profile', 
    templateUrl: './profile.component.html'
})

export class ProfileComponent{
    
    email: string = ""; 
    name: string = "";
    phone: string = ""; 
    dob: Date;

    constructor(){
        
    }
}