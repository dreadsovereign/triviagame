var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;

function firstScreen() {
  $("#start").click(function() {
    $("h3, .answer-box").toggle().css("display", "flex");
    $(".start-button").toggle().css("display", "none");
    $(".trivia-box").css("height", "100%");
    $("h2").toggle().css("display", "none");
    $("#time").toggle().css("display", "flex");
    $("#submit-button").toggle().css("display", "flex");

    function startTimer (duration, display) {
    var timer = duration, minutes, seconds;
    intervalID = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;

        } else if (timer === 0) {
        answerClick();
        alert("You ran out of time!");
        $(".score").toggle().css({"display": "flex", "margin-top": "550px"});
        $(".correct").html("Correct: " + correctAnswers);
        $(".incorrect").html("Incorrect: " + wrongAnswers);
        $(".trivia-box").css("height", "500px");
        $("h3, .answer-box").toggle().css("display", "none");
        $("#submit-button").toggle().css("display", "none");
        $("html, body").animate({ scrollTop: 0 }, "fast");
        clearInterval(intervalID);
    } console.log(timer);
  }, 1000);
}

jQuery(function ($) {
    var twoMinutes = 60 * 2,
        display = $('#time');
    startTimer(twoMinutes, display);
});


});

};

function answerClick() {
  for (var i = 1; i <= 14; i++) {
    var radios = document.getElementsByName('group'+i);
    for (var j = 0; j < radios.length; j++) {
      var radio = radios[j];
      if(radio.value == "correctAnswer" && radio.checked) {
        correctAnswers++;
      } else if(radio.value =="wrongAnswer" && radio.checked) {
        wrongAnswers++;
      }
    }
  }
  $("#submit-button").click(function() {
    $("h3, .answer-box").toggle().css("display", "none");
    $("h2").toggle().css("display", "none");
    $("#submit-button").toggle().css("display", "none");
    $(".score").toggle().css({"display": "flex", "margin-top": "550px"});
    $(".correct").html("Correct: " + correctAnswers);
    $(".incorrect").html("Incorrect: " + wrongAnswers);
    $(".trivia-box").css("height", "500px");
    $("html, body").animate({ scrollTop: 0 }, "fast");
    clearInterval(intervalID);
  })
}
answerClick();

firstScreen();







