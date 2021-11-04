function addition_Function() {
    var addition = 9 + 4;  //adds together two numbers
    document.getElementById("addition").innerHTML = addition;  
} 


function subtraction_Function() {
    var Subtraction = 5 - 2; //subtracts two numbers
    document.getElementById("math").innerHTML = "5 - 2 = " + Subtraction;
}


function multiplication() {
    var simple_Math = 6 * 8; //multiply's the two numbers
    document.getElementById("math").innerHTML = "48 * 6 = " + simple_Math;

}


function division() {
    var simple_Math = 48 / 6; // divides the two numbers
    document.getElementById("math").innerHTML = "48 / 6 = " + simple_Math;
}


function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5; //multiple operators give the answer asked for
    document.getElementById("math").innerHTML = "1 plus 2, multiplied by 10 divided in half and then subtracted by 5 equals " + simple_math
  
} 
 

 function modules_Operator() {
     var simple_Math = 25 % 6;
     document.getElementById("math").innerHTML = "when you divide 25 by 6 you have a reaminder of: " + simple_Math;
 }

 function negation_Operator() {
     var x = 10
     document.getElementById("math").innerHTML = -x
 }

 var X = 5;
 X++
 document.write(X);

 var x = 5.25;
 X--;
 document.write(x)

 window.alert(Math.random() * 150);

 Math.sqrt(64); //math object that shows the square root of number
   document.getElementById("demo").innerHTML = Math.sqrt(64);
   
   function displayResult() {
    document.getElementById("math").innerHTML = "correct";
}