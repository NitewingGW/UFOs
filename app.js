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

function handleClick() {
    //the .select() function is a very common one used in D3. It will select 
    //the very first element that matches our selector string: "#datetime". 
    //The selector string is the item we're telling D3.js to look for. 
    //With d3.select("#datetime"), for example, we're telling D3 to look for
    //the #datetime id in the HTML tags. 
    //chaining .property("value"); to the d3.select function, we're telling D3
    //not only to look for where our date values are stored on the webpage, but 
    //to actually grab that information and hold it in the "date" variable 
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData; //refernece the const tableData = data

    // pseudocode
    //if (a date is entered) {
        //Filter the default data to show only the date entered
        //};
        //Show only the rows where the date is equal to the date 
        //filter we created above.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

       // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}
  //runs handleClick function
d3.selectAll("#filter-btn").on("click", handleClick);
  // Build the table when the page loads
buildTable(tableData);
