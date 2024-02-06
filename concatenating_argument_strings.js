// Challenge: Return a string of all the arguments separated by a space


var concatArguments = function () {
  // Implement the function
  
  // Make array for elements to be passed to in loop 
  let arrayString = []

  // Loop through elements of arguments object and add them to array
  
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    arrayString.push(arguments[i])
  }
  
  // Use the join method to convert array to string, remove commas, and add space
  
  let convertArray = arrayString.join(' ')
  
  
  return convertArray
  
}

console.log(concatArguments('a', 'b', 'c') === 'a b c');
// -> true

console.log(concatArguments('a', 'b', 'c', 'd', 'e') === 'a b c d e');
// -> true
