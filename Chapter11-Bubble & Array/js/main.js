let aDombObj = document.getElementById('test');
aDombObj.addEventListener('dblclick', addSomeText);

function addSomeText() {

	setTimeout(function(){
		aDombObj.innerHTML = "hello Javascript"; }, 4000);

}

