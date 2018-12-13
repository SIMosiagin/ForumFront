import {Component, DoCheck, OnInit} from '@angular/core';
import {RestService} from "../service/rest.service";
import {Topic} from "../entity/Topic";
import {StorageEntityService} from "../storage-entity/storage-entity.service";

@Component({
  selector: 'app-forum-topic',
  templateUrl: './forum-topic.component.html',
  styleUrls: ['./forum-topic.component.css']
})
export class ForumTopicComponent implements OnInit, DoCheck {

  private topics: Array<Topic>;
  constructor(private rest:RestService,
              private storageEntity: StorageEntityService) { }

  ngOnInit() {
    this.rest.getAllTopick().subscribe(res => {
      this.storageEntity._topics = res;
      this.topics = this.storageEntity._topics;
    });

  }

  ngDoCheck() {
    this.topics = this.storageEntity._topics;
  }


  selectTopic(topic: Topic){

  }

  saveNewTopic



}
