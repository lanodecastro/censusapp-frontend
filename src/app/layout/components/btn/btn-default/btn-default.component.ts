import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'btn-default',
    templateUrl: './btn-default.component.html',
    styleUrls: ['./btn-default.component.css']
})
export class BntDefault {
    @Input() title: string
    @Input() onClick: (args: any) => void;
    @Input() color: string;
    @Input() block: boolean

    invoke(args?: any) {
        this.onClick(args);
    }

}