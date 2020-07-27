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