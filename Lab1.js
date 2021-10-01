//Q1

console.log("Q1");
//capitalizes all the letters
var letters = "esperanza";
var capitalLetters = letters.toLocaleUpperCase();
console.log(capitalLetters);

//another way to capitalize
function capNames(name) {
  //create a fucntion
  var capName = name.toUpperCase();
  return capName;
}

capNames("esperanza");

//Q2

console.log("Q2");
//takes a random integer between 1 to 10
let i = 15; //whatever number is
if (i < 11 && i > 0) {
  console.log("Good Work");
} else {
  console.log("Not matched");
}

//Q3
console.log("Q3");

var array = [8, 9, 7, 1, 3, 4];

//Q4
console.log("Q4");
console.log(array.sort()); //sorts a given array

//Q5
console.log("Q5");
console.log(array.reverse()); //reverse a given array

//Q6
console.log("Q6");
//object
var arrCustomers = [
  {
    name: "Esperanza",
    email: "v.esperanzac113@gmail.com",
    order: "Apple Juice",
    price: 50,
  },

  {
    name: "Teddy",
    email: "teddybear@gmail.com",
    order: "Orange Juice",
    price: 20,
  },
  {
    name: "Shinny",
    email: "shinnylin@gmail.com",
    order: "Pineapple Juice",
    price: 40,
  },
];
//forexample
console.log(arrCustomers[1]);

//find min,max in javascript
// Math.min(1, 2) //result:1
// Math.max(23, 32, 24, 56)//result:56
// //if you want to filter min or max in array, you need to write
// Math.max(...[23, 32, 24, 56])//result will be 56
// //you could not write statement as no array in Math.max
// //if you write as below, you would get NaN
// Math.max([23, 32, 24, 56])//result:NaN

//Q7
console.log("Q7");
var filterEmpty = arrCustomers.filter(function (item, index, array) {});
console.log(filterEmpty); // no condition, thus will be empty

var filterPrice = arrCustomers.filter(function (item, index, array) {
  return item.price; // filter
});
console.log(filterPrice);

alert(
  Math.max.apply(
    null,
    arrCustomers.map(function (o) {
      return o.price;
    })
  )
);
