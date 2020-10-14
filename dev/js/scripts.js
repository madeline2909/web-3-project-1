// import * as fancybox from './fancyBox.js';
// import * as tinyslider from './tinyslider.js';
// import {gsap} from "gsap";
// import $ from "jquery";

//Scroll Trigger stuffs
import {titleAnimation} from "./global-scroll.js";
import {captionAnimation} from "./global-scroll.js";
import {footerAnimation} from "./sections/footer-scroll.js";
import {indexTitleAnimation} from "./sections/index-scroll.js";
import {galleryAnimation} from "./sections/gallery-scroll.js";
import {galleryPinning} from "./sections/gallery-scroll.js";
import {contactAnimation} from "./sections/contact-scroll.js";
import {contactPinning} from "./sections/contact-scroll.js";

// import {hideShowMainNav} from "./main-nav/nav-global.js";
// import {burgerAnimationTimeline} from "./main-nav/burger-animation.js";
// import {canYouSeeTheMenu} from "./main-nav/nav-global.js";

//calling the scrolltrigger functions
titleAnimation();
captionAnimation();
footerAnimation();
indexTitleAnimation();
contactAnimation();
contactPinning();
galleryAnimation();
galleryPinning();

//console.log($);

// $("#burger").on("click", hideShowMainNav);

// //burger mouse event
// gsap.set("#arrow-up-left", {
//     transformOrigin: "right center",
//     alpha: 0
// });
// gsap.set("#arrow-up-right", {
//     transformOrigin: "right center",
//     alpha: 0
// });

// $("#burger").on("mouseenter", function () {
//     // console.log("mouse enter");
//     if (canYouSeeTheMenu === false) {
//         burgerAnimationTimeline.play("burgerToDownArrow");
//     } else {
//         burgerAnimationTimeline.play("XToUpArrow");
//     }
// });
// $("#burger").on("mouseleave", function () {
//     console.log("mouse leave");
//     if (canYouSeeTheMenu === false) {
//         burgerAnimationTimeline.reverse("burgerToDownArrowReverse");
//     } else {
//         burgerAnimationTimeline.reverse("XToUpArrowReverse");
//     }
// });

 
