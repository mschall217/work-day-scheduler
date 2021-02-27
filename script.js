var currentTime = moment().format('MMMM Do YYYY');
// we need to use moment to reflect what day it is to the user to plan their day
var currentDay = $('#currentDay');
//defining the HTML variable in JavaScript so I can apply moment to change the dates 
currentDay.append(currentTime);
//appending the moment formatting and current time display to that HTML emlement


var hourFormat = moment().format('h a');
