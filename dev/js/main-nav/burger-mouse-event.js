import {gsap} from "gsap";
import {burgerAnimationTimeline} from "./main-nav/burger-animation.js";
import {canYouSeeTheMenu} from "./main-nav/nav-global.js";

gsap.set("#arrow-up-left", {
    transformOrigin: "right center",
    alpha: 0
});
gsap.set("#arrow-up-right", {
    transformOrigin: "right center",
    alpha: 0
});


$("#burger").on("mouseenter", function () {
    // console.log("mouse enter");
    if (canYouSeeTheMenu === false) {
        burgerAnimationTimeline.play("burgerToDownArrow");
    } else {
        burgerAnimationTimeline.play("XToUpArrow");
    }
});
$("#burger").on("mouseleave", function () {
    console.log("mouse leave");
    if (canYouSeeTheMenu === false) {
        burgerAnimationTimeline.reverse("burgerToDownArrowReverse");
    } else {
        burgerAnimationTimeline.reverse("XToUpArrowReverse");
    }
});