import { Component, OnInit } from '@angular/core';
import { EventsExceptions } from 'src/app/core/services/eventsFromException/eventsExceptions.service';

@Component({
    selector: 'app-unavailable-service-message',
    templateUrl: './unavailable-service-message.component.html',
    styleUrls: ['./unavailable-service-message.component.css']
})
export class UnavailableServiceMessage {

    message!: string

    constructor(private eventsExceptions: EventsExceptions) {

        this.eventsExceptions.TriggerMessage.subscribe(result => {

            this.message = result;

        });
    }

}