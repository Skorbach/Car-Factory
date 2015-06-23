function Car(make, model, colour) {
  this.make = make;
  this.model = model;
  this.colour = colour;
}

var car1 = new Car("BMW", "BMW", "Blue");
var car2 = new Car("VW", "VW", "Orange");

console.log(car1);
console.log(car2);



function Factory(factoryMake, factoryModel, factoryColour, numberToManufacture) {
  this.numberToManufacture = numberToManufacture;
  this.factoryMake = factoryMake;
  this.factoryModel = factoryModel;
  this.factoryColour = factoryColour;
  this.manufacturedCars = [];

  this.manufacture = function manufacture() {
  	var yourCar = new Car(this.factoryMake, this.factoryModel, this.factoryColour);
  		for (var i = 0; i <= this.numberToManufacture; i++) {
  			this.manufacturedCars.push(yourCar);
  		}
  		
  }
}

var audiFactory = new Factory("Audi", "R8", "Red", 5);

audiFactory.manufacture();

console.log(audiFactory.manufacturedCars);
