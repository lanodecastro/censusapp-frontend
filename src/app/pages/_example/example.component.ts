import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
})
export class Example implements OnInit {

    ngOnInit(): void {

    }
    onClickBtn() {
        alert('clicked');
    }



}