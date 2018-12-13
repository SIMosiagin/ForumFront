import { Injectable } from '@angular/core';
import {Topic} from "../entity/Topic";
import {Posts} from "../entity/Posts";
import {Users} from "../entity/Users";

@Injectable()
export class StorageEntityService {

  private currUser: Users;
  private topics: Array<Topic>;
  private posts: Array<Posts>;


  constructor() { }


  get _topics(): Array<Topic> {
    return this.topics;
  }

  set _topics(value: Array<Topic>) {
    this.topics = value;
  }

  get _posts(): Array<Posts> {
    return this.posts;
  }

  set _posts(value: Array<Posts>) {
    this.posts = value;
  }

  get _currUser(): Users {
    return this.currUser;
  }

  set _currUser(value: Users) {
    this.currUser = value;
  }
}
