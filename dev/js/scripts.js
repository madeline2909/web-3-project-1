// import * as fancybox from './fancyBox.js';
// import * as tinyslider from './tinyslider.js';

//import $ from "jquery";

//Scroll Trigger stuffs
import {titleAnimation} from "./global-scroll.js";
import {captionAnimation} from "./global-scroll.js";
import {footerAnimation} from "./sections/footer-scroll.js";
import {indexTitleAnimation} from "./sections/index-scroll.js";
//import {indexTextAnimation} from "./sections/index-scroll.js";
import {galleryAnimation} from "./sections/gallery-scroll.js";
import {galleryPinning} from "./sections/gallery-scroll.js";
import {contactAnimation} from "./sections/contact-scroll.js";
import {contactPinning} from "./sections/contact-scroll.js";

//import {hideShowMainNav} from "./main-nav/nav-global.js";

//calling the scrolltrigger functions
titleAnimation();
captionAnimation();
footerAnimation();
indexTitleAnimation();
//indexTextAnimation();
contactAnimation();
contactPinning();
galleryAnimation();
galleryPinning();

//console.log($);

//$("#burger").on("click", hideShowMainNav);

 
