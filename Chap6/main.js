let demo = document.getElementById("demo");

let experience = Number(prompt("how many years of expereince you have?"));

// if(experience >=0 && experience <1){

// 	demo.innerHTML = "you have no expereince"
// }
// else if(experience >=1 && experience <2){

// 	demo.innerHTML = "you are junior"
// }

// else if(experience >=2 && experience <3){

// 	demo.innerHTML = "you are intermediate"
// }
// else if(experience >=3 && experience <4){

// 	demo.innerHTML = "you are advanced"
// }
// else{

// 	demo.innerHTML = "you are senior"
// }

// switch (experience) {

// 	case 0:
// 		demo.innerHTML= "you have no experience";
// 		break;
// 	case 1:
// 		demo.innerHTML= "you are junior";
// 		break;
// 	case 2:
// 		demo.innerHTML= "you are intermediate";
// 		break;
// 	case 3:	
// 		demo.innerHTML= "you are advanced";
// 		break;
// 	default:
// 		demo.innerHTML= "you are senior";
// 		break;

// 	}

switch (true) {

	case experience <0:
		demo.innerHTML= "you have no experience";
		break;
	case experience <=1:
		demo.innerHTML= "you are junior";
		break;
	case experience <=2:
		demo.innerHTML= "you are intermediate";
		break;
	case experience <=3:	
		demo.innerHTML= "you are advanced";
		break;
	default:
		demo.innerHTML= "you are senior";
		break;
		}
