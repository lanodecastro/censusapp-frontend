import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, pipe } from 'rxjs';
import Api from './core/services/api.service';
import { SignalRService } from './core/services/signal-r/signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public signalRService: SignalRService, private http: HttpClient) { }

  ngOnInit() {


  }
}
