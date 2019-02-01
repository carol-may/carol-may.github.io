$(document).on('click', 'a[href^="#"]', function (event) {
  var tabIds = ["#tab1", "#tab2", "#tab3", "#tab4"];
  if (tabIds.indexOf($.attr(this, 'href')) != -1) {
    return;
  }
  event.preventDefault();
  try {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  } catch(err) {}
});

function scrollToTop() {
  $('html,body').animate({ scrollTop: 0 }, 'slow');
}
