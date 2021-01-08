//Global Variables
var todayDate = moment().format('LL')
var eventText = $(".description") 
var events = []
var currentTime= moment().format('h:mm a')


//current date
$("#currentDay").append(todayDate);

//save the event information 
$(".saveBtn").on("click", function() {
    var matchTime=$(this).data("time");
    var eventInfo = $("#" + matchTime).val();
    
    var eventEntry = {
        information: eventInfo,
        time: matchTime
    }

    events.push(eventEntry);
    localStorage.setItem("events", JSON.stringify(events));
})

//load the saved events 
var loadEvents = function() {

    var localEvents = JSON.parse(localStorage.getItem("events"));
    if (localEvents !== null) {
        events = localEvents

        for (let i = 0; i < events.length; i++) {
            var information = events[i].information
            var time = events[i].time
            
            $("#" + time).val(information)
        }
    }

}

loadEvents();

//apply new class if event is past
//loop here?


if (moment('2010-10-20').isBefore('2010-10-21')) {
    $(".description").addClass("past");
}



    
    



