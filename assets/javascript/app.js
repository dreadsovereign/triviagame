var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered= 0;

function firstScreen() {
  $("#start").click(function() {
    $("h3, .answer-box").toggle().css("display", "flex");
    $("#start").toggle().css("display", "none");
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

        } else if (timer == 0) {
          alert("You ran out of time!");
          $(".score").toggle().css("display", "flex");
          $("h3, .answer-box").toggle().css("display", "none");
          $("#submit-button").toggle().css("display", "none");
          clearInterval(intervalID);
        }
      console.log(timer);
    }, 1000);
}

jQuery(function ($) {
    var twoMinutes = 60 * 2,
        display = $('#time');
    startTimer(twoMinutes, display);
});
  
  

});



};

firstScreen();




