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
});