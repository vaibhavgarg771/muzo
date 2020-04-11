import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';

@Component({
    selector:'alert',
    templateUrl:'./alerts.component.html'
})

export class AlertsComponent implements OnInit, OnDestroy{
    private subscription: Subscription;
    message: any;

    constructor(private alertService: AlertService){

    }
    ngOnInit(){
        this.subscription = this.alertService.getMessage().subscribe(message => {
            this.message = message;
        })
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}