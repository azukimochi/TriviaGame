var questionObj;
var correctAnswer = "";
var userGuess = "";
var i = 0;
var count = 30;
var wins = 0;
var losses = 0;
var unanswered = 0;

var timerOn;
function timer() {
    if (count != 0) {
        count--;
        console.log(count);
        $("#timer").html("Time Remaining: " + count + " seconds");
    } else {
            clearInterval(timerOn);
            i++;
            $("#response").text("Time's up! You didn't answer!");
            $(".outer-box").css("background-color", questionObj.bgColour);
            $("#question").text(questionObj.winnerText);
            $(".choices").text("");
            $("#image").prepend(questionObj.image);
            unanswered++;
            console.log("Num of unanswered " + unanswered);
            setTimeout(allQuestions[i], 3500);            
    } 
}
 
function countDown() {
    timerOn = setInterval(timer, 1000);
}

var allQuestions = [ 
    questionNumOne,
    questionNumTwo,
    questionNumThree,
    questionNumFour,
    questionNumFive,
    results,
]


function questionNumOne() {
     questionObj = {
        question: "Which mobile game was flagged as a cause of several armed robbies due to the game's GPS feature?",
        answer1: "Pokemon Go",
        answer2: "Fantasy War Tactics",
        answer3: "Ingress",
        answer4: "Turf Wars",
        image: '<img src="./assets/images/pokemongo.png">',
        winnerText: "The correct answer is Pokemon Go!",
        bgColour: " #ff4d4d"
    }
    $("#timer").text("Time Remaining: 30 seconds");
    $("#response").text("");
    $("#question").text(questionObj.question);
    $("#answer1").text(questionObj.answer1);
    $("#answer2").text(questionObj.answer2);
    $("#answer3").text(questionObj.answer3);
    $("#answer4").text(questionObj.answer4);
    $("#image").html("");
    correctAnswer = questionObj.answer1;
    count = 30;
    countDown();
}

function questionNumTwo() {
    questionObj = {
       question: "Shinkai Makoto, the director of the hit anime film, Your Name, created which short film in the early 2000s that brought him international acclaim?",
       answer1: "Hoshi wo Ou Kodomo (Children Who Chase Lost Voices)",
       answer2: "5 Centimeters per Second",
       answer3: "Hoshi no Koe (Voices of a Distant Star)",
       answer4: "Koto noh a no Niwa (Garden of Words)",
       image: '<img src="./assets/images/hoshinokoe.jpg">',
       winnerText: "The correct answer is Hoshi no Koe (Voices of a Distant Star)!",
       bgColour: "#ffa366"
   }
   $("#timer").text("Time Remaining: 30 seconds");
   $("#response").text("");
   $("#question").text(questionObj.question);
   $("#answer1").text(questionObj.answer1);
   $("#answer2").text(questionObj.answer2);
   $("#answer3").text(questionObj.answer3);
   $("#answer4").text(questionObj.answer4);
   $("#image").html("");
   correctAnswer = questionObj.answer3;
   count = 30;
   countDown();
}

function questionNumThree() {
    questionObj = {
       question: "In Avengers: Infinity War, which mass retail chian does Okoye want in Wakanda?",
       answer1: "Chatime",
       answer2: "McDonald's",
       answer3: "Nordstrom",
       answer4: "Starbucks",
       image: '<img src="./assets/images/starbucks.png">',
       winnerText: "The correct answer is an Starbucks!",
       bgColour: "#8cd98c"
   }
   $("#timer").text("Time Remaining: 30 seconds");
   $("#response").text("");
   $("#question").text(questionObj.question);
   $("#answer1").text(questionObj.answer1);
   $("#answer2").text(questionObj.answer2);
   $("#answer3").text(questionObj.answer3);
   $("#answer4").text(questionObj.answer4);
   $("#image").html("");
   correctAnswer = questionObj.answer4;
   count = 30;
   countDown();
}

function questionNumFour() {
    questionObj = {
       question: "Which company created the mascot character, Gudetama?",
       answer1: "Sony",
       answer2: "Sanrio",
       answer3: "Subaru",
       answer4: "Samsung",
       image: '<img src="./assets/images/gudetama.png">',
       winnerText: "The correct answer is SANRIO!",
       bgColour: "#ffeb99"
   }
   $("#timer").text("Time Remaining: 30 seconds");
   $("#response").text("");
   $("#question").text(questionObj.question);
   $("#answer1").text(questionObj.answer1);
   $("#answer2").text(questionObj.answer2);
   $("#answer3").text(questionObj.answer3);
   $("#answer4").text(questionObj.answer4);
   $("#image").html("");
   correctAnswer = questionObj.answer2;
   count = 30;
   countDown();
}

