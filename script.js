
var current= moment().format('MMMM Do YYYY');
// we need to use moment to reflect what day it is to the user to plan their day
var currentDay = $('#currentDay');
//defining the HTML variable in JavaScript so I can apply moment to change the dates 
currentDay.append(current);
//appending the moment formatting and current time display to that HTML emlement



$(document).ready(function() {



function timeKeeper(){
    var currentTime = moment().hours;
    $(".time-block").each(function(){
        var hour = parseInt($(this).attr("id"));
        if(hour < currentTime){
            $(this).addClass("past")
        } else if(hour = currentTime){
            $(this).addClass("present")
            $(this).removeClass("past")
            $(this).removeClass("future")
        } else
            $(this).addClass("future")
            $(this).removeClass("past")
            $(this).removeClass("present")
    });
    }   

    timeKeeper();

});