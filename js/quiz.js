
//convert to bootstrap

function populatePage (inventoryData) {
	for (i = 0; i < inventoryData.length; i++) {

		// Create the elements
		var div = document.createElement("ARTICLE");
		var header = document.createElement("HEADER");
		var section = document.createElement("SECTION");
		var footer = document.createElement("FOOTER");	

		// Sort through the array 
		getinfo = inventoryData[i];
		div.classList.add("car", "border");
		
		div.id = `car${i}`;
		header.innerHTML  = getinfo.year + " " + getinfo.make + " " + getinfo.model  ; 
		section.innerHTML = "$" + getinfo.price;
		footer.innerHTML  = getinfo.description;

		// Append and output
		div.appendChild(header);
		div.appendChild(section);
		div.appendChild(footer);
		output.appendChild(div);
	
		document.getElementById(`car${i}`).addEventListener("click", function() {
			this.classList.add("borderColor");
		});

	};

	CarLot.activateEvents();
}


//   // Now that the DOM is loaded, establish all the event listeners needed
//   CarLot.activateEvents();
// }

CarLot.loadInventory(populatePage);
