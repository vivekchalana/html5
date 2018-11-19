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

// let aDombObj = document.getElementById('test');
// aDombObj.addEventListener('dblclick', startCounting);

// let t = 0;
// let myVariable = setInterval(function(){

// 	startCounting();
// }, 1000);

// function startCounting() {

// 			document.getElementById("test").innerHTML = t+=1;
// 		if(t===10){
// 			clearInterval();
// 		}

// 	}

class person{

	constructor(name,canDance){
		this.name = name;
		this.canDance = canDance;
		this.speak = function(){

			console.log(`hello my name is ${this.name} and people say i can dance thats ${this.canDance}`);
		}

	}
}

let vivekObj = new person("Vivek", true);
let danielObj = new person("Daniel", false);
let davidObj = new person("David", true);

	vivekObj.speak();
	danielObj.speak();
	davidObj.speak();





