import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

// Service class for alerts/ notifications
@Injectable()
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange:boolean = false;
    
    constructor(private router: Router){
        //clear Alert message on route change
        router.events.subscribe(event => {
            if(event instanceof NavigationStart){
                // in case keeping it
                // keep only for a single navigation change 
                if(this.keepAfterNavigationChange){
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }

            }
        });
    }

    success(message:string, keepAfterNavigationChange = false){
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ 
            type: 'success', 
            text: message
        });
    }

    error(message:string, keepAfterNavigationChange = false){
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ 
            type: 'error', 
            text: message
        });
    }

    getMessage():Observable<any>{
        return this.subject.asObservable();
    }
}