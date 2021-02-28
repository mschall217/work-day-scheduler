$(document).ready(function() {

    var currentDate= moment().format('dddd, MMMM Do YYYY');
    // we need to use moment to reflect what day it is to the user to plan their day
    var currentDay = $('#currentDay');
    //defining the HTML variable in JavaScript so I can apply moment to change the dates 
    currentDay.append(currentDate);
    //appending the moment formatting and current time display to that HTML emlement

    var nine = $('#9');
    var ten = $('#10');
    var eleven = $('#11');
    var noon = $('#12');
    var one = $('#13');
    var two = $('#14');
    var three = $('#15');
    var nine = $('#16');
    var nine = $('#17');

    
    var rightNow = parseInt(moment().format('HH'));
    console.log(rightNow)
     $("textarea").each(function(){
        var index = parseInt($(this).attr("index"));
         console.log(index);
         if( index < rightNow){
            $(this).addClass("past");
            return;
         } 
         if(index > rightNow){
            $(this).addClass("future");
            return;
         }
         if(index === rightNow){
            $(this).addClass("present");
            return;
         }
     });







     })   
