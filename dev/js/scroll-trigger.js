gsap.registerPlugin(ScrollTrigger);

//each page's captions slide from the left
gsap.from(".caption", {
    xPercent: -100,
    alpha:0,
    // backgroundColor: "#124559",
    scrollTrigger: {
        trigger: ".caption",
        id: "description",
        // markers: true,
        start: "top bottom",
        end:"bottom bottom",
        scrub: 1,
        toggleActions: "restart reverse restart reverse"
    }
})

//section-titles slide from top

var introTimeline = gsap.timeline();
introTimeline.from("#img1",{
    yPercent: -10
})
.from("#intro",{
    yPercent: -100,
    alpha:0
})

ScrollTrigger.create({
    trigger: "#home-intro-img",
    id: "intro",
    markers: true,
    start: "-30 top",
    end:"200 100",
    scrub: 1,
    toggleActions: "restart reverse restart none",
    animation: introTimeline
    }
)

gsap.from("#culture", {
    xPercent: 100,
    alpha:0,
    scrollTrigger: {
        trigger: "#home-culture",
        id: "culture",
        // markers: true,
        start: "-150 top",
        end:"150 bottom",
        scrub: 1,
        toggleActions: "restart none none none"
    }
})
gsap.from("#art", {
    xPercent: -100,
    alpha:0,
    scrollTrigger: {
        trigger: "#home-art",
        id: "art",
        // markers: true,
        start: "-200 top",
        end:"top bottom",
        scrub: 1,
        toggleActions: "restart none none none"
    }
})

//art-img section being pinned
// var artIMGTimeline = gsap.timeline();
// artIMGTimeline.from("#home-art", {
//     backgroundImage: -100
// })

// ScrollTrigger.create({
//     trigger: "#home-art",
//     id: "hero",
//     start: "top top",
//     end: "+=4000px", 
//     pin: true,
//     pinSpacing: false,
//     toggleActions: "play none reverse none",
//     animation: artIMGTimeline
//     }
// )