var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomizeBtn = document.querySelector(".randomize");
var body = document.getElementById("gradient");

function updateDisplayedColorValues() {
	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	console.log(color1.value)

	updateDisplayedColorValues();
}

function getRnd256() {
	var rdn = Math.floor(Math.random() * 256);
	return rdn;
}

function getRndColor (){
	var rgb = {
		red: getRnd256(),
		green: getRnd256(),
		blue: getRnd256()
	}
	return rgb;
}

function setRandomGradient() {
	var rgb1 = getRndColor();
	var rgb2 = getRndColor();

	// Set background to randomized values
	body.style.background = 
	"linear-gradient(to right, " 
	+ "rgb(" + rgb1.red + ", " + rgb1.green + ", " + rgb1.blue + ")"
	+ ", " 
	+ "rgb(" + rgb2.red + ", " + rgb2.green + ", " + rgb2.blue + ")"
	+ ")";

	updateDisplayedColorValues();
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomizeBtn.addEventListener("click", setRandomGradient);

setGradient();