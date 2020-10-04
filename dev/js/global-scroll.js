import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//animating global caption
const captionAnimTL = gsap.timeline();
captionAnimTL
.from(".caption", {
    duration: 0.5,
    xPercent: -20,
    alpha: 0
})

export function captionAnimation(){

    ScrollTrigger.create({
        animation:captionAnimTL,
        toggleActions: "restart none none none",
        trigger: ".caption",
        start: "top 80%",
        markers: true,
        id: "caption"
    });
}