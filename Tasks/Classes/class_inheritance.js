class Vehicle {
    
    constructor(wheels, speed, engine) {

        this._wheels = wheels;
        this._speed = speed;
        this._engine = engine;
    }

    brake() {
        console.log("Vehicle brake()");
    }

    //Static Method
    static checkType(obj) {

        if (obj instanceof Car && obj._wheels === 4) console.log("This is a Car");

        else if (obj instanceof Bike && obj._wheels === 2) console.log("This is a Bike");

        else ("Match Not Found")
    }
}


//Creating car Class extends Vehicle
class Car extends Vehicle {
    #model
    constructor(model, speed, engine) {
        super(4, speed, engine);

        this.#model = model;

    }

    drumBrakes() {
        super.brake()
        console.log("Car drumBrakes()");
    }

    carInfo() {

        console.log(`model : ${this.#model} | speed : ${this._speed} | Engine : ${this._engine}`)
    }

}

console.log("Creating a Car Object :-");
let BMW = new Car("BMW X3", "300 km/h", "1998cc");
BMW.carInfo();
BMW.drumBrakes();




//Creating Bike Class
class Bike extends Vehicle {
    #model;
    constructor(model, speed, engine) {
        super(2, speed, engine);
        this.#model = model;

    }

    //Overriding
    brake() {
        console.log("Bike discBrakes()");
    }

    bikeInfo() {

        console.log(`model : ${this.#model} | speed : ${this._speed} | Engine : ${this._engine}`)
    }

}

console.log("\nCreating a Bike Object :-");

let pulsar = new Bike("Pulsar 220F", "134 km/h", "220cc");

// pulsar.#model = "abc"
pulsar.bikeInfo();
pulsar.brake();





console.log("\nVehicle Static method :-");

Vehicle.checkType(pulsar);
Vehicle.checkType(BMW);

Car.checkType(pulsar);
Bike.checkType(BMW);



console.log("\n-------------------Mixins----------------------------");

let carUtility = {

    music: function(){
        console.log("Playing Music");
    },

    gps: function(){
        console.log("Navigating");
    }

}


Object.assign(Car.prototype,carUtility);

BMW.music();
BMW.gps();

