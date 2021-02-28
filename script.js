$(document).ready(function() {

    var currentDate= moment().format('dddd, MMMM Do YYYY');
    // we need to use moment to reflect what day it is to the user to plan their day
    var currentDay = $('#currentDay');
    //defining the HTML variable in JavaScript so I can apply moment to change the dates 
    currentDay.append(currentDate);
    //appending the moment formatting and current time display to that HTML emlement

    var hourNow = moment().format('HH')
    //this is the currrent hour pulled using moment
    var rightNow = parseInt(hourNow);
    //parsed the current time in order to have a comparable integer to make the conditionals easier
    console.log(rightNow)
     $("textarea").each(function(){
         //by creating an each loop it will go through each text area on the page
         // I gave each text area an index number based on time (military time) to have a number to compare to the current time
        var hour = parseInt($(this).attr("index"));
        //that index needs to be read as a number to properly compare to the current time already parsed above from moment  
         console.log(hour);
         if(hour < rightNow){
             //if the hour on the planner is less than right now it is given the past class in CSS 
            $(this).addClass("past");
            return;
         } 
         if(hour > rightNow){
            //if the hour on the planner is more than right now it is given the future class in CSS 
            $(this).addClass("future");
            return;
         }
         if(hour === rightNow){
            //if the hour on the planner is equal to right now it is given the past class in CSS 
            $(this).addClass("present");
            return;
         }
     });

     var hour9v = $('#9todo');
     var hour10 = $('#10todo');
     var hour11 = $('#11todo');
     var hour12 = $('#12todo');
     var hour1 = $('#1todo');
     var hour2 = $('#2todo');
     var hour3 = $('#3todo');
     var hour4 = $('#4todo');
     var hour5 = $('#5todo');

    var saveBTN = document.querySelectorAll(".saveBtn");
    
     var planner ={
        '9AM' : hour9val.value();
    }
    localStorage.setItem('planner', JSON.stringify(planner));


  
});