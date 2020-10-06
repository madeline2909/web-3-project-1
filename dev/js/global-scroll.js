import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//animating global caption
const captionAnimTL = gsap.timeline({paused:true});
captionAnimTL
.from(".caption", {
    duration: 0.5,
    xPercent: -20,
    alpha: 0
})

export function captionAnimation(){

    ScrollTrigger.create({
        animation: captionAnimTL,
        toggleActions: "play none none none",
        trigger: ".caption",
        start: "top 80%",
        //markers: true,
        id: "caption"
    });
}

//page titles animation
const titleAnimTL = gsap.timeline({paused:true});
titleAnimTL
.from(".page-title", {
    yPercent: -100,
    alpha: 0,
    duration:0.5
})

export function titleAnimation(){

    ScrollTrigger.create({
        animation:titleAnimTL,
        trigger: ".hero-container",
        id: "page title",
        //markers: true,
        toggleActions: "play none none none"
    });
}