console.log("-----Q1-----");
//returns a string of those numbers formatted as a phone number.
function formatPhoneNumber(arr) {
  var newArr = [];
  for (var i = 0; i < 3; i++) {
    newArr.push(arr[i]);
  }
  var sum = "(" + newArr.join("") + ")";

  var newArr1 = [];
  for (var i = 3; i < 6; i++) {
    newArr1.push(arr[i]);
  }
  var sum2 = sum + newArr1.join("") + "-";

  var newArr2 = [];
  for (var i = 6; i < 10; i++) {
    newArr2.push(arr[i]);
  }
  var sum3 = sum2 + newArr2.join("");
  return sum3;
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]));
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));
console.log(formatPhoneNumber([0, 8, 9, 5, 0, 1, 2, 5, 2, 7]));

console.log("-----Q2-----");
//takes two arrays and insert the second array in the middle of the first array.
function tuckIn(arr1, arr2) {
  arr1.splice(1, 0, ...arr2);
  return arr1;
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15, 150], [45, 75, 35]));
console.log(
  tuckIn(
    [
      [1, 2],
      [5, 6],
    ],
    [[3, 4]]
  )
);

console.log("-----Q3-----");
//return an array which contains all the even numbers in the orginal array, which also have even indices
function getOnlyEvens(array) {
  var NewArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i % 2 == 0 && array[i] % 2 === 0) {
      NewArray.push(array[i]);
    }
  }
  return NewArray;
}

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, 4]));
console.log(getOnlyEvens([5, 66, 44, 33, 24]));

console.log("-----Q4-----");
function chatroomStatus(users) {
  var n = users.length;
  var result = 0;
  if (n === 0) {
    result = "no one online";
  } else if (n === 1) {
    result = users[0] + " online";
  } else if (n === 2) {
    result = users[0] + " and " + users[1] + " online";
  } else if (n > 2) {
    var remain = n - 2;
    result = users[0] + " ," + users[1] + " and " + remain + " more online";
  }
  return result;
}
console.log(chatroomStatus([]));
console.log(chatroomStatus(["paRIE_to"]));
console.log(chatroomStatus(["s234f", "mailbox2"]));
console.log(
  chatroomStatus([
    "pap_ier44",
    "townieBOY",
    "panda321",
    "motor_bike5",
    "sandwichmaker833",
    "violinist91",
  ])
);
