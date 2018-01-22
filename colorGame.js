var numSquares = 6;
var pickedColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("rgb");
// colorDisplay.textContent = pickedColor;
var verdict = document.getElementById("verdict");
var resetButton = document.querySelector("#reset");
var heading = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent==="Easy"){
				numSquares = 3;
			}
			else if(this.textContent === "Hard"){
				numSquares = 6;
			}
			reset();
		});
	}
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(pickedColor===clickedColor)
			{
				verdict.textContent = "Correct";
				heading.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);

			}
			else{
				this.style.backgroundColor = "#232323";
				verdict.textContent = "Try Again";
			}
		});
	}
	reset();
}

function reset(){
	resetButton.textContent = "Change Colors"
	verdict.textContent = "";
	heading.style.backgroundColor = "steelblue";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}else{
			squares[i].style.display = "none";
		}
	}
}


resetButton.addEventListener("click",function(){
	reset();
});
function changeColors(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}

	return arr;
}
function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}



