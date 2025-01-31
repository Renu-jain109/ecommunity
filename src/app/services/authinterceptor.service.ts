import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthinterceptorService implements HttpInterceptor {
  // Use inject properly to retrieve the UserService instance
  private userService = inject(UserService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.userService.getToken(); // Retrieve the token

    // Clone the request and add the Authorization header if the token exists
    const authReq = token
      ? req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      })
      : req;

    return next.handle(authReq); // Pass the cloned or original request to the next handler
  }
}