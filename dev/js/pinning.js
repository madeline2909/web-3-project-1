
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

//map pinning
gsap.to("#map-container", {
    ease: "none",
    scrollTrigger: {
        trigger: "#map-container",
        id: "map pinning",
        pin: true,
        pinSpacing: false,
        //markers: true,
        start: "top 0",
        toggleActions: "restart none none reverse"
    }
})

//footer pinning
// var footerHeight = $("footer").outerHeight();
// gsap.to("footer", {
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".last-section",
//         id: "footer pinning",
//         // pin: "footer",
//         // pinSpacing: false,
//         markers: true,
//         start:"top top",
//         end:"bottom top+=footerHeight",
//         animation: logoTimeline
//         //end: "bottom bottom"
//     }
// })
// gsap.to("footer", {
//     ease: "none",
//     scrollTrigger: {
//         trigger: "footer",
//         id: "footer pinning",
//         pin: true,
//         pinSpacing: false,
//         markers: true,
//         start:"bottom bottom",
//         end:"top top"
    
//         //end: "bottom bottom"
//     }
// })