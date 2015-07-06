// Function to draw your map
function drawMap() {

  // Create map and set viewd
	var map = L.map('container');
	map.setView([47.6097,-122.3331],10);

  // Create an tile layer variable using the appropriate url
  	var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
  // Add the layer to your map
 	layer.addTo(map);

  // Execute your function to get data
 	
}

// Function for getting data
function getData(data) {

  // Execute an AJAX request to get the data in data/response.js

	$.ajax({
    url:'data/response.json',
    type: "get",
    success:function(dat) {

       // Loop through your data array
      dat.map(function(d) {
         customBuild(d)
      })
    }, 
   dataType:"json"
}) 
 
  // When your request is successful, call your customBuild function

}

// Do something creative with the data here!  
function customBuild(d) {
	if (d["Victim's Gender"] == "Female") {
		var circle = new L.circle(
		[d.lat, d.lng], 
		200, {color:'red', opacity:.5
		}).addTo(map);
	} else {
		var circle = new L.circle(
		[d.lat, d.lng], 
		200, {color:'blue', opacity:.5
		}).addTo(map);
	}
}


