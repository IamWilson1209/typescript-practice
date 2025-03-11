class Vehicle {

  constructor(public color: string) {
    // this.color = color;
  }

  public drive(): void {
    console.log("Vehicle is driving");
  }
  private honk(): void {
    console.log("Vehicle is honking");
  }
  protected turn(): void {
    console.log("Vehicle is turning");
  }
  vehiclePrivate(): void {
    this.drive();
    this.honk();
    this.turn();
  }
}

class Car extends Vehicle {

  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log("car is driving");
  }
  // honk(): void {
  //   console.log("Car is honking");
  // }
  turn(): void {
    console.log("Car is turning");
  }
  carPrivate(): void {
    this.drive();
    this.turn();
    // this.honk();
  };
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
vehicle.drive();
// vehicle.honk();
// vehicle.turn();

const car = new Car(4, 'red');
console.log(car.color);
car.drive();
// car.honk();
car.turn();

