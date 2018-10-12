$(document).ready(function() {
  $("button#light-theme").click(function() {
    $("body").addClass("light-theme");
    $(".jumbotron").removeClass("header");
    $(".jumbotron").addClass("light-theme-header");
    $(".container").removeClass("text");
    $(".container").addClass("light-text");
  });

  $("button#dark-theme").click(function() {
    $("body").removeClass("light-theme");
    $(".jumbotron").addClass("header");
    $(".jumbotron").removeClass("light-theme-header");
    $(".container").addClass("text");
    $(".container").removeClass("light-text");
  });
});
