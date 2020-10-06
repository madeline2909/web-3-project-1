import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//footer
gsap.set("#email-input", {
    transformOrigin: "right center"
})
gsap.set("#email-btn", {
    transformOrigin: "left center"
});

const logoTimeline = gsap.timeline();
logoTimeline.from(".footer-logo", {
        alpha: 0,
        yPercent: 100,
        rotation: 180,
        stagger: 0.25
    })
    .from("#email-input", {
        duration: 0.25,
        alpha: 0,
        scaleX: 0
    }, "email-animation")
    .from("#email-btn", {
        duration: 0.25,
        alpha: 0
    }, "email-animation");
export function footerAnimation(){
    ScrollTrigger.create({
        trigger: "footer",
        animation: logoTimeline,
        toggleActions: "restart pause reverse none",
        // scrub: 1,
        //markers: true,
        id: "logo"
    });
}