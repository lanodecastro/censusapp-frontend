import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from '../layout/components/layout.module';
import { Example } from './_example/example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { Home } from './home/home.component';

@NgModule({
    declarations: [
        Example
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        PagesRoutingModule,
        LayoutModule,
        NgChartsModule
    ]
})
export class PagesModule { }
