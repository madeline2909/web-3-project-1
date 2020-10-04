import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//text animation
const contactAnimTL = gsap.timeline();
contactAnimTL
.from("#recom-title-animation", {
    xPercent: 100,
    alpha: 0
})
.from("#recom-animation", {
    duration: 0.5,
    yPercent: 10,
    alpha: 0
})
.from(".recom-2-animation", {
    duration: 0.5,
    yPercent: 10,
    alpha: 0,
    stagger: 0.15
});

export function contactAnimation(){

    ScrollTrigger.create({
        //markers: true,
        animation: contactAnimTL,
        toggleActions: "restart none none none",
        scrub: 1,
        end:"bottom 60%",
        trigger: ".scroll-animation"
    });
}

//map pinning
export function contactPinning(){
    ScrollTrigger.create({
        trigger: "#map-container",
        id: "map pinning",
        pin: true,
        pinSpacing: false,
        //markers: true,
        start: "top 0",
        toggleActions: "restart none none none"
    });
}