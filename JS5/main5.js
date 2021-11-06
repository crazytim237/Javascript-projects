var B = 3;

document.write(typeof B);

document.write("10" + 5);

document.write(10 < 2); //less then operator

document.write(8 + 9);

document.write(8 == 2); // this will show up as false due to it not being the same numbers

X = 9;
Y = 9;


document.write(X === Y);

T = 10
S = "10";
document.write(T === S); //this operator checks whether its two operands are equal returning a boolean result

A = "Magnus";
B = "Magnu";
document.write(A === B);

document.write(5 > 2 && 10 > 4);

document.write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}