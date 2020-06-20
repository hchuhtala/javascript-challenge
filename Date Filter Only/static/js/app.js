// from data.js
let tableData = data;

// Populate table
let tbody = d3.select("tbody");
// console.log(data);

data.forEach((ufoReport) => {
  let row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
  });
});

let criteria = "datetime";

// Create event handler function

d3.selectAll("#filter-btn").on("click", function () {

  let filteredData = data;
  console.log(filteredData)

    // Get the value property of the input element
    let inputValue = d3.select(`#${criteria}`).property("value");
    console.log(`#${criteria}`);
    console.log(inputValue);
    // if (inputValue != "") {
      filteredData = filteredData.filter(sighting => sighting[criteria] == inputValue);
    // }
  
  console.log(filteredData);

  //Clear table
  tbody.html("");

  //If no results
  if (filteredData.length == 0) {
    d3.select("#results").text("No Results Meet Criteria");
    console.log("no data");
  }
  //Results Found
  else if (filteredData.length > 0) {
    console.log("results found");
    //Display the filtered data
    filteredData.forEach((ufoReport) => {
      let row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
      });
    });
  }

});
