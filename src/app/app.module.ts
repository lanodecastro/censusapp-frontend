import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './layout/components/layout.module';
import { CommonModule } from '@angular/common';
import { RequestInterceptor } from './core/interceptors/request.interceptor';
import { NgChartsModule } from 'ng2-charts';
import { Home } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LayoutModule,
    NgChartsModule
  ],
  providers:
    [
      { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
