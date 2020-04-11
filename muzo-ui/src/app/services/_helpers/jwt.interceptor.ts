import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';


// class to intercept the requests sent to server and add the jwt token for authorization
@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    constructor(private authService: AuthenticationService){}
    intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
        let currentUser = this.authService.currentUserValue;
        if(currentUser && currentUser.token){
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ${currentUser.token}'
                }
            });
        }
        return next.handle(request);
    }
}