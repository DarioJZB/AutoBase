// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  vin: string;
  color: string; 
  make: string; 
  model: string; 
  year: number; 
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    if(wheels.length === 2){
      this.wheels = wheels;
    } else {
      this.wheels = [new Wheel(), new Wheel()];
    }
  }
 
  wheelie (): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  override printDetails(): void {
    super.printDetails();

    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`); 
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`); 
    console.log(`Color: ${this.color}`);
    for(let i = 0; i < this.wheels.length; i++){
      console.log(`Wheel ${i + 1}: ${this.wheels[i].getDiameter} inch with a ${this.wheels[i].getTireBrand} tire`);
    }
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
