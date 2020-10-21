// import * as fancybox from './fancyBox.js';
// import * as tinyslider from './tinyslider.js';


//Scroll Trigger stuffs
import {titleAnimation} from "./global-scroll.js";
import {captionAnimation} from "./global-scroll.js";
import {footerAnimation} from "./sections/footer-scroll.js";
import {indexTitleAnimation} from "./sections/index-scroll.js";
import {galleryAnimation} from "./sections/gallery-scroll.js";
import {galleryPinning} from "./sections/gallery-scroll.js";
import {contactAnimation} from "./sections/contact-scroll.js";
import {contactPinning} from "./sections/contact-scroll.js";

//jquery
import {mouseEvent} from "./main-nav/burger-mouse.js";
import {burgerClick} from "./main-nav/burger-mouse.js";
import {navClick} from "./main-nav/main-nav-click.js";
import {reportWindowSize} from "./main-nav/nav-global.js";
import {menuBgSelect} from "./main-nav/nav-global.js";
import {headerScroll} from "./main-nav/header-scroll.js";

//fancybox and tinyslider
import {tinySlider} from "./tinyslider.js";
import {fancyBox} from "./fancyBox.js";


//calling the scrolltrigger functions
titleAnimation();
captionAnimation();
footerAnimation();
indexTitleAnimation();
contactAnimation();
contactPinning();
galleryAnimation();
galleryPinning();

mouseEvent();
burgerClick();
navClick();
reportWindowSize();
menuBgSelect();
headerScroll(); 

tinySlider();
fancyBox();