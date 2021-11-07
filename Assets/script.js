
// Display today's day and date
let DateTime = luxon.DateTime;
let today = DateTime.local();
let thisHour = DateTime.local().hour;


function timeTracker() {
    console.log(thisHour);
    $("#todaysDate").text(today.toLocaleString());
}

//if it is before 6pm, save entries
function saveEntries() {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
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
    });
}

//check time && if it is past 5pm, clear contents. Otherwise, save entries.
$(document).ready(function () {
    timeTracker();
    if(thisHour>17) {
        $(".time-block").each (function(){
            var text = "";
            var time = $(this).attr("id");
            $(this).addClass("past");

            localStorage.setItem(time,text);
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
        });
    } else {
    saveEntries();
    }
});

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