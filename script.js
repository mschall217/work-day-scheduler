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
       //this sets them to local storage 
       localStorage.setItem(hourID, todo);
       console.log(hourID, todo);
       //they log successfully to the console
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

var hour9 = $("#nine");
var hour10 = $("#ten");
var hour11 = $("#eleven");
var hour12 = $("#noon");
var hour1 = $("#one");
var hour2 = $("#two");
var hour3 = $("#three");
var hour4 = $("#four");
var hour5 = $("#five");
//assigned the HTML ids to jquery variables 

var userToDo = $('.description');

hour9.children(userToDo).val(localStorage.getItem("nine"));
hour10.children(userToDo).val(localStorage.getItem("ten"));
hour11.children(userToDo).val(localStorage.getItem("eleven"));
hour12.children(userToDo).val(localStorage.getItem("noon"));
hour1.children(userToDo).val(localStorage.getItem("one"));
hour2.children(userToDo).val(localStorage.getItem("two"));
hour3.children(userToDo).val(localStorage.getItem("three"));
hour4.children(userToDo).val(localStorage.getItem("four"));
hour5.children(userToDo).val(localStorage.getItem("five"));
//ALL THHIS TIMEE i forgot the periods to define description as a class...
//it wasn't recognizing the elemenet I was tagging so it wasn't assigning the values back where they belong
// assinged the class to a variable so I never have to forget a period again