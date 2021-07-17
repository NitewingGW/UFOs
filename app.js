//Import form table data.js
const tableData = data;

//D3 is a JavaScript library that produces sophisticated 
//and highly dynamic graphics in an HTML webpage. It is 
//often used by data professionals to create dashboards, 
//or a collection of visual data (such as graphs and maps),
// for presentation
var tbody = d3.select("tbody"); //look for tbody tags

function buildTable(data) {
    tbody.html("");//clear table and all data
    data.forEach((dataRow) => {
        let row = tbody.append("tr");//use let when you want it to be local and var for global
        //object.values means ref one object from the array of ufo sightings
        //forEach is one object per row...val represents each item in the row
        Object.values(dataRow).forEach((val) => {
            //set up the action of appending data into a table data tag (<td>)
            let cell = row.append("td");
            //each value contained in object
            cell.text(val);
        });
        //With the above function, we have done the following:
        //Looped through each object in the array
        //Appended a row to the HTML table
        //Added each value from the object into a cell

    });

}-