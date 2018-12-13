
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Topic} from "../entity/Topic";
import {Posts} from "../entity/Posts";
import {Users} from "../entity/Users";


@Injectable()
export class RestService  {

  constructor(private http: HttpClient) { }

  signIn(data){
    return this.http.post("http://localhost:8080/login", data, { responseType: 'text' })
  }

  signUp(data){
    return this.http.post("http://localhost:8080/signup", data,);
  }

  getAllTopick(){
    return this.http.get<Array<Topic>>("http://localhost:8080/forum/getAllTopic");
  }

  getPostsByTopic(topic: Topic){
    return this.http.post<Array<Posts>>("http://localhost:8080/forum/getPostsByTopic",topic);
  }

  saveTopic(topic: Topic){
    return this.http.put<Array<Topic>>("http://localhost:8080/forum/saveTopic",topic);
  }

  savePost(post: Posts){
    return this.http.put<Array<Posts>>("http://localhost:8080/forum/savePost",post);
  }

  getAllUsers(){
    return this.http.get<Array<Users>>("http://localhost:8080/forum/getAllUsers");
  }

  getUser(nickname){
    return this.http.post<Users>("http://localhost:8080/forum/getUser",nickname);
  }

}
