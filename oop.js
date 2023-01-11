//Encapsulation//
//-------------//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// We have access to the objects internals, as a client of the object
//So we are able to change the instance variables ourselves.
//We do not want it to be exposed to the public
// class Player {
//     health: number;
//     speed: number;
// }
// const mario = new Player()
// mario.health = 10;
// mario.speed = 2;
//-----------------------------------//
//By making the instance variables private
//They will no longer be accessible from the outside
// class Player {
//     private health: number;
//     private speed: number;
// }
// const mario = new Player()
// mario.health = 10;
// mario.speed = 2;
//--------------------------------//
//The way to set the property would be
//With the Get and Set Methods
//Set-simply sets the information
//Get-simply retrieves the information
// class Player {
//     private health: number;
//     private speed: number;
//     setHealth(health: number) {
//         this.health = health;
//     }
//     getHealth() {
//         return this.health;
//     }
//     setSpeed(speed: number) {
//         this.speed = speed;
//     }
//     getSpeed() {
//         return this.speed;
//     }
// }
// const mario = new Player();
// mario.setHealth(10);
// mario.setSpeed(1);
// console.log(`Mario has ${mario.getHealth()} health`)
//--------------------------------//
//Let's see how we would actually use it
//By adding logic we can set standards that 
//Cannot be accessed by the public
// class Player {
//     private health: number;
//     private speed: number;
//     setHealth(health: number) {
//         if (health < 0) {
//             console.log("Health cannot go below 0")
//         }
//         this.health = health;
//     }
//     getHealth() {
//         return this.health;
//     }
//     setSpeed(speed: number) {
//         this.speed = speed;
//     }
//     getSpeed() {
//         return this.speed;
//     }
// }
// const mario = new Player();
// mario.setHealth(-3);
// mario.setHealth(9);
// mario.setSpeed(1);
// console.log(`Mario has ${mario.getHealth()} Health`)
// console.log(`Mario has ${mario.getSpeed()} Speed`)
//------------------------------------------------------------------------//
//Inheritance//
//-----------//
//Animal is the super class in this case while
//Dog and Cat are the sub classes that will inherit
//The super class information
//The extends keyword is what will link the classes together
// class Animal {
//     hunger: number;
//     health: number;
//     coordX: number;
//     coordY: number;
//     eat() {
//         console.log("I'm eating")
//     }
//     sleep() {
//         console.log("I'm sleeping")
//     }
//     move() {
//         console.log("I'm moving")
//     }
//     makeNoise() {
//         console.log("I'm barking")
//     }
// }
// class Dog extends Animal { }
// class Cat extends Animal { }
// const dog = new Dog()
// dog.makeNoise();
//---------------------//
//If we want the Dog class to have a specific behavior
//We will simply re-declare the variable to override it
// class Animal {
//     hunger: number;
//     health: number;
//     coordX: number;
//     coordY: number;
//     eat() {
//         console.log("I'm eating")
//     }
//     sleep() {
//         console.log("I'm sleeping")
//     }
//     move() {
//         console.log("I'm moving")
//     }
//     makeNoise() {
//         console.log("I'm barking")
//     }
// }
// class Dog extends Animal {
//     makeNoise() {
//         console.log("Bark Bark");
//     }
// }
// class Cat extends Animal { }
// const dog = new Dog()
// dog.makeNoise();
//-----------------------//
//The returnToOwner method can use the instance variables 
//In the Animal class, because the Dog class inherited them
//And the returnToOwner method is inside the Dog class
// class Animal {
//     hunger: number;
//     health: number;
//     coordX: number;
//     coordY: number;
//     eat() {
//         console.log("I'm eating")
//     }
//     sleep() {
//         console.log("I'm sleeping")
//     }
//     move() {
//         console.log("I'm moving")
//     }
//     makeNoise() {
//         console.log("I'm barking")
//     }
// }
// class Dog extends Animal {
//     makeNoise() {
//         console.log("Bark Bark");
//     }
//     returnToOwner() {
//         console.log(`Im at (${this.coordX},and ${this.coordY}) and now i'm returning`)
//     }
// }
// class Cat extends Animal { }
// const dog = new Dog()
// const cat = new Cat()
// dog.makeNoise();
// cat.makeNoise();
//----------------//
//We will be using Set to set the x and y coordinate
//So that we can use encapulation
//We'll still have public variables, so this is simply an example
//We'll also see that the super class private variables do not get inherited
// class Animal {
//     hunger: number;
//     health: number;
//     private coordX: number;
//     private coordY: number;
//     setCoordX(x: number) {
//         this.coordX = x;
//     }
//     setCoordY(y: number) {
//         this.coordY = y;
//     }
//     eat() {
//         console.log("I'm eating")
//     }
//     sleep() {
//         console.log("I'm sleeping")
//     }
//     move() {
//         console.log("I'm moving")
//     }
//     makeNoise() {
//         console.log("I'm barking")
//     }
// }
// class Dog extends Animal {
//     makeNoise() {
//         console.log("Bark Bark");
//     }
//     returnToOwner() {
//         console.log(`Im at (${this.coordX},and ${this.coordY}) and now i'm returning`)
//     }
// }
// class Cat extends Animal { }
// const dog = new Dog()
// dog.setCoordX(10)
// dog.setCoordY(10)
// const cat = new Cat()
// dog.makeNoise();
// cat.makeNoise();
//---------------//
//The way to make the instance variables private, while also
//Allowing the sub class to inherit them, is to use the protected Keyword
// class Animal {
//     hunger: number;
//     health: number;
//     protected coordX: number;
//     protected coordY: number;
//     setCoordX(x: number) {
//         this.coordX = x;
//     }
//     setCoordY(y: number) {
//         this.coordY = y;
//     }
//     eat() {
//         console.log("I'm eating")
//     }
//     sleep() {
//         console.log("I'm sleeping")
//     }
//     move() {
//         console.log("I'm moving")
//     }
//     makeNoise() {
//         console.log("I'm barking")
//     }
// }
// class Dog extends Animal {
//     makeNoise() {
//         console.log("Bark Bark");
//     }
//     returnToOwner() {
//         console.log(`Im at (${this.coordX},and ${this.coordY}) and now i'm returning`)
//     }
// }
// class Cat extends Animal { }
// const dog = new Dog()
// dog.setCoordX(10)
// dog.setCoordY(10)
// const cat = new Cat()
// dog.makeNoise();
// cat.makeNoise();
//-------------------------------------------//
//Polymorphism//
//In this example, we have a base class Vehicle that has a single method drive(). 
//The Car and Boat classes inherit from Vehicle and provide their own implementation of the drive() method.
//We then have a function operateVehicle(vehicle: Vehicle) that takes a Vehicle as an argument, 
//And call the drive() method on it. We can use this function to operate any vehicle, 
//Whether it's a Car or a Boat, it will work the same.
//In this example, polymorphism allows us to write a single function operateVehicle(vehicle: Vehicle) 
//That can work with objects of multiple classes (Car and Boat) that are derived from a common base class (Vehicle).
//--------------//
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log("The vehicle is driving.");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.drive = function () {
        console.log("The car is driving on the road.");
    };
    return Car;
}(Vehicle));
var Boat = /** @class */ (function (_super) {
    __extends(Boat, _super);
    function Boat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boat.prototype.drive = function () {
        console.log("The boat is sailing on the water.");
    };
    return Boat;
}(Vehicle));
function operateVehicle(vehicle) {
    vehicle.drive();
}
var myCar = new Car();
var myBoat = new Boat();
operateVehicle(myCar);
operateVehicle(myBoat);
