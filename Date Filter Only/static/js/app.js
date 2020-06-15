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
  
  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  //   console.log(tableData);

  let filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);
  console.log("done");

  //Clear table
  tbody.clear();
  
  //Display the filtered data
  data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

};