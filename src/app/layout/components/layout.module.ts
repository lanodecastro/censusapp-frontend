import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { BntNavForward } from './btn/btn-nav-forward/btn-nav-forward.component';
import { BntNavBack } from './btn/btn-nav-back/btn-nav-back.component';
import { BntDefault } from './btn/btn-default/btn-default.component';
import { BtnSubmit } from './btn/btn-submit/btn-submit.component';
import { UnavailableServiceMessage } from './unavailable-service-message/unavailable-service-message.component';
import { BadRequestMessage } from './bad-request-message/bad-request-message.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    BntNavForward,
    BntNavBack,
    BntDefault,
    BtnSubmit,
    UnavailableServiceMessage,
    BadRequestMessage
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfigFunction)
  ],
  exports: [
    BntNavForward,
    BntNavBack,
    BntDefault,
    BtnSubmit,
    UnavailableServiceMessage,
    BadRequestMessage
  ]
})
export class LayoutModule { }
