const car = {
    brand: "Tesla",
    model: [3, 5, 8, 4],
    weight: "980kg",
    seating: "5 Adults",
    stop(){
        return "car is stoped.";
    }
}

/// dot notation
// console.log(car.stop()); 

// brackets notation
// console.log(car["brand"]);

// car.model = 4;
car.brand = "Tesla3"
console.log(car);