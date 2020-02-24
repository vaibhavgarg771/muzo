import { Component, OnInit } from "@angular/core";
import { ErrorService } from 'src/app/services/error.service';

@Component({
    selector:"error-component", 
    templateUrl: "./error.component.html",
})

export class ErrorComponent implements OnInit{

    public errorMessage: String;
    constructor(private errorService: ErrorService){}

    ngOnInit(){
        this.getErrorMessage();
    }

    getErrorMessage(){
        this.errorService.getError().subscribe(
            data => { this.errorMessage = String(data)}, 
            err => console.error(err), 
            () => console.log("fetched the error")
        );
    }
}