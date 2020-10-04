import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//gallery pinning
gsap.to("#g5", {
    ease: "none",
    scrollTrigger: {
        trigger: "#g5",
        id: "gallery pinning",
        pin: true,
        pinSpacing: false,
        //markers: true,
        start: "top 0",
        toggleActions: "restart none none reverse"
    }
})

//animating gallery caption
gsap.from("#caption-container", {
    duration: 0.5,
    yPercent: 10,
    alpha: 0,
    scrollTrigger: {
        toggleActions: "restart none none reverse",
        trigger: "#caption-container",
        start: "top 70%",
        //markers: true,
        id: "gallery caption"
    }
})