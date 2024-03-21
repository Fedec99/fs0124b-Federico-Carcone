import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Service/post-service.service';
import { iPost } from '../../interface/post';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrl: './post-attivi.component.scss'
})

export class ActivePostsPageComponent implements OnInit {
  post: iPost[] = [];

  constructor(private postSrv: DbService) {
    this.postSrv.getAllDb().then((response: iPost[]) => {
      this.post = response;
    })
  }

  ngOnInit(): void {
  }

}

