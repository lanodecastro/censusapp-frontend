import { Component, Input } from '@angular/core';

@Component({
    selector: 'btn-submit',
    templateUrl: './btn-submit.component.html',
    styleUrls: ['./btn-submit.component.css']
})
export class BtnSubmit {
    @Input() title: string;
    @Input() color: string;
    @Input() block: boolean;

}