import {gsap} from "gsap";
import $ from "jquery";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

var scrollItems = ["#home-culture", "#home-art"];

export function scrollIndex() {
    // gsap.to(window, {duration: 1, scrollTo:{y: scrollItems[$('#main-nav li button').index(this)], offsetY:40}});
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: scrollItems[$('#main-nav li button').index(this)]
        }
    });
}