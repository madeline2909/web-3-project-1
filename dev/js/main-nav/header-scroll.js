var headerHeight = $("header").outerHeight();
//move the header off screen on the Y axis
gsap.set("header",{y:-headerHeight})


var headerTimeline = gsap.timeline({paused:false})
headerTimeline.to("header",{duration:0.4,y:0})

//scrolling down makes to header to slide up and down
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
      $('header').css("backgroundColor","rgba(255, 255, 255, 0.7)");
    }

    if (canYouSeeTheMenu === true) {
        $('header').css("backgroundColor","unset");
    } 

    if (scroll <= 0) {
        $('header').css("backgroundColor","unset");
    } 

});

$(function(){

    var CurrentScroll = 0;
    $(window).scroll(function(event){
  
        var NextScroll = $(this).scrollTop();
  
        if (NextScroll > CurrentScroll){
           //write the codes related to down-ward scrolling here
           headerTimeline.reverse();
        }
        else {
           //write the codes related to upward-scrolling here
           headerTimeline.play();
        }
  
        CurrentScroll = NextScroll;  //Updates current scroll position
    });
  });