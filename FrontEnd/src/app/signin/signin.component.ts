import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Users} from "../entity/Users";

import {getBodyNode} from "@angular/animations/browser/src/render/shared";
import {RestService} from "../service/rest.service";
import {TokenService} from "../service/token.service";
import {_do} from "rxjs/operator/do";
import {pipe} from "rxjs/Rx";
import {map} from "rxjs/operator/map";
import {Router} from "@angular/router";
import {AuthServiceService} from "../service/auth-service.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private user: Users;
  public error = null;

  constructor(private rest:RestService,
              private token:TokenService,
              private router: Router,
              private authService: AuthServiceService) { }

  ngOnInit() {
    this.user = new Users(null,"","","",null,null);
  }

  handleError(error){
    this.error = error;
    console.log(error);
  }

  onSubmit(){
    let asdasd;
    return this.rest.signIn(this.user).subscribe((res : string) =>{
      let token = res;
      if (token){
        this.token.handle(token);
        this.authService.changeAuthStatus(true);
        this.router.navigate(['/forum/topics']);
      }
    },
      error2 => this.handleError(JSON.parse(error2.error).message)
    );
  }

  handleRespose(data){
    this.token.handle(data.Authorization);
  }

}
