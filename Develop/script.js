$(document).ready(function() {
    //Global Variables
    var todayDate = moment().format('LL')
    var events = []
    var currentTime= moment().hour()


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


    $(".time-block").each(function() {
        if (parseInt($(this).attr("data-time")) < currentTime) {
         $(this).addClass("past")
        }
        else if (parseInt($(this).attr("data-time")) === currentTime) {
            $(this).removeClass("future")
            $(this).addClass("present")
            
        }
        else if (parseInt($(this).attr("data-time")) > currentTime) {
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
        

})
