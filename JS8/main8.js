function full_Sentence() {
    var part_1 = "I";
    var part_2 = "am";
    var part_3 = "super";
    var part_4 = "tired";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence; //brings all of the parts together to for a sentence
}

function slice_Method() {
    var Sentence = "I asked for french vanilla coffee at Mcdonalds and they didn't put any french vanilla inside of it.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section; // searches for the characters in the string that are betweent he numbers of 27 and 33
}

function func() {
    var str = 'Chick fil a';
    var string = str.toUpperCase();
    document.write(string);
    str.search(chick); // searches for the value
}

function string_Method() {
    var X = 300
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var C = 12984.23465436;
    document.getElementById("Precision").innerHTML = C.toPrecision(12);
}

let num = 5.56789;
let n = num.toFixed(2);
document.getElementById("Fixed").innerHTML = n; //converts a number into a string, rounding to a specified number of decimals

let str2 = "Hello, World";
str2.valueOf();
