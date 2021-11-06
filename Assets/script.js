
// Display today's day and date
let DateTime = luxon.DateTime;
let today = DateTime.now();
let thisHour = DateTime.local().hour;
// const displayDate = DateTime.DATE_HUGE;
// const { DateTime } = require("luxon");
//not getting date to show up

// getDate = () => {
//     var todayDate = DateTime.DATE_HUGE;
// };

// //     return today.toLocalString(DateTime.DATE_HUGE);
// //  

function timeTracker() {
    //get current number of hours.
    // var thisHour = DateTime.local().hour;
    console.log(today);
    console.log(thisHour);
    // displayDate = today.getItem(today.utc.DATE_MED);
    
    // const today = DateTime;
    // return today.toLocalString(DateTime.DATE_HUGE);
};

$(document).ready(function () {
    timeTracker();
    // getTime();
    // getDate();
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
        // getDate();
        // var todayDate = document.getElementById ("todaysDate");
        // today.innerHTML(today);
        // console.log(today);
        
        });

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < thisHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === thisHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })


    // Get item from local storage if any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // timeTracker();
})