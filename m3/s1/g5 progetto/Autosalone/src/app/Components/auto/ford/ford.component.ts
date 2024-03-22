import { Component } from '@angular/core';
import { iVehicle } from '../../../Models/vehicle';


@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {
  Vehicle!: iVehicle[];
  brand!: string;
  brandLogo!: string
  modelImage!: string

  ngOnInit(): void {
    this.getVehicle();
  }

  getVehicle() {
    return fetch('../../../../assets/db.json')
        .then(res => res.json())
        .then(response => {
            this.Vehicle = response;
            this.Vehicle = this.Vehicle.filter(auto => auto.brand === 'Ford');
            this.brandLogo = this.Vehicle[0].brandLogo;
            this.brand = this.Vehicle[0].brand;
            this.modelImage = this.Vehicle[0].modelImage
        });
}
}

