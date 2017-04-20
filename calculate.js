/***************************
Functions
***************************/
function multiply(numerator, denominator){
	return numerator * denominator;
}
// console.log(multiply(4, 5));

function add(numerator, denominator){
	return Number(numerator) + Number(denominator);
}
// console.log(add(4, 5));

function subtract(numerator, denominator){
	return numerator - denominator;
}
// console.log(subtract(4, 5));

function divide(numerator, denominator){
	return numerator / denominator;
}
// console.log(divide(4, 5));

function calculate(numerator, denominator, whichFunction){
	console.log(whichFunction);
	return whichFunction(numerator, denominator);
}


/***************************
Event Listeners
***************************/
var result = document.getElementById("result");


document.getElementById("add").addEventListener("click", function(){
	console.log("add firing");
	console.log("numerator", numerator);
	var numerator = document.getElementById("numerator").value;
	var denominator = document.getElementById("denominator").value;
	if (numerator !== NaN && denominator !== NaN && numerator !== "" && denominator !== "") {
		result.innerHTML = calculate(numerator, denominator, add);
	}
});

document.getElementById("subtract").addEventListener("click", function(){
	console.log("subtract firing");
	var numerator = document.getElementById("numerator").value;
	var denominator = document.getElementById("denominator").value;
	if (numerator !== NaN && denominator !== NaN && numerator !== "" && denominator !== "") {
		result.innerHTML = calculate(numerator, denominator, subtract);
	}
});

document.getElementById("divide").addEventListener("click", function(){
	console.log("divide firing");
	var numerator = document.getElementById("numerator").value;
	var denominator = document.getElementById("denominator").value;
	if (numerator !== NaN && denominator !== NaN && numerator !== "" && denominator !== "") {
		result.innerHTML = calculate(numerator, denominator, divide);
	}
});

document.getElementById("multiply").addEventListener("click", function(){
	console.log("multiply firing");
	var numerator = document.getElementById("numerator").value;
	var denominator = document.getElementById("denominator").value;
	if (numerator !== NaN && denominator !== NaN && numerator !== "" && denominator !== "") {
		result.innerHTML = calculate(numerator, denominator, multiply);
	}
});


/***************************
I'm trying to build an eventListener constructor that will add a unique attribute to each eventListener.
This is for my own benefit to learn how to shortcut build eventListeners. Keep working at it.
***************************/

// var something = document.getElementsByClassName("operator");
// for (var i = 0; i < something.length; i++){
// 	// console.log(something.item(i).id);
// 	var operators = something.item(i).id;
// 	console.log(operators);
// 	something.item(i).addEventListener("click", function(){
// 		var numerator = document.getElementById("numerator").value;
// 		var denominator = document.getElementById("denominator").value;
// 		if (numerator !== NaN && denominator !== NaN && numerator !== "" && denominator !== "") {
// 			result.innerHTML = calculate(numerator, denominator, operators);
// 		}
// 	})
// };

// Use the target as a constructor element






