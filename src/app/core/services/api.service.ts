import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export default class Api {

    constructor(private http: HttpClient) { }

    POST<T>(url: string, payload: object): Observable<T> {
        return this.http.post<T>(`${environment.apiUrl}/${url}`, payload);
    }
    GET<T>(url: string): Observable<T> {
        return this.http.get<T>(`${environment.apiUrl}/${url}`);
    }
    POST_E<T>(url: string, payload: object): Observable<T> {
        return this.http.post<T>(url, payload);
    }
    GET_E<T>(url: string): Observable<T> {
        return this.http.get<T>(url);
    }

    handleError(error: HttpErrorResponse) {
        return throwError(error);
    }

}
