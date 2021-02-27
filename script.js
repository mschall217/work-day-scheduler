
var currentTime = moment().format('MMMM Do YYYY');
// we need to use moment to reflect what day it is to the user to plan their day
var currentDay = $('#currentDay');
//defining the HTML variable in JavaScript so I can apply moment to change the dates 
currentDay.append(currentTime);
//appending the moment formatting and current time display to that HTML emlement


var timeBlocks = $(".container");
//there was a pre defined container where our time blocks need to go 
var table = $('<table>')
timeBlocks.append(table);
//in office hours our instructor did a little demo on how to get time blocks to add using query 
//for neater code we assigned that element to a variable which I appended to the HTML 
var workingHours =[];
//this is an array that holds the hours we worked 
for(i=9; i<18; i++ ){
    var tr = $('<tr>');
    var td = $('<td>');
    td.text(i);
    tr.append(td);
    table.append(tr);
}
// this loop was also demoed and we create a for loop to add blocks to the HTML
// i is equal to the 9-5 hours of work 
