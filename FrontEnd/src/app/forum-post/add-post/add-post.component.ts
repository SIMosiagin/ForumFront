import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../../entity/Topic";
import {RestService} from "../../service/rest.service";
import {StorageEntityService} from "../../storage-entity/storage-entity.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ForumPostComponent} from "../forum-post.component";
import {Posts} from "../../entity/Posts";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @Input()
  private topic: Topic;
  private text: string;


  constructor(private modalService: NgbModal,
              private rest: RestService,
              private storageEntity: StorageEntityService) {
  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      let post : Posts = new Posts(null, new Date(),this.text, this.topic,this.storageEntity._currUser)
      this.rest.savePost(post).subscribe(res => {
        this.storageEntity._posts = res;
      })
    });
  }
}

