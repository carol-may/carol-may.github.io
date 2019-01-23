var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function upload_image() {
  var upload_field = document.getElementById("picture");
  upload_field.form.action = 'misc_html/upload_picture.php';
  upload_field.form.target = 'upload_iframe';
  upload_field.form.submit();
  upload_field.form.action = '';
  upload_field.form.target = '';
  return true;
}

function refresh_gallery() {
  $( "#image_delete_response" ).html("");
  $.get( "misc_html/refresh_gallery.php", function( data ) {
    $( "#slides" ).html(data);
    showSlides(slideIndex);
  });
}

function delete_image() {
  $( "#image_delete_response" ).html("");

  var posting = $.post( "misc_html/delete_image_from_gallery.php", {
    index: slideIndex
  });

  posting.done(function( data ) {
    if (data == "0") {
      $( "#image_delete_response" ).html("<center><h6>Error deleting image</h6></center>");
    } else {
      $( "#image_delete_response" ).html("<center><h6>Image successfully deleted</h6></center>");
    }
  });
}
