//IIFE to add event listeners

var CarLot = (function(styleCar) {

	styleCar.activateEvents = function() {
		//add some event listeners here.
		//Events to add 
		//1)Click on Card 
		//2)Type Input
		
		console.log("styleCar.activateEvents"); 
	}

	return styleCar;

})(CarLot);