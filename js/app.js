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
  else if ($.browser.linux) {
    $(".button__icon").addClass("icon-linux");
  }

  $("#download-button").click(function(e) {
    //e.preventDefault();
  });

  var i = 2;

  if ($(window).width() > 1020) {
    var timer = setInterval(function() {
      $(".feature-list__feature").removeClass("active");
      $(".phone__screen").removeClass("active");
      $('.line').attr('class', 'line');
      $('.feature-list__feature[data-id=' + i + ']').addClass('active');
      $('.phone__screen[data-id=' + i + ']').addClass('active');
      $('#line-' + i).attr('class', 'line active');
  
      if (i > 2) {
        i = 1;
      } else {
        i++;
      }
    }, 4000);  
  }


  $(".feature-list__feature").on("click", function() {
    var feature = $(this).data("id");
    $(".feature-list__feature").removeClass("active");
    $(".phone__screen").removeClass("active");
    $('.line').attr('class', 'line');
    $(this).addClass("active");
    $('.phone__screen[data-id=' + feature + ']').addClass('active');
    $('#line-' + feature).attr('class', 'line active');

    clearInterval(timer);
  });
});