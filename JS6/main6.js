function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) { //creates function for a vehicle and gives its properties
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year; //calls the function and gets the information of the persons name, car mode, color, and manufacture year
    document.getElementById("New_and_This").innerHTML = "Emily drives a " + Emily.Vehicle_Color + "-colored" + Erik.Vehicle_Model + " manufactured in " + Emily.Vehicle_Year;
}


function Nested_Function(firstName, lastName) {

    // nested function below
    function getFullName() {
        firstName = "Tim"; 
        lastName = "Arroyo";
      return firstName + " " + lastName ;
    }
  
    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );
}