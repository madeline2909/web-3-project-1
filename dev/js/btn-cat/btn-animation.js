import {
    gsap
} from "gsap";


var btnShadeSpeed = 0.5;
var catSpeed = 0.5;

gsap.set("#shade", {
    transformOrigin: "center center"
})
gsap.set("#button", {
    transformOrigin: "center center"
})
gsap.set(".btn-text", {
    y:8,
    fill: "#fff"
})
gsap.set("#cat-tail", {
    x:150
})
gsap.set("#cat-head", {
    y:350
})
gsap.set("#cat-body", {
    y:300
})

// gsap call / what do you want to animate / how long should it animate / what should change?
export const catBtnTL = gsap.timeline({paused:true});
catBtnTL.from("#shade", {
    duration: btnShadeSpeed,
    x: -1200
}, "btn animation")
.to("#button", {
    duration: btnShadeSpeed,
    scale: 1.15
}, "btn animation")
.to(".btn-text", {
    y:-8,
    fill: "#EF87A3",
    stagger: .03
}, "btn animation")
.to("#cat-head", {
    duration: catSpeed,
    y:22
}, "btn animation")
.to("#cat-tail", {
    duration: catSpeed,
    x:-60
}, "btn animation")
.to("#cat-body", {
    duration: catSpeed,
    y:0
}, "btn animation")
;

// export function catBtnAnimation() {
//     return catBtnTL;
// }