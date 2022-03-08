import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'btn-nav-back',
    templateUrl: './btn-nav-back.component.html',
    styleUrls: ['./btn-nav-back.component.css']
})
export class BntNavBack {
    @Input() title: string
    @Input() onClick: (args: any) => void;
    @Input() color: string;

    invoke(args?: any) {
        this.onClick(args);
    }

}