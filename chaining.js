// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// 1.  Sort the numbers in descending order (10, 9, 8, 7, etc).
// 2.  Remove any integers greater than 19.
// 3.  Multiply each remaining number by 1.5 and then subtract 1.
// 4.  Then output (either in the DOM or the console) the sum of all the resulting numbers.

var arr = [888, 8008, 7734, -79, 0, 2]


document.getElementById("container").innerHTML = arr.sort((a,b) => {return b-a})
.filter((num) => {return num <= 19})
.map((num) => {return (num * 1.5) - 1})
.reduce((a, b) => {return a + b});



