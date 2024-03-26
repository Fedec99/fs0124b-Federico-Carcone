import { Component } from '@angular/core';
import { iPost } from '../../interface/post';
import { DbService } from '../../Service/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  postArr:iPost[] = []

  constructor(private dbSvc:DbService){}

  ngOnInit(){

    this.dbSvc.getAllDb().then(res => {

      this.postArr = res
    })
  }
}
