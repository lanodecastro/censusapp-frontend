import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { BadRequest } from 'src/app/core/services/eventsFromException/bad-request';
import { EventsExceptions } from 'src/app/core/services/eventsFromException/eventsExceptions.service';

@Component({
    selector: 'app-bad-request-message',
    templateUrl: './bad-request-message.component.html',
    styleUrls: ['./bad-request-message.component.css']
})
export class BadRequestMessage {

    @Input() exceptionType?: string;

    badRequest?: BadRequest

    constructor(private eventsExceptions: EventsExceptions) {

        this.eventsExceptions.TriggerBadRequest
            .pipe(
                map(result => this.badRequest = result)
            )
            .subscribe();
    }

}