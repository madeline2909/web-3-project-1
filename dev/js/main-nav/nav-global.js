//can you see the menu?
var canYouSeeTheMenu = false;

var navHeight = $("#main-nav").outerHeight();
//move the nav off screen on the Y axis
gsap.set("#main-nav",{y:-navHeight})


var mainNavTimeline = gsap.timeline({pause:true});
mainNavTimeline.to("#main-nav",{duration:0.5,y:0})

// function to handle the showing and hiding of the main-nav
function hideShowMainNav(){
    console.log("hide or show nav");
    //toggles the css display property
    //$("#main-nav").toggle();

    if(canYouSeeTheMenu === false){
        console.log("show me the menu");
        //reset it back to true so menu will go away
        canYouSeeTheMenu = true;
        //start the burger animation
        animateBurger();
        //play the main nav animation into view; pull it down
        mainNavTimeline.play();
    }else{
        console.log("hide the menu");
        //reset it back to false so menu will be back
        canYouSeeTheMenu = false;
        //turn the x into burger
        animateBurger();
        //reverse the animation of main nav out of view; push it up
        mainNavTimeline.reverse();
    }
}