"use strict";


var CarLot = (function(oldCarLot) {

	oldCarLot.addBorder = function(element, color) {
		element.classList.add("borderColor");
		element.style.background = color;
	};

	oldCarLot.removeBorder = function(allTheCars) {

		for (var i = 0; i < allTheCars.length; i++) {

			if (allTheCars[i].classList.contains("borderColor")) {
				allTheCars[i].classList.remove("borderColor");
				allTheCars[i].style.background = "";
			}
		}
	};

	//One function resets the border thickness and background color for each car element back to the original values.	

	return oldCarLot;

})(CarLot || {});