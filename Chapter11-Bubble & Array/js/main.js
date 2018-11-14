// let numberArray = [1,2,5,69,4,65,33,66,88,98];

// let i
// for(i = 0; i < numberArray.length; i += 1){
// 	let k;
// 	for(k = 0; k < numberArray.length-i; k += 1){
// 	if(numberArray[k] > numberArray[k+1]){
// 		let temp;
// 		temp = numberArray[k];
// 		numberArray[k] = numberArray[k+1];
// 		numberArray[k+1] = temp;
// 	}

// 	}
// }
// console.log(numberArray);

// let numberArray = [1,2,5,69,4,65,33,66,88,98];

// function bubbleSort(theArray){

// let i
// for(i = 0; i < theArray.length; i += 1){
// 	let k;
// 	for(k = 0; k < numberArray.length-i; k += 1){
// 	if(theArray[k] > theArray[k+1]){
// 		let temp;
// 		temp = theArray[k];
// 		theArray[k] = theArray[k+1];
// 		theArray[k+1] = temp;
// 	}

// 	}
// }
// 	retrun (numberArray);
// console.log(bubbleSort([6,5,4,3,2,1]));
// console.log(bubbleSort(numberArray);

// function writeMyname(name,lastName){

// 	console.log( `${name} ${lastName}`);
// }

// writeMyname("david", "reina");
// writeMyname("vivek", "chalana");
// writeMyname("leo", "repik");

// function add(a,b){

// 	document.getElementById("demo").innerHTML = a+b ;
// }



// function sub(a,b){

// 	document.getElementById("demo1").innerHTML = a-b ;
// }



// function div(a,b){

// 	document.getElementById("demo2").innerHTML = a/b ;
// }



// function mul(a,b){

// 	document.getElementById("demo3").innerHTML = a*b ;
// }

// add(10,5);
// sub(10,5);
// div(10,5);
// mul(10,5);

// function changeColor(){

// 	let mylist = document.
// 	getElementsByClassName("cars");
// 	let i;
// 	for (i = 0; i<mylist.length; i += 1){
//        mylist[i].style.color = "green";

// 	}
// }

// changeColor();

// let add = (a,b) => {
// 	return a+b;
// }

// let sub = (a,b) => {
// 	return a-b;
// }

// let mul = (a,b) => {
// 	return a*b;
// }

// let div = (a,b) => {
// 	return a/b;
// }

 let add = function() {

	let arg = arguments.length;
	let i;
	let result = 0;
	for(i=0 ; i < arg; i+=1) {
		result+=arguments[i];
	}
	return result;

}

 let mul = function () {

	let arg = arguments.length;
	let i;
	let result = 1;
	for(i=0 ; i < arg; i+=1) {
		result+=arguments[i];
	}
	return result;

}

console.log(add(10,5));



