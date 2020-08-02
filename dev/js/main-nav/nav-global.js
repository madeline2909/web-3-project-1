//can you see the menu?
var canYouSeeTheMenu = false;

var navHeight = $("#main-nav").outerHeight();
//move the nav off screen on the Y axis
gsap.set("#main-nav",{y:-navHeight})


var mainNavTimeline = gsap.timeline({paused:true})
mainNavTimeline.to("#main-nav",{duration:0.5,y:0})

//$("#main-nav").height();
//console.log($("#main-nav").height() + " is the height of the #main-nav");
//console.log($("#main-nav").outerHeight() + " is the outer height of the #main-nav");

// function to handle the showing and hiding of the main-nav
function hideShowMainNav(){
    //console.log("hide or show nav");
    //toggles the css display property
    //$("#main-nav").toggle();

    if(canYouSeeTheMenu === false){
        //console.log("show me the menu");
        //reset it back to true so menu will go away
        canYouSeeTheMenu = true;

        // console.log(burgerToArrowTimeline.progress() + "0 is the progress for the gsap timeline, anything larger than 0 means it has played");

        // alert(burgerToArrowTimeline.progress() + "0 is the progress for the gsap timeline, anything larger than 0 means it has played");

        if(burgerToArrowTimeline.progress() > 0){
            //turn the burger into an X
           // alert("dekstop animation");
            animateBurger();
        }else{
            //alert("mobile animation");
            mobileburgerAnimation();
        }
        
        //play the main nav animation into view; pull it down
        mainNavTimeline.play();
        $('header').css("backgroundColor","unset");
    }else{
        // console.log("hide the menu");
        //reset it back to false so menu will be back
        canYouSeeTheMenu = false;

        if(burgerToArrowTimeline.progress()>0){
            //start the burger animation
            animateBurger();
        }else{
            // alert("mobile animation");
            mobileburgerAnimation();    
        }

        //reverse the animation of main nav out of view; push it up
        mainNavTimeline.reverse();
    }
}

var menuBackground = document.querySelector("#main-nav");
window.onclick = function(event){
    if(event.target == menuBackground){
        hideShowMainNav();
    }
}