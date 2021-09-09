$(document).ready(function () {
  $("#comment").click(function () {
    var input = $("#input").val();
    $(".comments-area").append(`<li>${input}</li>` + "<br>");
    $("#input").val("");
    // $(".comments-box").slideDown();
  });

  $("#cancel").click(function () {
    $("#input").val("");
  });

  $("#delete").click(function () {
    $(".comments-area").text("");
    // $(".comments-box").slideUp();
  });
});
