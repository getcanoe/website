$(document).ready(function() {
  if ($.browser.android) {
    $('.android-download-link').show();
  }
  else if ($.browser.iphone || $.browser.ipad) {
    $('.ios-download-link').show();
  }
  else {
    $('.android-download-link').show();
    $('.ios-download-link').show();
  }

  $(".feature-list__feature").on("click", function() {
    var feature = $(this).data("id");
    var src = "assets/img/home/screens/screen-" + feature + ".jpg";
    console.log(feature);
    console.log(src);
    $("#phone-screen").attr("src", src);
    $(".feature-list__feature").removeClass("active");
    $(this).addClass("active");
  });
});