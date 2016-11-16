"use strict";

var CarLot = (function(oldCarLot) {

	oldCarLot.activateEvents = function() {

	//ADD THE BORDER	
    var domCarClass = document.getElementsByClassName("carClass");
    var userInput = document.getElementById("input");
    
		
		for (var i = 0; i < domCarClass.length; i ++) {
			
			domCarClass[i].addEventListener("click", function (){
				
				//One function resets the border thickness and background color for each car element back to the original values.Needs the entire array of cars, check if the class exsists, if it does--remove it.
				CarLot.removeBorder(domCarClass);

				var color = "#D8E0EB";
				CarLot.addBorder(this, color);
				
				//clear the value of the text input in the navbar, and put the cursor in the text input.
				
				userInput.value = "";
				userInput.focus();
				
				//When you start typing into the navbar's text input, the description, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.
				
				mirrorText(userInput, this);
				


				});

		}

	};

	function mirrorText(userInput, eachCarCard) {
		//console.log("userInput", userInput);
		console.log("eachCarCard", eachCarCard);  

		userInput.addEventListener("keyup", function(){

			if (eachCarCard.classList.contains("borderColor")) {
				eachCarCard.querySelector("p").innerHTML = userInput.value; 
		}
		});

		
	} 

			
	return oldCarLot;

})(CarLot || {});