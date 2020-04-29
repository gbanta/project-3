// jshint esversion: 7

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

//part b
let bitBatBotOrNot = (n) => {
  let result = "";
  if (n % 3 == 0) {
    result += "Bit";
  }
  if (n % 5 == 0) {
    result += "Bat";
  }
  if (n % 7 == 0) {
    result += "Bot";
  }
  if (result == "") {
    return "Not";
  } else {
    return result;
  }
};

//part c
let findAllbitBatBotOrNots1 = (arr) => {
  return arr.map((num) => {
    return `${num}: ${bitBatBotOrNot(num)}`;
  });
};

//part d
let findAllbitBatBotOrNots2 = (arr) => {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(`${arr[i]}: ${bitBatBotOrNot(arr[i])}`);
  }
  return result;
};

//part e
let findAllbitBatBotOrNots3 = (arr) => {
  let result = [];
  for (let element of arr) {
    result.push(`${element}: ${bitBatBotOrNot(element)}`);
  }
  return result;
};

//part f
let findAllbitBatBotOrNots4 = (arr) => {
  let result = [];
  arr.forEach((element) => {
    result.push(`${element}: ${bitBatBotOrNot(element)}`);
  });
  return result;
};

//extra credit
let findAllbitBatBotOrNotsXC = (arr) => {
  let result = [];
  for (let index in arr) {
    result.push(`${arr[index]}: ${bitBatBotOrNot(arr[index])}`);
  }
  return result;
};

//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
