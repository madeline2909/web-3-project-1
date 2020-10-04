import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//footer
gsap.set("#email", {
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
        width: 0
    }, "email-animation")
    .from("#email-btn", {
        duration: 0.25,
        alpha: 0,
        width: 0
    }, "email-animation");
export function footerAnimation(){
    ScrollTrigger.create({
        trigger: "footer",
        start: "-30% bottom",
        animation: logoTimeline,
        toggleActions: "restart pause reverse none",
        // scrub: 1,
        // markers: true,
        id: "logo"
    });
}