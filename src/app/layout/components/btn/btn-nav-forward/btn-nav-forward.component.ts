import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'btn-nav-forward',
    templateUrl: './btn-nav-forward.component.html',
    styleUrls: ['./btn-nav-forward.component.css']
})
export class BntNavForward {

    @Input() title: string
    @Input() onClick: (args: any) => void;
    @Input() color: string;

    invoke(args?: any) {
        this.onClick(args);
    }


}