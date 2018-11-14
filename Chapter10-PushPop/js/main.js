let evenNumbers = [];
let counter = 0;
let value = 1;
for (counter = 0; counter<20; counter+=1){

	evenNumbers[counter] = value;
	value +=10
}
document.getElementById("here").innerHTML = evenNumbers