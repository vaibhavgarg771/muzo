import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'random-component', 
    templateUrl: './random.component.html'
})

export class RandomComponent implements OnInit{
    public users;
    constructor(private authService: AuthenticationService){}

    ngOnInit(){
        this.authService.fetchAllUsers().subscribe(
            data => {this.users = data}, 
            err => {
                console.log("Displaying errors");
                console.error(err); 
            }, 
            () => console.log("fetched all users")
        );
    }

}