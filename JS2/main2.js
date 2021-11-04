var [a , b] = ["one", "two"]; // assigning two variables
document.getElementById("demo");
document.write(a); //displays the variable asked for

function myFunction() {
    var sentence = "I am learning"; //assigning a variable
    sentence += " a lot from this book"; //adds the value of the right operand to a variable and assigns the result to the variable
    document.getElementById("Concatenate").innerHTML = sentence; //puts the two variables together
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("math").innerHTML = "5 - 2 = " + Subtraction
}