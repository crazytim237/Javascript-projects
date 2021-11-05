function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age:5
    };
    document.getElementById("Animal").innerHTML = Animal.Breed;
}

function displayResult() {
    document.getElementById("Animal").innerHTML = "correct";
}