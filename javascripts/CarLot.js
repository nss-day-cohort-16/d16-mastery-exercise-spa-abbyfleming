"use strict";

 var CarLot = (function () {
  var inventory = [];

  return {

	returnInventory: function() {
		console.log("inventory", inventory); 
		return inventory;

    },


    loadInventory: function (populatePagefromQuiz) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "javascripts/inventory.json");
      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText).cars;
      populatePagefromQuiz(inventory);
      });
    }

};

})(CarLot || {});