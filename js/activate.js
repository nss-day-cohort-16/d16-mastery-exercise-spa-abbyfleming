//IIFE to add event listeners

var CarLot = (function(styleCar) {

	styleCar.activateEvents = function() {
		//add some event listeners here.
		console.log("styleCar.activateEvents"); 
	}

	return styleCar;

})(CarLot);