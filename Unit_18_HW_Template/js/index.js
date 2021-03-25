/* My Resume Button*/

$(".firstButton").hover(function(){
  $(".firstButton").css("text-decoration", "underline");
},

function(){
  $(".firstButton").css("text-decoration", "none")
});

/* My Resume Button*/

$(".secondButton").hover(function(){
  $(".secondButton").css("text-decoration", "underline");
},

function(){
  $(".secondButton").css("text-decoration", "none")
});

/* My Resume Button*/
$(".thirdButton").hover(function(){
  $(".thirdButton").css("text-decoration", "underline");
},

function(){
  $(".thirdButton").css("text-decoration", "none")
});


/* My Resume Button*/
$(".fourthButton").hover(function(){
  $(".fourthButton").css("text-decoration", "underline");
},

function(){
  $(".fourthButton").css("text-decoration", "none")
});


/* Work Nav hover*/
$(".workNav").hover(function(){
  $(".workNav").css("text-decoration", "underline");
},

function(){
  $(".workNav").css("text-decoration", "none")
});

/* Skills Nav Hover*/
$(".skillsNav").hover(function(){
  $(".skillsNav").css("text-decoration", "underline");
},

function(){
  $(".skillsNav").css("text-decoration", "none")
});

/* About Nav Hover*/
$(".aboutNav").hover(function(){
  $(".aboutNav").css("text-decoration", "underline");
},

function(){
  $(".aboutNav").css("text-decoration", "none")
});

/* Contact Nav Hover*/
$(".contactNav").hover(function(){
  $(".contactNav").css("text-decoration", "underline");
},

function(){
  $(".contactNav").css("text-decoration", "none")
});







/* Work Nav hover*/
$(".workFooter").hover(function(){
  $(".workFooter").css("text-decoration", "underline");
},

function(){
  $(".workFooter").css("text-decoration", "none")
});

/* Skills Nav Hover*/
$(".skillsFooter").hover(function(){
  $(".skillsFooter").css("text-decoration", "underline");
},

function(){
  $(".skillsFooter").css("text-decoration", "none")
});

/* About Nav Hover*/
$(".aboutFooter").hover(function(){
  $(".aboutFooter").css("text-decoration", "underline");
},

function(){
  $(".aboutFooter").css("text-decoration", "none")
});

/* Contact Nav Hover*/
$(".contactFooter").hover(function(){
  $(".contactFooter").css("text-decoration", "underline");
},

function(){
  $(".contactFooter").css("text-decoration", "none")
});

/*Smooth scrolling*/

/*$(function() {
  $('a[href*="#"]:not([href= "#"])').click(function(){
    if (location.pathname.replace(/^\//, ''))




  }
  
  
  
  )






}



)
*/


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });