var questionObj;
var correctAnswer = "";
var userGuess = "";
var i = 0;
var count = 10;
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
            $("#question").text(questionObj.winnerText);
            $(".choices").text("");
            $("#image").prepend(questionObj.image);
            unanswered++;
            console.log("Num of unanswered " + unanswered);
            setTimeout(allQuestions[i], 1000);            
    } 
}
 
function countDown() {
    timerOn = setInterval(timer, 500);
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
        question: "Which instrument has forty-seven strings and seven pedals?",
        answer1: "Harp",
        answer2: "Cello",
        answer3: "Piano",
        answer4: "Flute",
        image: '<img src="./assets/images/test.jpg">',
        winnerText: "The correct answer is the HARP!",
    }
    $("#timer").text("Time Remaining: 10 seconds");
    $("#response").text("");
    $("#question").text(questionObj.question);
    $("#answer1").text(questionObj.answer1);
    $("#answer2").text(questionObj.answer2);
    $("#answer3").text(questionObj.answer3);
    $("#answer4").text(questionObj.answer4);
    $("#image").html("");
    correctAnswer = questionObj.answer1;
    count = 10;
    countDown();
}

function questionNumTwo() {
    questionObj = {
       question: "Which fruit is considered to be the King of Fruits?",
       answer1: "Mango",
       answer2: "Lychee",
       answer3: "Durian",
       answer4: "Tomato",
       image: '<img src="./assets/images/test.jpg">',
       winnerText: "The correct answer is DURIAN!",
   }
   $("#timer").text("Time Remaining: 10 seconds");
   $("#response").text("");
   $("#question").text(questionObj.question);
   $("#answer1").text(questionObj.answer1);
   $("#answer2").text(questionObj.answer2);
   $("#answer3").text(questionObj.answer3);
   $("#answer4").text(questionObj.answer4);
   $("#image").html("");
   correctAnswer = questionObj.answer3;
   count = 10;
   countDown();
}

function questionNumThree() {
    questionObj = {
       question: "What is a group of ravens known as?",
       answer1: "A flock",
       answer2: "A swarm",
       answer3: "A pack",
       answer4: "An unkindness",
       image: '<img src="./assets/images/test.jpg">',
       winnerText: "The correct answer is an UNKINDNESS!",
   }
   $("#timer").text("Time Remaining: 10 seconds");
   $("#response").text("");
   $("#question").text(questionObj.question);
   $("#answer1").text(questionObj.answer1);
   $("#answer2").text(questionObj.answer2);
   $("#answer3").text(questionObj.answer3);
   $("#answer4").text(questionObj.answer4);
   $("#image").html("");
   correctAnswer = questionObj.answer4;
   count = 10;
   countDown();
}

function questionNumFour() {
    questionObj = {
       question: "Which company created the mascot character, Gudetama?",
       answer1: "Sony",
       answer2: "Sanrio",
       answer3: "Subaru",
       answer4: "Samsung",
       image: '<img src="./assets/images/test.jpg">',
       winnerText: "The correct answer is SANRIO!",
   }
   $("#timer").text("Time Remaining: 10 seconds");
   $("#response").text("");
   $("#question").text(questionObj.question);
   $("#answer1").text(questionObj.answer1);
   $("#answer2").text(questionObj.answer2);
   $("#answer3").text(questionObj.answer3);
   $("#answer4").text(questionObj.answer4);
   $("#image").html("");
   correctAnswer = questionObj.answer2;
   count = 10;
   countDown();
}

function questionNumFive() {
    questionObj = {
       question: "Which meme originated from the webcomic known as Ctrl+Alt+Del?",
       answer1: "Loss meme",
       answer2: "T-pose meme",
       answer3: "Disintergration meme",
       answer4: "Pepe the Frog meme",
       image: '<img src="./assets/images/test.jpg">',
       winnerText: "The correct answer is the Loss meme!",
   }
   $("#timer").text("Time Remaining: 10 seconds");
   $("#response").text("");
   $("#question").text(questionObj.question);
   $("#answer1").text(questionObj.answer1);
   $("#answer2").text(questionObj.answer2);
   $("#answer3").text(questionObj.answer3);
   $("#answer4").text(questionObj.answer4);
   $("#image").html("");
   correctAnswer = questionObj.answer1;
   count = 10;
   countDown();
}

function results() {
    $("#timer").text("");
    $("#response").text("Your results are in!");
    $("#question").text("");
    $("#result-correct").text("Correct: " + wins);
    $("#result-incorrect").text("Incorrect: " + losses);
    $("#result-unanswered").text("Unanswered: " + unanswered);
    $("#restart").text("Would you like to play again?");
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
        } else  {
            $("#response").text("Wrong!");
            $("#question").text(questionObj.winnerText);
            $(".choices").text("");
            $("#image").prepend(questionObj.image);
            losses++;
            console.log("No");
        }
        clearInterval(timerOn);
        setTimeout(allQuestions[i], 1000);
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
        } else  {
            $("#response").text("Wrong!");
            $("#question").text(questionObj.winnerText);
            $(".choices").text("");
            $("#image").prepend(questionObj.image);
            losses++;
            console.log("No");
        }
        clearInterval(timerOn);
        setTimeout(allQuestions[i], 1000);
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
        } else  {
            $("#response").text("Wrong!");
            $("#question").text(questionObj.winnerText);
            $(".choices").text("");
            $("#image").prepend(questionObj.image);
            losses++;
            console.log("No");
        }
        clearInterval(timerOn);
        setTimeout(allQuestions[i], 1000);
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
        } else  {
            $("#response").text("Wrong!");
            $("#question").text(questionObj.winnerText);
            $(".choices").text("");
            $("#image").prepend(questionObj.image);
            losses++;
            console.log("No");
        }
        clearInterval(timerOn);
        setTimeout(allQuestions[i], 1000);
    });

    $("#restart").click(function() {
        console.log("restart");
        $("#response").text("");
        $("#result-correct").text("");
        $("#result-incorrect").text("");
        $("#result-unanswered").text("");
        $("#restart").text("");
        i = 0;
        wins = 0;
        losses = 0;
        unanswered = 0;
        setTimeout(allQuestions[i]());
    });

});

