//Global Variables
var todayDate = moment().format('LL')
var eventText = $(".description") 
var eventTime = $(".hour")
var events = []
var currentTime = moment()
var row = $(".row")


//current date
$("#currentDay").append(todayDate);

//save the event information 
$(".saveBtn").on("click", function() {
    var eventInfo = eventText.val()
    var matchTime = eventTime.val();
    var eventEntry = {
        information: eventInfo,
        time: matchTime
    }

    events.push(eventEntry);
    localStorage.setItem("events", JSON.stringify(events));
})

//load the saved events 
var loadEvents = function() {
    events = JSON.parse(localStorage.getItem("events"));
    console.log("this worked");
    $("description").append(events);
}

loadEvents();

//apply new class if event is past
//loop here?
if (moment(eventTime).isBefore(currentTime)) {
    $(row).addClass(".bg-secondary")
}
else if (moment(eventTime).isAfter(currentTime)) {
    $(row).addClass(".bg-success")
}
else if (moment(eventTime).isSame(currentTime))
    $(row).addClass(".bg-danger")



