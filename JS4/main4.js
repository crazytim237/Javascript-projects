function my_Dictionary() { // making a variable and giving that variable properties
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age:5
    };
    delete Animal.Breed
    document.getElementById("Animal").innerHTML = Animal.Breed;  //tells the button in html that it wants the breed of the animal
}

function displayResult() {
    document.getElementById("Animal").innerHTML = "correct"; //helps make the button work
}