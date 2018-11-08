let demo = document.getElementById("demo");

let experience = Number(prompt("how many years of expereince you have?"));

if(experience === 0){

	demo.innerHTML = "you have no expereince"
}
if(experience === 1){

	demo.innerHTML = "you are junior"
}

if(experience === 2){

	demo.innerHTML = "you are intermediate"
}
if(experience === 3){

	demo.innerHTML = "you are advanced"
}
if(experience === 4){

	demo.innerHTML = "you are senior"
}