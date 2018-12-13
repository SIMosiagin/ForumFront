import { Component, OnInit } from '@angular/core';
import {Topic} from "../../entity/Topic";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RestService} from "../../service/rest.service";
import {StorageEntityService} from "../../storage-entity/storage-entity.service";

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {

  private topic: Topic;

  constructor(private modalService: NgbModal,
              private rest: RestService,
              private storageEntity: StorageEntityService) { }

  ngOnInit() {
    this.topic = new Topic(null,"",new Date())
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.rest.saveTopic(this.topic).subscribe(res=>{
        this.storageEntity._topics = res;
      })
    });
  }

}
