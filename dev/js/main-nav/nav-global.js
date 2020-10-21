import {gsap} from "gsap";
import $ from "jquery";
import {burgerAnimationTimeline} from "./burger-animation.js";

//can you see the menu?
export var canYouSeeTheMenu = false;

var navHeight = $("#main-nav").outerHeight();
//move the nav off screen on the Y axis
gsap.set("#main-nav", {
    y: -navHeight
})


export const mainNavTimeline = gsap.timeline({
    paused: true
})
mainNavTimeline.to("#main-nav", {
    duration: 0.5,
    y: 0
})

export function hideShowMainNav() {
    console.log("hide or show nav");
    //toggles the css display property

    if (canYouSeeTheMenu === false) {
        //console.log("show me the menu");
        //reset it back to true so menu will go away

        burgerAnimationTimeline.play("downArrowToX");

        //play the main nav animation into view; pull it down
        mainNavTimeline.play();
        canYouSeeTheMenu = true;
        $('header').css("backgroundColor", "unset");
    } else {
        // console.log("hide the menu");
        //reset it back to false so menu will be back
        burgerAnimationTimeline.play("upArrowToBurger");

        //reverse the animation of main nav out of view; push it up
        mainNavTimeline.reverse();
        canYouSeeTheMenu = false;
    }
}

var menuBackground = document.querySelector("#main-nav");
export function menuBgSelect() {
    window.onclick = function (event) {
    if (event.target == menuBackground) {
        hideShowMainNav();
    }
    }
}

export function reportWindowSize() {
    //console.log("test");
    if (canYouSeeTheMenu === false) {
        //console.log("can't see the main nav");
        console.log($("#main-nav").outerHeight());
        navHeight = $("#main-nav").outerHeight();
        gsap.set("#main-nav", {
            y: -navHeight
        });
    }
    // add a listener to the window for everytime it's resized
    window.addEventListener('resize', reportWindowSize);
}

