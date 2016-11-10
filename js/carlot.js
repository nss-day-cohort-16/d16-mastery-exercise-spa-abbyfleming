console.log("carlot.js"); 

var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function(callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "js/inventory.json");
      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
      	var inventoryData = JSON.parse(this.responseText).cars;
      	inventory.push(inventoryData);

      	callback(inventoryData);

      	console.log("inventoryData", inventoryData); 
      });

    },

    getInventory: function(callback) {
    	//read the array
    }


  };

})();