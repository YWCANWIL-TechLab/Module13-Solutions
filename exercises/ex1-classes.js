/**
 * An example of a Superclass with methods that can be inherited by its subclass.
 * 
 * In the real world, there is no such thing as a Dog without a breed. In JavaScript
 * however, you are able to create a class for a Dog with no breed so that you 
 * do not have to rewrite methods for every single breed of Dog.
 * 
 */
class Dog {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    /**
     * A getter method to find the Dog object's name.
     * 
     * @returns {String}
     */
    get name() {
        return `My name is ${this._name}`;
    }

    /**
     * A setter method that allows you to change the Dog object's name.
     * 
     */
    set name(newName) {
        this._name = newName;
    }

    /**
     * A getter method for finding out how many years old a Dog is.
     * 
     * @returns {String}
     */
    get age() {
        return `I am ${this._age} years old`;
    }

    /**
     * A setter method that allows you to change the value of your age property.
     * 
     * Note: This is just an example of a setter. It doesn't make sense to be 
     *       able to change your dog's age at will.
     * 
     */
    // set age(age) {
    //     this._age = age;
    // }

    toString() {
        return `Hi my name is ${this._name}. I am ${this._age} years old`;
    }
}

/**
 * This is an example of a subclass that inherits methods from the superclass.
 * 
 * Pug is a subclass of Dog. Although we did not write getter or setter methods
 * for Pug, we have access to all of the getter and setter methods fromm its 
 * superclass Dog. Inside of Pug, we only need to create methods and properties 
 * that are specific to Pugs, rather than being applicable to all Dogs.
 */
class Pug extends Dog {
    constructor(name, age, ugly) {
        super(name, age);
        this._uglyScore = ugly;
        this._breed = "Pug";
    }

    /**
     * 
     */
    get breed() {
        return this._breed;
    }

    toString() {
        return `Hi my name is ${this._name} and I am ${this._age} years old. \
        I am a ${this._breed} who is ${this._uglyScore} out of 10 ugly`;
    }

}

const pug1 = new Pug("Rex", 1, 50);
console.log(pug1.age);

/**
 * TODO Create a class called Shape with the following properties:
 *      1. name: The name of the shape you created
 *      2. color: The color of the shape you created.
 * 
 * TODO Create the following methods:
 *      1. draw: Log a message to the console saying what the name and color of
 *               the shape is.
 * 
 * ! All classes/subclasses must have a constructor
 */
class Shape {
    // TODO Finish the class

    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    draw() {
        console.log(`I am a ${this.name} and I am a ${this.color}`);
    }
}

/**
 * TODO Create a Class Circle that is a subclass of Shape with the following
 * TODO properties:
 *      1. radius: The radius of the circle
 * 
 * TODO Create the following methods
 *      1. calculateCircumfrence: Return the circumfrence of the circle (2 PI r)
 *      2. calculateArea: Using the radius, returns the area of the circle. Note:
 *                          area of a circle = Pi * radius^2
 * 
 * ! Circle should have access to all of the methods of Shape
 * 
 * ! All classes/subclasses must have a constructor
 */
class Circle extends Shape {
    
    constructor(name, color, radius) {
        super(name, color);
        this.radius = radius;
    }

    calculateCircumfrence() {
        return 2 * Math.PI * this.radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }

}

/**
 * TODO Create a Rectangle class with the following properties:
 *      1. length: The length of the rectangle.
 *      2. width: The width of the rectangle.
 * 
 * TODO Create the following methods:
 *      1. calculateArea: returns the area of the rectangle. (l*w)
 *      2. calculatePerimeter: returns the perimeter of the rectangle. (2(l+w))
 * 
 * 
 * ! All classes/subclasses must have a constructor
 */
class Rectangle extends Shape {

    constructor(name, color, length, height) {
        super(name, color);
        this.length = length;
        this.height = height;
    }

    calculateArea() {
        return this.height * this.length;
    }

    calcualtePerimeter() {
        return 2 * (this.height + this.width);
    }

}











class Car {

    #vehicleIdentificationNumber;

    constructor(name, year, vin) {
        this._name = name;
        this._year = year;
        this.#vehicleIdentificationNumber = vin;
    }


    get carName() {
        return this.name;
    }

    get carYear() {
        return this.year;
    }

    get carVin() {
        return this.#vehicleIdentificationNumber;
    }

}

const car1 = new Car("Civic", 1999);
car1;   // No properties

const lambo = new Car("Lamborghini", 1998);
lambo.name; // "Lamborghini"
lambo.year; // 1998



const car2 = new Car("Accord", 2010);
car2._name = "Uh oh!";

const car3 = new Car("Tesla", 2023, "a8FJKJK20x");





let carName = prompt("What model is your car?");
let carYear = prompt("What year is your car?");
let carVin = prompt("What is your car's VIN?");
const userCar = new Car(carName, carYear, carVin);







class Lipgloss {

    constructor(flavor, name, size, type) {
        this.company = "Princess Glam Cosmetics";
        this.flavor = flavor;
        this.name = name;
        this.size = size;   //!  Always in ML
        this.type = type;
    }

    apply() {
        
        if(this.size > 0) {
            console.log("Putting on lipgloss!");
            this.size = this.size - 1;
            console.log(`There is ${this.size} ml left in the tube.`);
        }
        else {
            console.log("Uh oh! Out of lipgloss");
        }
    }

}

const lipgloss1 = new Lipgloss("Cherry", "Hot Topic", 10, "Glossy");
lipgloss1.flavor;   // Cherry
lipgloss1.company;
lipgloss1.apply();
lipgloss1.apply();
lipgloss1.apply();
lipgloss1.apply();
lipgloss1.apply();
lipgloss1.apply();
lipgloss1.apply();
lipgloss1.apply();
lipgloss1.apply();
lipgloss1.apply();
lipgloss1.apply();










