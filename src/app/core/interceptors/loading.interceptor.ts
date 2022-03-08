// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor, HttpResponse
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
// import { LoadingService } from '../shared/services/loading.service';

// @Injectable()
// export class LoadingInterceptor implements HttpInterceptor {

//   constructor(private _loading: LoadingService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     this._loading.setLoading(true, req.url);
//     return next.handle(req)
//       .pipe(catchError((err) => {
//         this._loading.setLoading(false, req.url);
//         return throwError(err);
//       }))
//       .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
//         if (evt instanceof HttpResponse) {
//           this._loading.setLoading(false, req.url);
//         }
//         return evt;
//       }));
//   }

// }