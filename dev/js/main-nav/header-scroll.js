import $ from "jquery";
import {gsap} from "gsap";

import {canYouSeeTheMenu} from "./nav-global.js";
import jquery from "jquery";

var headerHeight = $("header").outerHeight();
//move the header off screen on the Y axis
gsap.set("header", {
    y: -headerHeight
})


var headerTimeline = gsap.timeline()
headerTimeline.to("header", {
    duration: 0.4,
    y: 0
})

export function headerScroll() {
    //scrolling up top makes header bgc fade out
    $(window).scroll(function () {
        if (canYouSeeTheMenu === false) {
            var CurrentScroll = 200;
            var NextScroll = $(this).scrollTop();
            var scroll = $(window).scrollTop();
            var position = jquery(window).scrollTop();

            if (scroll > 0) {
                $('header').fadeIn('slow').css("backgroundColor", "rgba(255, 255, 255, 0.7)");
                //   gsap.to("header",{duration:0.25,backgroundColor: "255, 255, 255, 0.7"});
            }

            if (scroll <= 0) {
                // gsap.to("header",{duration:0.25,backgroundColor: "255, 255, 255, 0"});
                $('header').fadeIn('slow').css("backgroundColor", "unset");
            }

            if (position >= 250 && NextScroll >= CurrentScroll) {
                //write the codes related to down-ward scrolling here
                headerTimeline.reverse();
            } else {
                //write the codes related to upward-scrolling here
                //console.log("scrolling up");
                headerTimeline.play();
            }

            CurrentScroll = NextScroll; //Updates current scroll position
        }

    });
}
