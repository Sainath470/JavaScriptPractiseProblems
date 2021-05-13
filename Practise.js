//-------------------------Sequence Practice Problems-----------------------
/**
 * 1. Using Random function to get single random number
 * and displaying the number.
 */
let singleDigit = Math.floor(Math.random() * 10);
console.log("Single Digit number is :" + singleDigit);

/**
 * 2. Using Random Function to get Dice number between 
 * 1 to 6
 */
let numberOnDice = Math.floor(1 + (Math.random() * 10) % 6);
console.log("Number on Dice is :" + numberOnDice);


/**
 * 3. Adding two random Dice numbers
 */
let numberOnFirstDice = Math.floor(1 + (Math.random() * 10) % 6);
let numberOnSecondDice = Math.floor(1 + (Math.random() * 10) % 6);

totalOfTwoDices = numberOnFirstDice + numberOnSecondDice;

console.log("First Dice :"+ numberOnFirstDice + "\nSecond Dice :"+ numberOnSecondDice +"\nTotal of two Dices is :" + totalOfTwoDices);

/**
 * 4. Reads 5 Random 2 Digit Values
 * adding them and finding Average
 */
let totalofFiveNumber = 0;
let i = 1;

while( i <= 5){
    totalofFiveNumber += Math.floor(10 +(Math.random() * 10) % 90);
    i++;
}

 averageOfRandomNumbers = totalofFiveNumber / 5;

console.log("Sum of 5 random 2 digit numbers :"+ totalofFiveNumber);
console.log("Average of five numbers :"+ averageOfRandomNumbers);

/**
 * 5. Unit Conversion
 * a. 1ft = 12 in then 42 in = ? ft
 */
let oneFeet = 12;
let result = 42/oneFeet ;
console.log("42 inches :" + result + "ft");


// 5b. Rectangular Plot of 60 feet * 40 feet in meters
let meter = 40 * 60 * 0.3048;
console.log("Rectangular Plot in meters " + meter);

//c. Calculate area of 25 such plots in acres
let totalArea = 60 * 40 * 0.3048 * 25 * 0.00024711;
console.log("area of 25 rectangular Plots in acres " + totalArea);


//-----------------------Selection Practice Problems with if & else ----------------------------
/**
 * 1. Write a program that reads 5 Random 3 digit values and then Outputs the minimum
 * and the maximum value
 */
let maxNumber = Math.floor(100 +(Math.random() * 10) % 900);
let minNumber = maxNumber;

i = 0;
while( i <= 5){
     randomNumber = Math.floor(100 +(Math.random() * 10) % 900);
    if( maxNumber < randomNumber){
         maxNumber = randomNumber;
    }
    if( minNumber > randomNumber){
         minNumber = randomNumber;
    }
    i++;
}

console.log("Maximum number "+ maxNumber);
console.log("Minimum number "+ minNumber);

/**
 * 2. Write a program that takes day and month from the command line and 
 * prints true if day of month is between March 20 and June 20, false otherwise.
 */

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let temp = 0;

console.log("day: "+ day);
console.log("Month: "+ month);

if((month >= 3 && month <= 6)){
    if( month >= 3){
        if(day >= 20){
            temp += 1;
        }
    }
    if( month <= 6 ){
        if(day >= 20){
            temp += 1;
        }
    }  
}

if( temp > 0){
    console.log(true)
}
else{
    console.log(false);
}

/*
3. Write a program that takes a year as input and outputs the Year is a Leap Year or not
a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
*/

let year = new Date().getFullYear();

if(year % 4 == 0){
    if(year % 100 != 0){
        console.log(year + " is a leap year"); 
    }
    else{
        if(year % 400 == 0){
            console.log(year + " is leap year");
        }
    }
}
else{
    console.log(year + " is not a leap year");
}
    

/**
 * 4. Write a program to simulate a coin flip and print out
 * "Head" or "Tails" accordingly.
 */
let coinFlip = Math.floor(1+(Math.random() * 10) % 2);
let HEADS = 1;
let TAILS = 2;

if(coinFlip == HEADS){
    console.log("Heads");
}
if(coinFlip == TAILS){
    console.log("Tails");
}


//---------------------------------Selection Problems with if-else-if -----------------------

