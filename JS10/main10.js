function Call_Loop() {    
    var Digit = "";
    var X = 1;
    while(X < 11) {
        Digit += "<br>" + X;
        X++       
    }
    document.getElementById("Loop").innerHTML = Digit;
}

let text = "Hello World!";
text.length;

var Instruments = ["Drums", "Violin", "Piano", "Guitar", "Saxophone"];
var Content = "";
var Y;
function for_Loop() {
    for(Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>"
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "Sleeping";
    Dog_Picture[1] = "Playing";
    Dog_Picture[2] = "Running";
    Dog_Picture[3] = "Zoomies";
    document.getElementById("Array").innerHTML = "In this Picture, the dog is " + Dog_Picture[1] + ".";

}

function constant_function() {
    const Car = {type:"Sedan", brand:"Tesla", Color:"White"};
    Car.Color = "Blue";
    Car.price = "$35000";
    document.getElementById("Constant").innerHTML = "The cost of the " + Car.type + " was " + Car.price;
}

let X = 33;
document.write(X);

let car = {
    make: "Tesla ",
    model: "Roadster ",
    year: "2021 ",
    color: "White ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();