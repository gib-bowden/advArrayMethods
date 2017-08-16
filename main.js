var fruits = ["apple", "banana", "cherry"];

// 1A: Write a function called outputFruitOld that consoles every fruit in a fruit array.

function outputFruitOld(arr){
	for (var i = 0; i < arr.length; i++) {
		console.log("output for 1a:",arr[i]);
	}
}

outputFruitOld(fruits);
// 1B: Rewrite using forEach array method

fruits.forEach(listFruits);

function listFruits(fruit, index, array) {
	console.log(fruit)
	console.log("index", index)
	console.log("array", array)
}

fruits.forEach((fruit) => {
	console.log("1C",fruit);
})




// using callback function
// using anonymous function

// 2A: Write a function called backwardFruitsOld that reverses the letters in each word in the fruits array.

function backwardFruitsOld(arr){
	var newArray = []
	for (var i = 0; i < arr.length; i++) {
		newArray.push(arr[i].split("").reverse().join(""));
	} 	
 	return newArray
}

console.log(backwardFruitsOld(fruits))

backwardFruitsOld(fruits);


// 2B: Rewrite using map array method

var secondNewArray = fruits.map((fruit) => {
	return fruit.split("").reverse().join("")
})

console.log("2B: ",secondNewArray);




// 3A: Write a function called fiveLettersOnlyOld that only returns fruits that have 5 letters.

function fiveLettersOnlyOld(arr) {
	var newArray = []
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length === 5) {
			newArray.push(arr[i]);
		}
	}
	return newArray
}

console.log("3a:",fiveLettersOnlyOld(fruits))



// 3B: Rewrite using filter array method


var filterFunction = fruits.filter((fruit) => {
	return fruit.length === 5;
})


console.log("3b: ", filterFunction)





var numbers = [0, 1, 2, 3, 4];

// 4A: Write a function called addzOld that returns the sum of an array.

function addzOld(arr) {
	var sum = 0
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

console.log("4a:",addzOld(numbers));


// 4B: Rewrite using reduce array method

var total = numbers.reduce((a, b, index, array) => {
	return a + b;
}, 0);

console.log("4b:", total);