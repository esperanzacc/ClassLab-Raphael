console.log("-----Q1-----");
//Create a function that takes in an array of names and returns the name of the secret society.
function societyName(person1, person2, person3) {
  var arr = [person1.charAt(0), person2.charAt(0), person3.charAt(0)];
  var result = arr.sort();
  var letters = result.join("");
  console.log(letters);
  return letters;
}

societyName("Wdam", "Sarah", "Dalcolm");
societyName("Sherry", "Esperanza", "Teddy");

console.log("-----Q2-----");
//returns the number of true values there are in an array.
function count(arr1) {
  var totalTrue = arr1.filter((word) => word === "true");
  console.log(totalTrue.length);
  return totalTrue;
}
count(["true", "false", "false", "true", "false", "true"]);
count(["true", "true", "true", "true", "false", "true"]);
count([]);

console.log("-----Q3-----");
// converts an object into an array of keys and values.
function objetToArray(a) {
  console.log(Object.entries(a));
}
const fans = {
  likes: 2,
  dislikes: 3,
  followers: 10,
};
objetToArray(fans);

console.log("-----Q4-----");
// add a clone of an array to itself.
function clone(arr2) {
  var newArray = [];
  for (let i = 0; i < arr2.length; i++) {
    newArray.push(arr2[i]);
  }
  newArray.push(arr2);
  return newArray;
}

console.log(clone(["x", "y"]));
console.log(clone([1, 1]));
console.log(clone([1, 2, 3]));

console.log("-----Q5-----");
//takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array.
function removeDups(a) {
  var set = new Set(a);
  var arr3 = [...set];
  console.log(arr3);
}
removeDups(["The", "big", "cat", "cat", 5, 5, 6, 7, 7, 8]);
