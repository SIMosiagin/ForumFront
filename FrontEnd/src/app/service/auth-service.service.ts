import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {TokenService} from "./token.service";

@Injectable()
export class AuthServiceService {

  private loggedIn = new BehaviorSubject<boolean>(this.tokenService.logginIn());
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value: boolean){
    this.loggedIn.next(value);
  }

  constructor(private tokenService: TokenService) { }

}
