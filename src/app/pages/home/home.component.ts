import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import Api from 'src/app/core/services/api.service';
import { SignalRService } from 'src/app/core/services/signal-r/signal-r.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class Home implements AfterViewInit {
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    response$: Observable<any>;
    pessoa: any;


    constructor(private api: Api, private signalRService: SignalRService) { }
    ngAfterViewInit(): void {

        var signalRService = this.signalRService;
        signalRService.startConnection();
        var hubConnection = signalRService.hubConnection;

        this.getData();

        hubConnection.on('notify', (response) => {
            this.pessoa = response;
            this.getData()
        });
    }

    getData() {
        this.response$ = this.api.GET<any>('dashboard');
    }


}