import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Autenticacao } from '../models/autenticacao.model';
import Api from './api.service';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private tokenKey: string = "_userData";
  @Output() triggerLogin: EventEmitter<string> = new EventEmitter();

  constructor(private api: Api) {

  }

  storeUserData(token: string, username: string) {

    var autenticacao = new Autenticacao(token, username);

    localStorage.setItem(this.tokenKey, JSON.stringify(autenticacao));
    this.triggerLogin.emit();
  }

  getUserData(): Autenticacao | null {
    var userdadata = localStorage.getItem(this.tokenKey);

    if (!userdadata)
      return null;

    return <Autenticacao>JSON.parse(userdadata);

  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  isAuth(): Observable<boolean> {

    return this.api.GET('security/is-auth')
      .pipe(
        map(response => response as boolean)
      );
  }
}