/**
 * 1. Read a single digit number and write the number in word
 */
let number = Math.floor(Math.random() * 10);

if (number == 0) {
    console.log("zero");
  } else if (number == 1) {
    console.log("one");
  } else if (number == 2) {
    console.log("two");
  } else if (number == 3) {
    console.log("three");
  } else if (number == 4) {
    console.log("four");
  } else if (number == 5) {
    console.log("five");
  } else if (number == 6) {
    console.log("six");
  } else if (number == 7) {
    console.log("seven");
  } else if (number == 8) {
    console.log("eight");
  } else if (number == 9) {
    console.log("nine");
  } else {
    console.log("Not a number");
  }

 
/*
2. Read a Number and Display the week day (Sunday, Monday,…)
*/
let number1 = Math.floor(1 + Math.random() * 10);
console.log("number entered: " + number1);

if (number == 1) {
  console.log("SUNDAY");
} else if (number == 2) {
  console.log("MONDAY");
} else if (number == 3) {
  console.log("TUESDAY");
} else if (number == 4) {
  console.log("WEDNESDAY");
} else if (number == 5) {
  console.log("THURSDAY");
} else if (number == 6) {
  console.log("FRIDAY");
} else if (number == 7) {
  console.log("SATURDAY");
}
else{
    console.log("Invalid");
}

/*
3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
*/

let num = 10;
if (num== 1) {
  console.log("unit");
} else if (num == 10) {
  console.log("ten");
} else if (num == 100) {
  console.log("hundred");
} else if (num == 1000) {
  console.log("thousand");
} else {
  console.log("Invalid");
}

/*
4. Enter 3 Numbers do following arithmetic operation and find the one that
is maximum and minimum
1. a + b * c 3. c + a / b
2. a % b + c 4. a * b + c
 */

let a = 1, b = 2, c = 3;

let firstOperation = (a + b * c);
let secondOperation = (a % b + c);
let thirdOperation = (c + a / b);
let fourthOperation = (a * b + c);

console.log(" a + b * c -->" +firstOperation);
console.log(" a % b + c -->" +secondOperation);
console.log(" c + a / b -->" +thirdOperation);
console.log(" a * b + c -->" +fourthOperation);

console.log("Maximum number :" + Math.max(firstOperation,secondOperation,thirdOperation,fourthOperation));
console.log("Minimum number :" + Math.min(firstOperation,secondOperation,thirdOperation,fourthOperation));





//---------------------------------Selection Practice Problems with case statements----------------------------

/**
 * 1. Read a single digit number and write the number in word using Case
 */

 let randomNumber2 = Math.floor(Math.random() * 10);
 console.log("Number is :" + randomNumber2 + "\nNumber in words ");

 switch (randomNumber2) {
   case 0:
     console.log("zero");
   case 1:
     console.log("one");
     break;
   case 2:
     console.log("two");
     break;
   case 3:
     console.log("three");
     break;
   case 4:
     console.log("four");
     break;
   case 5:
     console.log("five");
     break;
   case 6:
     console.log("six");
     break;
   case 7:
     console.log("seven");
     break;
   case 8:
     console.log("eight");
     break;
   case 9:
     console.log("nine");
     break;
   default:
     console.log("Invalid");
 }

 /**
  * Read a Number and Display the week day (Sunday, Monday,…)
  */
  let randomNumber3 = Math.floor(1 + ((Math.random() * 10) % 7));
  console.log("number is: " + randomNumber3);
  switch (randomNumber3) {
    case 1:
      console.log("SUNDAY");
      break;
    case 2:
      console.log("TUESDAY");
      break;
    case 3:
      console.log("WEDNESDAY");
      break;
    case 4:
      console.log("THURSDAY");
      break;
    case 5:
      console.log("FRIDAY");
      break;
    case 6:
      console.log("SATURDAY");
      break;
    case 7:
      console.log("MONDAY");
      break;
    default:
      console.log("Invalid");
  }

/*
3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
*/
let randomNumber4 = 10; //100,100,1000
switch (randomNumber4) {
  case 1:
    console.log("unit");
    break;
  case 10:
    console.log("ten");
    break;
  case 100:
    console.log("hundred");
    break;
  case 1000:
    console.log("thousand");
    break;
  default:
    console.log("Invalid");
}

