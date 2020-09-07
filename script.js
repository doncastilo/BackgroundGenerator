const color1E = document.getElementById("color1");
const color2E = document.getElementById("color2");

const h3 = document.getElementsByTagName("h3")[0];
const body = document.getElementsByTagName("body")[0];

let color1 = color1E.value;
let color2 = color2E.value;
body.style.background = "linear-gradient(to right, " + color1 + ", " + color2 + ")";

console.log("outside initial colors: color1=" + color1 + " color2= " + color2);

console.log("initil body background style:" + body.style.background + ";");
h3.textContent = body.style.background + ";";

function changeColor() {
	let currentColor1 = color1E.value;
	let currentColor2 = color2E.value;
	console.log("outside: currentColor1=" + currentColor1 + " currentColor2= " + currentColor2);

	if (color1 !== currentColor1 || color2 !== currentColor2) {
		console.log("inside: color1=" + color1 + " color2= " + color2);
		console.log("inside: currentColor1=" + currentColor1 + " currentColor2= " + currentColor2);
		color1 = currentColor1;
		color2 = currentColor2;
		body.style.background = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
		h3.textContent = body.style.background + ";";

		console.log("current body background style:" + body.style.background + ";");
	}
}

color1E.addEventListener("input", changeColor);
color2E.addEventListener("input", changeColor);

