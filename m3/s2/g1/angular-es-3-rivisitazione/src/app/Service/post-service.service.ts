import { Injectable } from '@angular/core';
import { iPost } from '../interface/post';
import { iJsonContent } from '../interface/json-content';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  postArr:iPost[] = [];

  getAllDb():Promise<iPost[]>{

    return fetch('../assets/db.json')
    .then(res => res.json())
    .then((res:iJsonContent) => res.posts)

}

  getActiveDb():iPost[]{

    return this.postArr.filter(p => p.active)
  }

  getInactiveDb(){

    return this.postArr.filter(p => !p.active)
  }

}
