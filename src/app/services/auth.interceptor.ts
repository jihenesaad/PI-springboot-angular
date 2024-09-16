import { Observable, catchError, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest ,HTTP_INTERCEPTORS, HttpErrorResponse, HttpClient} from "@angular/common/http";

import { LoginService } from "./login.service";
import { AccountService } from "./account.service";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   
   // static accessTokenn='';
    constructor(private accountService: AccountService,
        private http:HttpClient
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const user = this.accountService.userValue;
        const isLoggedIn = user && user.token;
        const isApiUrl = request.url.startsWith(environment.apiUrl);

        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    Authorization: `access ${user.token}`,
                    'RefreshToken': user.refreshToken || '' 
                }
            });
        }

        return next.handle(request);
        
        }
      /*  intercepte(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
            const req = request.clone( {
                setHeaders : {
                    Authorization: `Bearer ${AuthInterceptor.accessTokenn}`

                }
            });

            return next.handle(req).pipe(catchError((err:HttpErrorResponse)=>{


                if(err.status ==401){

                }
                return throwError(()=> err);
            }));
        }

*/


}
    
