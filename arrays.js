var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var NewArray = [element, ...array];
  return NewArray;
}  

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  var NewArray = [...array, element];
}  

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
}

function removeElementFromBeginningOfArray(array) {
  var NewArray = array.slice(1);
  return NewArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
}

function removeElementFromEndOfArray(array) {
  return NewArray = array.slice(0, array.length - 1);
}