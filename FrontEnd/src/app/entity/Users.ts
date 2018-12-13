import {Injectable} from "@angular/core";
import {Roles} from "./Roles";

@Injectable()
export class Users{
  constructor(public id:number,
              public nickName:string = "",
              public email:string = "",
              public pass:string = "",
              public salt:string,
              public role:Roles){
  }


}
