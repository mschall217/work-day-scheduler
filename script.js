$(document).ready(function() {

    var currentDate= moment().format('dddd, MMMM Do YYYY');
    // we need to use moment to reflect what day it is to the user to plan their day
    var currentDay = $('#currentDay');
    //defining the HTML variable in JavaScript so I can apply moment to change the dates 
    currentDay.append(currentDate);
    //appending the moment formatting and current time display to that HTML emlement



    $(".saveBtn").on("click", function () {
        //this says when any button with the saveBtn class is clicked then:
       var todo = $(this).siblings(".description").val();
       //we will take the value from the text areas with the class description
       var hourID = $(this).parent().attr("id");
       localStorage.setItem(hourID, todo);
       console.log(hourID, todo);
   });
   

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
    
});

$("#nine").children('description').val(localStorage.getItem("nine"));
$("#ten").children('description').val(localStorage.getItem("ten"));
$("#eleven").children('description').val(localStorage.getItem("eleven"));
$("#noon").children('description').val(localStorage.getItem("noon"));
$("#one").children('description').val(localStorage.getItem("one"));
$("#two").children('description').val(localStorage.getItem("two"));
$("#three").children('description').val(localStorage.getItem("three"));
$("#four").children('description').val(localStorage.getItem("four"));
$("#five").children('description').val(localStorage.getItem("five"));
