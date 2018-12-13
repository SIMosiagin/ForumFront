import {Component, Injectable, OnInit} from '@angular/core';
import {Roles} from "../entity/Roles";
import {Users} from "../entity/Users";
import {RestService} from "../service/rest.service";
import {TokenService} from "../service/token.service";
import {Router} from "@angular/router";



@Injectable()
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public error = null;

  private user: Users;

  constructor(private rest:RestService,
              private token: TokenService,
              private router: Router) { }

  ngOnInit() {
    this.user = new Users(null,"","","",null,null);
  }

  signUp(){
    let role: Roles = new Roles(1, "ROLE_USER");
    this.user.role = role;
    this.rest.signUp(this.user).subscribe(
      data => {
        this.hendleResponse(data),
          this.router.navigate(['signin']);
      },
    error2 => this.handleError(error2.error.error)
    );
  }

  hendleResponse(data){
    this.token.handle(data);
  }

  handleError(error){
    this.error = error;
  }
}
