$(document).ready(function() {
  if ($.browser.android) {
    $(".button__icon").addClass("icon-android");
    // $("a").attr("href", "")
  }
  else if ($.browser.iphone || $.browser.ipad) {
    $(".button__icon").addClass("icon-apple");
  }
  else if ($.browser.mac) {
    $(".button__icon").addClass("icon-apple");
  }
  else if ($.browser.win) {
    $(".button__icon").addClass("icon-windows");
  }
  else if (browser["windows phone"]) {
    $(".button__icon").addClass("icon-windows");
  }

  $("#download-button").click(function(e) {
    e.preventDefault();
  });

  $(".feature-list__feature").on("click", function() {
    var feature = $(this).data("id");
    $(".feature-list__feature").removeClass("active");
    $(".phone__screen").removeClass("active");
    $(this).addClass("active");
    $('.phone__screen[data-id=' + feature + ']').addClass('active');
  });
});