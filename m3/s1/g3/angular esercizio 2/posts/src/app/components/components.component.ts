import { Component } from '@angular/core';
import { iFetchTs } from '../Models/fetch.ts';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {

  fetchArr:iFetchTs[] = [];

  ngOnInit() {

    fetch('../assets/db.json')
    .then(fetch => fetch.json())
    .then((fetch:iFetchTs[]) => this.fetchArr = fetch)

  }

  soloDisponibili(){
    this.fetchArr = this.fetchArr.filter(p => p.active)
  }
}
