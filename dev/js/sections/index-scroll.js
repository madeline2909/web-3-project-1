import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//HOME section-titles slide from top
export function indexTitleAnimation(){
    ScrollTrigger.matchMedia({

        // desktop
        "(min-width: 800px)": function () {
            var introTimeline = gsap.timeline();
            introTimeline.from("#img1", {
                    yPercent: -10
                })
                .from("#intro", {
                    yPercent: -100,
                    alpha: 0
                })

            ScrollTrigger.create({
                trigger: "#home-intro-img",
                id: "intro",
                // markers: true,
                start: "-30 top",
                end: "200 100",
                scrub: 1,
                toggleActions: "restart reverse restart none",
                animation: introTimeline
            })

            var cultureTimeline = gsap.timeline();
            cultureTimeline.from("#culture", {
                xPercent: 100,
                alpha: 0
            })
            ScrollTrigger.create({
                trigger: "#home-culture",
                id: "culture",
                // markers: true,
                start: "-150 top",
                end: "150 bottom",
                scrub: 1,
                toggleActions: "restart none none none",
                animation: cultureTimeline
            })

            var artTimeline = gsap.timeline();
            artTimeline.from("#art", {
                xPercent: -100,
                alpha: 0
            })
            ScrollTrigger.create({
                trigger: "#home-art",
                id: "art",
                // markers: true,
                start: "-200 top",
                end: "top bottom",
                scrub: 1,
                toggleActions: "restart none none none",
                animation: artTimeline
            })
        },



        // mobile
        "(max-width: 799px)": function () {
            var introTimeline = gsap.timeline();
            introTimeline
                .from("#intro", {
                    yPercent: -100,
                    alpha: 0
                })

            ScrollTrigger.create({
                trigger: "#home-intro-img",
                start: "-30 top",
                end: "200 100",
                scrub: 1,
                toggleActions: "restart reverse restart none",
                animation: introTimeline
            })
            
            var cultureTimeline = gsap.timeline();
            cultureTimeline.from("#culture", {
                xPercent: 100,
                alpha: 0
            })
            ScrollTrigger.create({
                trigger: "#home-culture",
                id: "culture",
                // markers: true,
                start: "-200 top",
                end: "-200 bottom",
                scrub: 1,
                toggleActions: "restart none none none",
                animation: cultureTimeline
            })

            var artTimeline = gsap.timeline();
            artTimeline.from("#art", {
                xPercent: -100,
                alpha: 0
            })
            ScrollTrigger.create({
                trigger: "#home-art",
                id: "art",
                // markers: true,
                start: "-200 top",
                end: "top bottom",
                scrub: 1,
                toggleActions: "restart none none none",
                animation: artTimeline
            })
        }
    });
}

//paragraphs animation HOME
// export function indexTextAnimation(){
//     gsap.from(".index-caption", {
//         duration: 0.5,
//         yPercent: 10,
//         alpha: 0,
//         scrollTrigger: {
//             //scrub:true,
//             toggleActions: "restart reverse restart reverse",
//             trigger: "#home-intro-p",
//             start: "top 70%",
//             //markers: true,
//             id: "index caption"
//         }
//     })

//     gsap.from("#home-culture-anim", {
//         duration: 0.5,
//         yPercent: 10,
//         alpha: 0,
//         scrollTrigger: {
//             //scrub:true,
//             toggleActions: "restart reverse restart reverse",
//             trigger: "#home-culture-para",
//             start: "top 70%",
//             //markers: true,
//             id: "culture"
//         }
//     })

//     gsap.from("#home-art-anim", {
//         duration: 0.5,
//         yPercent: 10,
//         alpha: 0,
//         scrollTrigger: {
//             //scrub:true,
//             toggleActions: "restart reverse restart reverse",
//             trigger: "#home-art",
//             start: "top 70%",
//             //markers: true,
//             id: "culture"
//         }
//     })
// }

// const indexTextAnimTL = gsap.timeline();
// indexTextAnimTL
// .from(".index-caption", {
//     duration: 0.5,
//     yPercent: 10,
//     alpha: 0
// });

// export function indexTextAnimation(){

//     ScrollTrigger.create({
//         //markers: true,
//         animation: indexTextAnimTL,
//         toggleActions: "restart reverse restart reverse",
//         trigger: ".scroll-animation",
//         start: "top 70%",
//         scrub:1,
//         id: "index caption"
//     });
// }
