console.log("----Q1----");
var rt = [1, 2, 4, 5, 6];
function ohms(value) {
  for (let i = 0; i < rt.length - 1; i++) {
    let result = 0;
    result = result += rt[i];
    return result;
  }
}
console.log(ohms(rt));

console.log("----Q2----");

function arrayOfNumber(number) {
  var array = [];
  var spiltOfNumber = number / 2;
  var remainderOfNumber = number % 2;
  if (remainderOfNumber === 0) {
    console.log(array.push(spiltOfNumber, spiltOfNumber));
  } else {
    let integerOfNumber = Math.round(spiltOfNumber); //if number = 5, this answer will be 3
    let anotherOfNumber = number - integerOfNumber; //this answer will be 2
    if (anotherOfNumber > integerOfNumber) {
      console.log(array.push(integerOfNumber, anotherOfNumber));
    } else if (integerOfNumber > anotherOfNumber) {
      console.log(array.push(anotherOfNumber, integerOfNumber));
    }
  }
  return array;
}

console.log(arrayOfNumber(47));

console.log("----Q3----");
var array1 = [1, "a", 3, 4, 5, "a", "b"];
function numberOfArray(array1) {
  var result = array1.filter(Number.isInteger); //determines whether the passed value is an integer.
  result = array1.filter((nonumber) => nonumber > 0);
  return result;
}

console.log(numberOfArray(array1));

console.log("----Q4----");
const getAbsSum = [2, 5.5, 4, 8, 10];
const reducer = (accumulator, currentValue) =>
  Math.abs(accumulator) + Math.abs(currentValue);
console.log(Math.abs(getAbsSum.reduce(reducer)));

// const arr1 = [1,2,3,4];
// const reducer = (accumulator,currentValue) => {
//     return accumulator + currentValue;  >>>>>var variable = function
// }

// const reducer1 = function(accumulator,currentValue) {
//     return accumulator + currentValue;
// }

// console.log(arr1.reduce(reducer));
