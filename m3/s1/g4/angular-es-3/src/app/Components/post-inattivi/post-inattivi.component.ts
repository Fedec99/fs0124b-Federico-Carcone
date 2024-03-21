import { iPost } from './../../interface/post';
import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Service/post-service.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrl: './post-inattivi.component.scss'
})

export class PostInattiviComponent implements OnInit {

  post: iPost[] = [];

  constructor(private postSrv: DbService) {
    this.postSrv.getAllDb().then((response: iPost[]) => {
      this.post = response;
    })
  }

  ngOnInit(): void {
  }

}
