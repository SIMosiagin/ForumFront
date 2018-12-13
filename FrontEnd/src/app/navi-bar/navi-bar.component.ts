import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthServiceService} from "../service/auth-service.service";
import {TokenService} from "../service/token.service";

@Component({
  selector: 'app-navi-bar',
  templateUrl: './navi-bar.component.html',
  styleUrls: ['./navi-bar.component.css']
})
export class NaviBarComponent implements OnInit , DoCheck{

  public loggedIn: boolean;
  constructor(private auth: AuthServiceService,
              private token: TokenService) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value=> this.loggedIn = value);
  }

  signOut(){
    this.token.remove();
  }

  ngDoCheck(){
    this.auth.authStatus.subscribe(value=> this.loggedIn = value);
  }


}
