var timerOn;
var count = 10;
function timer() {
    if (count != 0) {
        console.log(count);
        count--;
        $("#timer").html("Time Remaining: " + count + " seconds");
    } else {
            clearInterval(timerOn);
            console.log("Hi");
            alert("Done");
    } 
}

function countDown() {
    timerOn = setInterval(timer, 1000);
}

$(document).ready(function() {
    countDown();

});

