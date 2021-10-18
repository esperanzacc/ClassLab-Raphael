//join all elements of the following array into a string.
console.log("Q1");
var array = ["Red", "Green", "White", "Black"];
for (let i = 1; i < 3; i++) {
  console.log(array.join());
}
console.log(array.join("+"));

//sort the items of an array.
console.log("Q2");
// var array1 = [2, 2, 5, 4, 6, 7];
// for (let i = 0; i < array1.length - 1; i++) {
//   if (array1[i] % 2 === 0 && array1[i + 1] % 2 === 0) {
//     console.log(array1.join("-"));
//   } else {
//     console.log(array1.join(""));
//   }
// }

function twoEvenDash(number) {
  let numToStr = number.toString();
  let result = [numToStr[0]];
  for (let i = 1; i <= numToStr.length - 1; i++) {
    if (numToStr[i - 1] % 2 === 0 && numToStr[i] % 2 === 0) {
      result.push("-", numToStr[i]);
    } else {
      result.push(numToStr[i]);
    }
  }
  console.log(result.join(""));
}
twoEvenDash(33445788);

console.log("Q3");
// var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// otput -4,-3,1,2,3,5,6,7,8

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort(function (a, b) {
  return a - b; //進行比較大小值
});
console.log(arr1);
