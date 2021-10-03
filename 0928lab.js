console.log("–---Q3----");
//differnt operation, value1 and value 2 > retren different values
//use switch

function basicOp(operation, value1, value2) {
  // Code
  switch (operation) {
    case "+":
      return value1 + value2;

    case "-":
      return value1 - value2;

    case "*":
      return value1 * value2;

    case "/":
      return value1 / value2;

    default:
      return "invaild operation character.";
  }
}

console.log(basicOp("%", 5, 7));

//reverseSeq if array

console.log("----Q4----");
const reverseSeq = (n) => {
  var arr = [];
  for (i = n; i > 0; i--) arr.push(i);
  return arr;
};

console.log(reverseSeq(5));

console.log("----Q5----");

// we can not use  3 <= d && d < 7 , just can use 3<=d && d<7

function rentalCarCost(d) {
  let totalPrice = 40 * d;
  if (d < 3) {
    totalPrice = 40 * d;
  } else if (3 <= d && d < 7) {
    totalPrice = 40 * d - 20;
  } else if (7 <= d) {
    totalPrice = 40 * d - 50;
  }
  return totalPrice;
}

console.log(rentalCarCost(20));

console.log("----No.7----");
//learn one fuction:charAt means we could pick up one letter of words
function feast(beast, dish) {
  var beastOfFristLetter = beast.charAt(0);
  var beastOfLastLetter = beast.charAt(beast.length - 1);
  var dishOfFristLetter = dish.charAt(0);
  var dishOfLastLetter = dish.charAt(dish.length - 1);

  if (
    beastOfFristLetter === dishOfFristLetter &&
    beastOfLastLetter === dishOfLastLetter
  ) {
    return true;
  } else if (
    beastOfFristLetter !== dishOfFristLetter ||
    beastOfLastLetter !== dishOfLastLetter
  ) {
    return false;
  }
}

console.log(feast("cusy cag", "brispy egs"));

/*Question above is if beastOfFristLetter === dishOfFristLetter &&beastOfLastLetter === dishOfLastLetter
animal can be allowed to enter feast, and vice versa.*/
