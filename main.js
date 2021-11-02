 

var A = "this is a string";
document.write(A);

window.alert(A);

document.write("\"be who you are and say what you feel," + "because those who dont mind don\'t matter abd tgise who matter don\'t mind.\"");

var B = "Concatenated" + " string"

var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine", Daughter = "penny", Son = "zorrow";
document.write(Dad);

var blues = "I have the blues.";
var blues = blues.fontcolor("blue");
document.write(blues);

document.write(3 + 3);

function My_First_Function() { //defining a function and naming it
 var str = "this text is green!";    //defining a variable and giving it a string value                                   
                                

    var result = str.fontcolor("green")   //using the fontcolor method on str variable  //putting the value of result into HTML element with "green_text" id
document.getElementById("green_text").innerHTML = result;
}


document.write(A + B);