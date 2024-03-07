// a.a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    
// b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG-13");
    }
}



// c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
const movies = [
    new Movie("The Lion King", "Walt Disney Studios", "G"),
    new Movie("MISSION IMPOSSIBLE", "DISNEY", "PG"),
    new Movie("The Matrix", "Warner Bros.", "R"),
    new Movie("Toy Story", "Pixar Animation Studios", "G"),
    new Movie("JAILER", "SUN PICTURES", "PG"),
    new Movie("LEO", "7screens", "PG-13"),

];

// d. Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const casinoRoyale = [
    new Movie("Casino Royale", "Eon Productions", "PG-13"),
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies.map(movie => movie.title)); 
 
/////////////////////////////////////////////////////////////
// Circle - Class
//Convert the UML diagram to Typescript class. - use number for double


class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getDiameter() {
        return 2 * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
const myCircle = new Circle(5, "blue");
console.log("Radius:", myCircle.getRadius());
console.log("Color:", myCircle.getColor());
console.log("Diameter:", myCircle.getDiameter());
console.log("Circumference:", myCircle.getCircumference());
console.log("Area:", myCircle.getArea());

/////////////////////////////////////////////////////////////////////////////
/// 3 . Write a “person” class to hold all the details.

class Person {
    constructor(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }
}
const person = new Person("MOHAMED Haaris", 21, "Male", "Theni");
console.log("Name:", person.getName());
console.log("Age:", person.getAge());
console.log("Gender:", person.getGender());
console.log("Address:", person.getAddress());

///////////////////////////////////////////////////////////////////////////////
//4.write a class to calculate the Uber price.


class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distanceInMiles, timeInMinutes) {
        const fareWithoutBookingFee = this.baseFare + (timeInMinutes * this.costPerMinute) + (distanceInMiles * this.costPerMile);
        const totalFare = fareWithoutBookingFee + this.bookingFee;
        return totalFare;
    }
}
const calculator = new UberPriceCalculator(2.5, 0.35, 1.75, 1.5);
const distance = 10; 
const time = 20; 
const price = calculator.calculatePrice(distance, time);
console.log("Uber price:", price.toFixed(2));

