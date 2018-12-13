import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Topic} from "../entity/Topic";
import {RestService} from "../service/rest.service";
import {Posts} from "../entity/Posts";
import {StorageEntityService} from "../storage-entity/storage-entity.service";

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit, DoCheck {


  private topic: Topic;
  private  posts: Array<Posts>;
  constructor(private activateRoute: ActivatedRoute,
              private rest:RestService,
              private storageEntity: StorageEntityService) {
    this.topic = new Topic(activateRoute.snapshot.params['id'],
      activateRoute.snapshot.params['name'],
      activateRoute.snapshot.params['update_date'])
    // this.topic = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.rest.getPostsByTopic(this.topic).subscribe(res => {
      this.storageEntity._posts = res;
      this.posts = this.storageEntity._posts;
    });
  }

  ngDoCheck() {
      this.posts = this.storageEntity._posts;
  }

}
