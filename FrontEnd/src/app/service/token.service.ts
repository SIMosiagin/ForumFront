import { Injectable} from '@angular/core';
import {StorageEntityService} from "../storage-entity/storage-entity.service";
import {RestService} from "./rest.service";

@Injectable()
export class TokenService {

  constructor(private storageEntity: StorageEntityService,
              private rest: RestService) { }


  handle(token){
    this.setToken(token);
    const payload  = this.payload(token);
    this.rest.getUser(payload.sub).subscribe(res =>{
      this.storageEntity._currUser = res;
    })

  }

  setToken(token){
    localStorage.setItem('token', token)
  }

  getToken(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.clear();
    
  }

  isValid(){
    const token = this.getToken()
    return token ? true : false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));

  }
  logginIn(){
    return this.isValid();
  }
}
