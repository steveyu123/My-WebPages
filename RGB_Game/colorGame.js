var numSquares = 6;

var	colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

inuit();

function inuit() {
setupModeButtons();
setupSquares();
reset();
}


function setupModeButtons(){
		for(var i = 0; i< modeButtons.length; i++){
			modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});

	}
}


function setupSquares(){

	for(var i = 0; i< squares.length; i++){
		//initial colors	
		squares[i].style.background = colors[i];

		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;

			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				//you want ot change all the squares to the correct color after selecting the correct one
				changeColors(clickedColor);
				h1.style.background = pickedColor;
				resetButton.textContent = "Play Again?";
				
			} else {
				this.style.background = "#232323";
				//fades out the incorrect squares clicked
				messageDisplay.textContent = "Try again!";

			}
		})

	}	

}

function reset() {
	colors = generateRandomColors(numSquares);
	//choose a pick color
	pickedColor = pickColor();
	//change the display
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors?";
	messageDisplay.textContent = "";
		//generate new squares
	for(var i = 0; i< squares.length; i++){
		//initial colors
		if(colors[i]){	
			squares[i].style.display = "block";	
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";	
		}
	}
	//change the background span color
	h1.style.background = "steelblue";

}

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0; i < squares.length; i++){
// 		if (colors[i]){
// 		squares[i].style.background = colors[i];
// 		} 
// 		else {
// 		squares[i].style.display = "none";
// 		}
// 	}

// });

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0; i < squares.length; i++){
		
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 		}
	

// });




resetButton.addEventListener("click", function(){
	reset();
})





function changeColors(color) {
//loop through each square to change the color to a desire outcome
	for (var i = 0; i< squares.length; i++){
		squares[i].style.background = color;
	 }
	}


function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	//math random selects from 0-1 while colors gives us a value of 6 in this example. 
	//Result will always be from 0-5 never six because of never hitting value of 6.
	//works for us because our indices are 0-5. Out of the six one of the colors will be chosen.
	return colors[random];
	}	


function generateRandomColors(num) {
	//make array
	var arr = [];
	//repeat num times
		for(var i = 0; i < num; i++){
		//add random colors
		arr.push(randomColor());

		}
			return arr;
		}


function randomColor (){
//math.random for R, G, B
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

return "rgb(" + r +", " + g + ", " + b + ")";

}




