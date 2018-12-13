import {Injectable} from "@angular/core";
import {Topic} from "./Topic";
import {Users} from "./Users";

@Injectable()
export class Posts{

  constructor(public id:number,
              public create_date: Date,
              public text: string,
              public topic: Topic,
              public user: Users){
  }

}
