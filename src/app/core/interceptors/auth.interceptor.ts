import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { AuthService } from "../services/auth.service";
import { catchError } from 'rxjs/operators';
import { ToastService } from "../services/toast.service";
import { error } from "@angular/compiler/src/util";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private authService: AuthService, private toastService: ToastService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getToken();

        if(token){
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMsg = 'An unexpected network error occurred.';

                if(error.status === 401){
                    errorMsg = 'Session expired or unauthorized. Please log in again.';
                    this.authService.logOut();
                }
                else if(error.status === 403){
                    errorMsg = 'Access Denied: You do not have permission to view this data.';
                }
                else if(error.status === 0){
                    errorMsg = 'Server is offline. Make sure the Node backend is running.';
                }
                else if(error.error && error.error.message){
                    errorMsg = error.error.message;
                }

                this.toastService.showError(errorMsg);
                return throwError(() => error);
            })
        );
    }

}