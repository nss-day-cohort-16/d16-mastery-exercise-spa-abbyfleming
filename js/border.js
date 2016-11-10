//IIFE to add border

var CarLot = (function(styleCar) {

	styleCar.addBorder = function() {
		//add some code here
		console.log("styleCar.addBorder"); 
	}

	return styleCar;

})(CarLot);