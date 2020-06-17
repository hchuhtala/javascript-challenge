// from data.js
let tableData = data;

// Populate table
let tbody = d3.select("tbody");
// console.log(data);

data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Add Filter

// Select the form
let button = d3.select("#filter-btn");
let form = d3.select("#filters");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Get the value property of the input elements
  let criteria = ["datetime", "city", "state", "country", "shape"];
  
  criteria forEach(function(c){
  let inputValue = d3.select("#" + c).property("value") 
  });



  let inputValue1 = d3.select("#datetime").property("value");
  let inputValue2 = d3.select("#city").property("value");

  console.log(inputValue1);
  console.log(inputValue2);
  //   console.log(tableData);

  let filteredData = tableData.filter(sighting => sighting.datetime === inputValue1).filter(sighting => sighting.city === inputValue2);

  console.log(filteredData);
  console.log("done");

  //Clear table
  tbody.html("");
  
  //Display the filtered data
  filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

};