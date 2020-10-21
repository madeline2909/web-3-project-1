import $ from "jquery";
import {
    scrollIndex
} from "./nav-scroll.js";
import {
    hideShowMainNav
} from "./nav-global.js";

export function navClick() {
    //adding a listener the two buttons that will call a function that is defined in the nav-global js file
    $("#main-nav li button").on("click", hideShowMainNav);

    //add event listener for the scroll plugin
    $("#main-nav li button").on("click", scrollIndex);
}



// $("#culture-btn").on("click", scrollCulture);
// $("#art-btn").on("click", scrollArt);