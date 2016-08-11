$(document).ready(function() {
  $("a").click(function(event){
    event.preventDefault();
    var clickedId = $(this).attr("id");
    if(clickedId === "snake"){
      $("#snakeInfo").toggle();
      $("#turtleInfo").hide();
      $("#bugInfo").hide();
      $("#bugCol").toggle();
      $("#turtleCol").toggle();
      $("#snakeCol").toggleClass("col-md-4");
      $(this).children().toggleClass("bigImg");
    } else if (clickedId === "turtle") {
      $("#turtleInfo").toggle();
      $("#snakeInfo").hide();
      $("#bugInfo").hide();
      $("#bugCol").toggle();
      $("#snakeCol").toggle();
      $("#turtleCol").toggleClass("col-md-4");
      $(this).children().toggleClass("bigImg");
    } else {
      $("#bugInfo").toggle();
      $("#turtleInfo").hide();
      $("#snakeInfo").hide();
      $("#turtleCol").toggle();
      $("#snakeCol").toggle();
      $("#bugCol").toggleClass("col-md-4");
      $(this).children().toggleClass("bigImg");
    }
  });
});
