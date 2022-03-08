import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BadRequest } from '../services/eventsFromException/bad-request';
import { EventsExceptions } from '../services/eventsFromException/eventsExceptions.service';


@Injectable({
    providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {

    constructor(private eventsFromExceptions: EventsExceptions) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((response: any) => {
                if (response.status == 0) {
                    this.eventsFromExceptions.SendMessage("A conexão com o servidor falhou");
                }
                if (response.status === 400) {

                    var exception = response.error;

                    var badRequestMessage = new BadRequest(exception.ExceptionType, exception.Notifications);

                    this.eventsFromExceptions.SendBadRequest(badRequestMessage);
                }

                return throwError(response);
            })
        );
    }

}


