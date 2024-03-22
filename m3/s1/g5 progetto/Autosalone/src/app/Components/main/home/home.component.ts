import { Component } from '@angular/core';
import { iVehicle } from '../../../Models/vehicle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  Vehicle!: iVehicle[];
  randomVehicle: iVehicle[] = [];
  brand!: string[];
  modelImage!: string


constructor() { }

  ngOnInit(): void {
    this.getVehicle();
  }

  async getVehicle(): Promise<void> {
    try {
      const res = await fetch('../../../../assets/db.json');
      const response = await res.json();
      this.Vehicle = response;
      this.brand = this.extractBrands();
      this.getRandomVehicle(2);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  }


  extractBrands(): string[] {
    const uniqueBrands = new Set<string>();
    this.Vehicle.forEach(auto => uniqueBrands.add(auto.brandLogo));
    return Array.from(uniqueBrands);
  }


  getRandomVehicle(num: number): void {
    const availableIndices = Array.from({ length: this.Vehicle.length }, (_, index) => index);
    for (let i = 0; i < num; i++) {
      const randomIndex = Math.floor(Math.random() * availableIndices.length);
      const randomAutoIndex = availableIndices.splice(randomIndex, 1)[0];
      this.randomVehicle.push(this.Vehicle[randomAutoIndex]);
    }
  }
}


