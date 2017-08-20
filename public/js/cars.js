"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
let page = 3
let carArr = []

function formatCars(cars) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"


	return  `<div class="row">
          <div class="col-md-4 car">
            <h2>${cars[0]['Make']}</h2>
            <p><strong>Model:</strong> ${cars[0]['Model']}</p>
            <p><strong>Year:</strong> ${cars[0]['Year']}</p>
          </div>
          <div class="col-md-4 car">
            <h2>${cars[1]['Make']}</h2>
            <p><strong>Model:</strong> ${cars[1]['Model']}</p>
            <p><strong>Year:</strong> ${cars[1]['Year']}</p>
          </div>
          <div class="col-md-4 car">
            <h2>${cars[2]['Make']}</h2>
            <p><strong>Model:</strong> ${cars[2]['Model']}</p>
            <p><strong>Year:</strong> ${cars[2]['Year']}</p>
          </div>
        </div>`
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
    // console.log(carsJSON)
  	let carsText = formatCars(carsJSON)
  	// console.log(carsJSON)
    $("#cars").append(carsText);
}



function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()

   	// var page = 1
    var listcars = baseUrl + `${page+=1}/3`;
    // var url = "http://mimeocarlisting.azurewebsites.net/api/cars/{page}/3";
 	// debugger
	$.ajax({
    	url: listcars,
   		contentType: 'application/json',
    	dataType: 'jsonp',
    	success: function(cars){
    		addCarsToDOM(cars)
    	}
	})

}





//   makeAjaxRequest(URL, function(json) {
//     var data = generateDataSet(getHours(json), getFahrenheits(json));
//     var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
//   });
// });


