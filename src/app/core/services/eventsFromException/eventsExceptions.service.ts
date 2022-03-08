import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { BadRequest } from './bad-request';

@Injectable({
    providedIn: 'root'
})
export class EventsExceptions {

    @Output() TriggerBadRequest: EventEmitter<BadRequest> = new EventEmitter();

    @Output() TriggerMessage: EventEmitter<string> = new EventEmitter();

    constructor(private router: Router) { }

    SendMessage(message: string) {
        this.TriggerMessage.emit(message);
        return this;
    }

    SendBadRequest(badRequestMessage: BadRequest) {
        this.TriggerBadRequest.emit(badRequestMessage);
        return this;
    }
}
