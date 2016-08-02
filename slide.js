$('#silde1').prepend('<img id="img1" src="pic1.jpeg" style="width:100%"/>');
// $('#text1').html('<p>Caption Text1</p>');
$('#silde2').prepend('<img id="img2" src="pic2.jpeg" style="width:100%"/>');
// $('#text2').html('<p>Caption Text2</p>');
$('#silde3').prepend('<img id="img3" src="pic3.jpeg" style="width:100%"/>');
// $('#text3').html('<p>Caption Text3</p>');
$('#silde4').prepend('<img id="img4" src="pic4.jpeg" style="width:100%"/>');
// $('#text4').html('<p>Caption Text4</p>');
$('#silde5').prepend('<img id="img5" src="pic5.jpeg" style="width:100%"/>');
// $('#text5').html('<p>Caption Text5</p>');


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// $(document).ready(function () {
  // alert('am ready');
  var slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) {
  var i;
  var slides = $(".mySlides");
  var dots = $(".dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// })

 //------scott

 // $(document).ready(function () {
 //    $('.prev').click(function () {
 //      var activeImage = $('.active')
 //      var nextImage = activeImage.prev()

 //      activeImage.removeClass('active')
 //      nextImage.addClass('active')
 //    })
 //    $('.next').click(function () {
 //      var activeImage = $('.active')
 //      var nextImage = activeImage.next()

 //      activeImage.removeClass('active')
 //      nextImage.addClass('active')
 //      // body...
 //    })
 // })


