import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

// Class to intercept Http errors thrown via server such as 401 unauthorised acces
@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    constructor(private authenticationService: AuthenticationService){
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(request).pipe(catchError(err => {
            if(err.status === 401){
                this.authenticationService.logout();
                location.reload(true);
            }
            const errorMessage = err.error.message || err.statusText;
            return throwError(errorMessage);
        })) 
    
    }
}