function questionNumFive() {
    questionObj = {
       question: "Which meme originated from the webcomic known as Ctrl+Alt+Del?",
       answer1: "Loss meme",
       answer2: "T-pose meme",
       answer3: "Disintergration meme",
       answer4: "Pepe the Frog meme",
       image: '<img src="./assets/images/lossmeme.jpg">',
       winnerText: "The correct answer is the Loss meme!",
       bgColour: "#668cff"
   }
   $("#timer").text("Time Remaining: 30 seconds");
   $("#response").text("");
   $("#question").text(questionObj.question);
   $("#answer1").text(questionObj.answer1);
   $("#answer2").text(questionObj.answer2);
   $("#answer3").text(questionObj.answer3);
   $("#answer4").text(questionObj.answer4);
   $("#image").html("");
   correctAnswer = questionObj.answer1;
   count = 30;
   countDown();
}

function results() {
    $("#timer").text("");
    $("#response").text("YOUR RESULTS ARE IN!");
    $("#question").text("");
    $("#result-correct").text("Correct: " + wins);
    $("#result-incorrect").text("Incorrect: " + losses);
    $("#result-unanswered").text("Unanswered: " + unanswered);
    $("#restart").text("PLAY AGAIN?");
    $("#image").html("");
}
//end of declaration of variables and functions

$(document).ready(function() {

    $("#start").click(function() {
        $("#start").text("");
        questionNumOne();
    });

    $("#answer1").click(function() {
        console.log(this);
        userGuess = questionObj.answer1;
        i++;
        if (userGuess === correctAnswer) {
            $("#response").text("Correct!");
            $("#question").text(questionObj.winnerText);
            $(".choices").text("");
            $("#image").prepend(questionObj.image);
            wins++;
            console.log("Yes");
            $(".outer-box").css("background-color", questionObj.bgColour);
        } else  {
            $("#response").text("Wrong!");
            $("#question").text(questionObj.winnerText);
            $(".choices").text("");
            $("#image").prepend(questionObj.image);
            losses++;
            console.log("No");
            $(".outer-box").css("background-color", questionObj.bgColour);
        }
        clearInterval(timerOn);
        setTimeout(allQuestions[i], 3500);
    });

    $("#answer2").click(function() {
        console.log(this);
        userGuess = questionObj.answer2;
        i++;
        if (userGuess === correctAnswer) {
            $("#response").text("Correct!");
            $("#question").text(questionObj.winnerText);
            $(".choices").text("");
            $("#image").prepend(questionObj.image);
            wins++;
            console.log("Yes");
            $(".outer-box").css("background-color", questionObj.bgColour);
        } else  {
            $("#response").text("Wrong!");
            $("#question").text(questionObj.winnerText);
            $(".choices").text("");
            $("#image").prepend(questionObj.image);
            losses++;
            console.log("No");
            $(".outer-box").css("background-color", questionObj.bgColour);
        }
        clearInterval(timerOn);
        setTimeout(allQuestions[i], 3500);
    });

    $("#answer3").click(function() {
        console.log(this);
        userGuess = questionObj.answer3;
        i++;
        if (userGuess === correctAnswer) {
            $("#response").text("Correct!");
            $("#question").text(questionObj.winnerText);
            $(".choices").text("");
            $("#image").prepend(questionObj.image);
            wins++;
            console.log("Yes");
            $(".outer-box").css("background-color", questionObj.bgColour);
        } else  {
            $("#response").text("Wrong!");
            $("#question").text(questionObj.winnerText);
            $(".choices").text("");
            $("#image").prepend(questionObj.image);
            losses++;
            console.log("No");
            $(".outer-box").css("background-color", questionObj.bgColour);
        }
        clearInterval(timerOn);
        setTimeout(allQuestions[i], 3500);
    });

    $("#answer4").click(function() {
        console.log(this);
        userGuess = questionObj.answer4;
        i++;
        if (userGuess === correctAnswer) {
            $("#response").text("Correct!");
            $("#question").text(questionObj.winnerText);
            $(".choices").text("");
            $("#image").prepend(questionObj.image);
            wins++;
            console.log("Yes");
            $(".outer-box").css("background-color", questionObj.bgColour);
        } else  {
            $("#response").text("Wrong!");
            $("#question").text(questionObj.winnerText);
            $(".choices").text("");
            $("#image").prepend(questionObj.image);
            losses++;
            console.log("No");
            $(".outer-box").css("background-color", questionObj.bgColour);
        }
        clearInterval(timerOn);
        setTimeout(allQuestions[i], 3500);
    });

    $("#restart").click(function() {
        console.log("restart");
        $("#response").text("");
        $("#result-correct").text("");
        $("#result-incorrect").text("");
        $("#result-unanswered").text("");
        $("#restart").text("");
        $(".outer-box").css("background-color", "#ccb3ff");
        i = 0;
        wins = 0;
        losses = 0;
        unanswered = 0;
        setTimeout(allQuestions[i]());
    });

});

