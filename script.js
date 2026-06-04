let message = "My name is Mubashir ";
let age = 18;
console.log(message + "And my age is " + age + ".");
// --> My name is Mubashir And my age is 18.

prompt("Enter passcode");
// --> Website ask to Enter passcode.Which is also used to get input from user and give input.
// --> For example;
let name = prompt("Enter your name");
let password = prompt("Enter password");
console.log(name + "\n" + password);
// --> Rendom name Tony Starck
// --> Rendom password P@$$w0rd!


// RETURN VALUE.
console.log(Math.max(8, 7));
// --> 8
console.log(Math.min(5, 9) + 95);
// --> 100


// CONTROL FLOW.
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the sequar root of " +
    theNumber * theNumber);
// If we add any rendom number then the output is given us thier two time greater value.
// For example if we pic the number 2 then the output will be 4. Lets try;


// CONDITIONAL EXECUTION.
let TheNumber = Number(prompt("Pick the number"));
if (!isNaN (TheNumber)) {
    console.log("Your number is the sequar root of " +
        TheNumber * TheNumber
    );
}
// If you add any number it give output otherwise nothing.


if(2  + 2 == 4) console.log("It's true");
    else console.log("It's false");
// --> It is a simplest condition. You to understa it.

let Thenumber = Number(prompt("Pick the number"));
if (! isNaN (Thenumber)) {
    console.log("Your number is the sequare root of " +
        Thenumber * Thenumber
    );
}else{
    console.log("Please give a valide number  Don't string.");
}
// --> If we provide a number it give if output. And if provide string it give else output.


// If sometime we have more then two conditions then we use if/else pair "Chain". For Example.
let num = Number(prompt("Pick the number"));
if (num < 10) {
    console.log("Small");
}else if (num < 100){
    console.log("Medium");
}else{
    console.log("Large");
}
// If we  pick the number less then 10 the output is small. If num less then 100 the output
// is Medium and if the number is greater thn 100 it will be give the output is Large.


// WHILE LOOP.
// Sometime you want the output in even numbers in the range of 0-12. you'll surely get it that way;
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
// --> 0
// --> 2
// --> 4
// ...etcetera
// But if sometime you need to get output in the range of 0 to 1000. you write 500 program. But the
// Simple meathod to get value in such range we often use while loop. For Example.
let number = 0;
while(number <= 12) {
    console.log(number);
    number = number + 2;
}
// --> 0
// --> 2
// --> 4
// ...etcetera
// Similarly if you have range between 0 to 100 then;
let numb = 0;
while( numb <= 100) {
    console.log(numb);
    numb = numb + 2;
}
// --> 0
// --> 2
// --> 4
// --> 6
// --> 8
// --> 10
// --> ...
// --> ...
// --> 100
// If you need even value so;
let evenNumber = 0;
while( evenNumber <= 50) {
    console.log(evenNumber);
   evenNumber = evenNumber + 2;
}
// --> 0
// --> 2
// --> 4
// --> 6
// --> ...
// --> ...
// --> 50

// Try to understand it ownself
let power = 1;
let cons = 0;
while(cons < 10) {
    power = power * 2;
    cons = cons + 1;
}
console.log(power);
// --> 1024


// DO-WHILE LOOP OR SIMPLE "DO LOOP"
let yourname;
do{
    yourname = prompt("Enter Your Name")
}while (!yourname);
console.log(yourname);
// --> This loop force you to enter your name.This ask you again and again until
//  you enter your name then the programe execute compleately otherwise it require string.


// INDENTING CODE.
/*
It is mot any program or function but one of the most importent part of coding
It make the code clear and simple to reed for another person who reed your code.
The loop function should be write in one line but it's look dificult to reader. 
The simple meathod to write code is indenting.The text editor like vs Code automatically 
indent your code by pressing tab after writing requided code. The example is given below.

if (false != true) {
    console.log("Thats Make sense. ");
    if (1 < 2) {
        console.log("No surprise there. ");
    }
}
*/
// FOR LOOP.
// For loop is almost equal to while loop but it is long but comprehensive method to do loop.
// For example.
for (i = 1; i <= 10; i++) {
    console.log(i);
}
// --> 1
// --> 2
// --> 3
// --> ..
// --> 10
// Similarly if you want to get numbers even number then;
for (i = 0; i <= 10; i = i + 2) {
    console.log(i);
}
// --> 0
// --> 2
// --> 4
// --> 6
// --> 8
// --> 10
// And you want to get the two rays power ten then;
let pow = 1
for (let count = 0; count < 10; count++) {
    pow = pow * 2;
}
console.log(pow);
// --> 1024

// BREAKING OUT THE LOOP
// The looping condition producing fals is not the only condition to stop the
// loop.There is a special statment called "break"  can immidatily stop the loop.
// 

// DISPATCHING ON A VALUE WITH SWITCH.
switch (prompt("What is the weather like?")) {
    case "Rainy":
        console.log("Remember to take Umbrella.");
        break;
    case "Sunny":
        console.log("Dress Lightly.");
        break;
    case "Cloudy":
        console.log("Go Outside.");
        break;
    case "Windy":
        console.log("Enjoye the weather.");
        break;
    default:
        console.log("Unknown Weather type!");
        break;
}

// So we compleate the chapter the chapter 2 and then we;ll compleate the exercise
// Quwstion 1: Make the astrsk triangle by using lop;

let triangle = "#";
 while( triangle.length < 8) {
    console.log(triangle);
    triangle = triangle + "#";
 }

 // Question 2: Runthe lop whic shon the Fizz on number which divide on 3
 //and shoun Buzz on the number which divide on 5 and show FizzBuzz on the place 
 // of number which divide on both 3 and 5

 for(let n = 1; n <= 100; n++) {
    if (n % 3 === 0 && n % 5 ===0) {
      console.log("FizzBuzz");
    }else if(n % 3 === 0) {
      console.log("Fizz");
    }else if(n % 5 ===0) {
      console.log("Buzz");
    }else{
      console.log(n);
    }
  }
// Make the Chessboard bu using Double loop;
let chess = "";

for (w = 0; w <= 8; w++){
  for (b = 0; b <= 8; b++){
    if ((w + b) % 2 === 0){
      chess += "  ";
    }else{
      chess += "#";
    }
  }
  chess += "\n";
}
console.log(chess);  



//   //   //   //   //   //   //    THE END    //   //   //   //   //   //   //