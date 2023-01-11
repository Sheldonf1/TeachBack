//Encapsulation//
//-------------//

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
//------------//
//In this example, we have a base class Vehicle that has a single method drive(). 
//The Car and Boat classes inherit from Vehicle and provide their own implementation of the drive() method.
//We then have a function operateVehicle(vehicle: Vehicle) that takes a Vehicle as an argument, 
//And call the drive() method on it. We can use this function to operate any vehicle, 
//Whether it's a Car or a Boat, it will work the same.
//In this example, polymorphism allows us to write a single function operateVehicle(vehicle: Vehicle) 
//That can work with objects of multiple classes (Car and Boat) that are derived from a common base class (Vehicle).
//As you can see, polymorphism allows us to define a single interface (the method drive in this case)
//That can be overridden in derived class for specific behaviors, and we can write a single function (operateVehicle) 
//That can work with objects of multiple classes that implement that interface.


// class Vehicle {
//     drive(): void {
//         console.log("The vehicle is driving.");
//     }
// }

// class Car extends Vehicle {
//     drive(): void {
//         console.log("The car is driving on the road.");
//     }
// }

// class Boat extends Vehicle {
//     drive(): void {
//         console.log("The boat is sailing on the water.");
//     }
// }

// function operateVehicle(vehicle: Vehicle) {
//     vehicle.drive();
// }

// const myCar = new Car();
// const myBoat = new Boat();

// operateVehicle(myCar);
// operateVehicle(myBoat);

//-------------------------------------------//

//Abstraction//
//-----------//

//In this example, an abstract Shape class is defined which has an abstract method area(). 
//This method doesn't have any implementation, it's left for the sub-classes to provide the implementation.
//The Square and Circle classes inherit from the Shape class and implement the area() method in their own way, 
//Providing the specific implementation for their shape.
//The Shape class is an abstraction of the concepts of a shape and its area, 
//While the Square and Circle classes are concrete implementations of that abstraction. 
//By using the Shape class as a base class, we can write code that works with any shape, 
//without needing to know the details of how the area is calculated.
//Using abstract class or methods, we can provide a common interface for the subclasses, 
//so that it will be easy for the developer to know what all methods he can use and what all properties 
//he should set in the object of subclasses, also it avoids the code duplication.


// abstract class Shape {
//     abstract area(): number;
//   }
  
//   class Square extends Shape {
//     sideLength: number;
  
//     constructor(sideLength: number) {
//       super();
//       this.sideLength = sideLength;
//     }
  
//     area(): number {
//       return this.sideLength ** 2;
//     }
//   }
  
//   class Circle extends Shape {
//     radius: number;
  
//     constructor(radius: number) {
//       super();
//       this.radius = radius;
//     }
  
//     area(): number {
//       return Math.PI * this.radius ** 2;
//     }
//   }
  
//   const square = new Square(5);
//   console.log(square.area()); // 25
  
//   const circle = new Circle(2);
//   console.log(circle.area()); // 12.57
  