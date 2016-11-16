"use strict";

function populatePage (inventory) {

  var output = document.getElementById("output");
  var containerDiv = document.createElement("DIV");
  
  containerDiv.classList.add("container");


  for (var i = 0; i < inventory.length; i++) {

      //add a new column each time the loop runs
      var newCard = document.createElement("div");
      newCard.classList.add("col-sm-4", "border", "carClass");
      newCard.id = `car${i}`;

      //grab the data each time the loops run
      var getInfo = inventory[i];
      newCard.innerHTML = 
      `
      <h2>${getInfo.year} ${getInfo.make} ${getInfo.model}</h3>
      <h3>$${getInfo.price}</h3>
      <p id="desc${i}">${getInfo.description}</p>`;

      //every 3x add a new row 
      if (i % 3 === 0) {        
        var newRow = document.createElement("div");
        newRow.classList.add("row");
        containerDiv.appendChild(newRow);
        }

      //output the final
      newRow.appendChild(newCard);  
      output.appendChild(containerDiv); 

      //click event for highlighting card
	
  }
    //must be outside of the for loop
    //give each card all the same class name   
    
    CarLot.activateEvents();
    //CarLot.activateInput();
    //CarLot.activateEvents(`car${i}`);
    //

}


CarLot.loadInventory(populatePage);

