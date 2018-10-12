$(document).ready(function() {
  $("button#light-theme").click(function() {
    $("body").addClass("light-theme");
    $(".jumbotron").removeClass("header");
    $(".jumbotron").addClass("light-theme-header");
    $(".container").removeClass("text");
    $(".container").addClass("light-text");
    $(".nav").removeClass("nav-tabs-regular");
    $(".nav").addClass("nav-tabs-light");
  });

  $("button#dark-theme").click(function() {
    $("body").removeClass("light-theme");
    $(".jumbotron").addClass("header");
    $(".jumbotron").removeClass("light-theme-header");
    $(".container").addClass("text");
    $(".container").removeClass("light-text");$(".nav").addClass("nav-tabs-regular");
    $(".nav").removeClass("nav-tabs-light");
  });
});
