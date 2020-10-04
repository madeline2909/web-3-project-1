import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//gallery pinning
export function galleryPinning(){

    ScrollTrigger.create({
        trigger: "#g5",
        id: "gallery pinning",
        pin: true,
        pinSpacing: false,
        //markers: true,
        start: "top 0",
        toggleActions: "restart none none reverse"
    });
}

//animating gallery caption
const galleryAnimTL = gsap.timeline();
galleryAnimTL
.from("#gallery-caption-container", {
    duration: 0.5,
    yPercent: 10,
    alpha: 0
})

export function galleryAnimation(){

    ScrollTrigger.create({
        animation:galleryAnimTL,
        toggleActions: "restart none none none",
        trigger: "#gallery-caption-container",
        start: "top 70%",
        //markers: true,
        id: "gallery caption"
    });
}
