//Q1
console.log("Q1");
//create a function that take two numbers
function sum(number1, number2) {
  var calSum = number1 + number2;
  return calSum;
}
//for example
alert(sum(3, 2));
alert(sum(-3, -6));
alert(sum(7, 3));

//Q2
console.log("Q2");

//create a function that increments the number by +1;
function cal(number) {
  var calNumber = ++number;
  return calNumber;
}
//for example
console.log(cal(0));
console.log(cal(9));
console.log(cal(-3));

//Q3
console.log("Q3");

//create a function that minutes and coverts it to seconds;
function minToSec(minute) {
  var sec = minute * 60;
  return sec;
}

//for example
console.log(minToSec(5));
console.log(minToSec(3));
console.log(minToSec(2));

//Q4
console.log("Q4");

//create a function that takes two numbers as arguments(num,length)and returns an array
function arrayOfMultiples(num, length) {
  // Create the function
  let arr = []; //array
  for (i = 1; i <= length; i++) {
    //loop迴圈
    var result = num * i;
    arr.push(result); //.push表示增加value進去array
  }
  return arr;
}
//for example // Call the Function
console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));

//Q5
console.log("Q5");
//from object to array

function toArray(obj) {
  //create the function
  var entries = Object.entries(obj); //object.entries表示一個函數
  return entries;
}
console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 })); // call the function
