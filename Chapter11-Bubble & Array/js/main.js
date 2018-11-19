// let aDombObj = document.getElementById('test');
// aDombObj.addEventListener('dblclick', addSomeText);

// function addSomeText() {

// 	setTimeout(function(){
// 		aDombObj.innerHTML = "hello Javascript"; }, 4000);

// }

// let aDombObj = document.getElementById('test');
// aDombObj.addEventListener('dblclick', addSomeText);

// function addSomeText() {

// 	setInterval(function(){
// 		console.log("set Interval function")}, 4000);

// }

let aDombObj = document.getElementById('test');
aDombObj.addEventListener('dblclick', startCounting);

let t = 0;
let myVariable = setInterval(function(){

	startCounting();
}, 1000);

function startCounting() {

			document.getElementById("test").innerHTML = t+=1;
		if(t===10){
			clearInterval();
		}

	}





