function sum(a,b){
	return a + b;
}
function minus(a,b){
	return a - b;
}
function multiply(a,b){
	return a * b;
}
function divide(a,b){
	return a / b;
}

const options = {
	sum: "+",
	minus: "-",
	multiply: "*",
	divide: "/",
}

function calculate({a,b,option}){
	let result = null;
	switch(option){
		case options.sum:
			result = sum(a, b);
			break;
		case options.minus:
			result = minus(a, b);
			break;
		case options.multiply:
			result = multiply(a, b);
			break;
		case options.divide:
			result = divide(a,b);
			break;
		default:
			break;
	}
	return result;
}

const inputA = document.querySelector(".input-a");
const inputB = document.querySelector(".input-b");
const button = document.querySelector(".button");
const operations = document.querySelector(".operations");
const conclusion = document.querySelector(".conclusion");

button.addEventListener("click", function(){
	const a = Number(inputA.value);
	const b = Number(inputB.value);
	const option = operations.value;

	const resolt = calculate({a,b,option})

	conclusion.innerText = resolt
})