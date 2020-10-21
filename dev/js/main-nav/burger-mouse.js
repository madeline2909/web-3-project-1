import $ from "jquery";
import {gsap} from "gsap";

import {burgerAnimationTimeline} from "./burger-animation.js";
import {hideShowMainNav} from "./nav-global.js";
import {canYouSeeTheMenu} from "./nav-global.js";


export function burgerClick(){
    $("#burger").on("click", hideShowMainNav);
}

//burger mouse event
gsap.set("#arrow-up-left", {
    transformOrigin: "right center",
    alpha: 0
});
gsap.set("#arrow-up-right", {
    transformOrigin: "right center",
    alpha: 0
});


export function mouseEvent(){
    $("#burger").on("mouseenter", function () {
        //console.log("mouse enter");
        if (canYouSeeTheMenu === false) {
            burgerAnimationTimeline.play("burgerToDownArrow");
        } else {
            burgerAnimationTimeline.play("XToUpArrow");
        }
    });
    $("#burger").on("mouseleave", function () {
        //console.log("mouse leave");
        if (canYouSeeTheMenu === false) {
            burgerAnimationTimeline.reverse("burgerToDownArrowReverse");
        } else {
            burgerAnimationTimeline.reverse("XToUpArrowReverse");
        }
    });
}