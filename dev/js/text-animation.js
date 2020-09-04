//paragraphs animation HOME
gsap.from(".home-intro-anim", {
    duration: 0.5,
    yPercent: 10,
    alpha: 0,
    scrollTrigger: {
        //scrub:true,
        toggleActions: "restart reverse restart reverse",
        trigger: "#home-intro-p",
        start: "top 70%",
        //markers: true,
        id: "intro"
    }
})

gsap.from("#home-culture-anim", {
    duration: 0.5,
    yPercent: 10,
    alpha: 0,
    scrollTrigger: {
        //scrub:true,
        toggleActions: "restart reverse restart reverse",
        trigger: "#home-culture-para",
        start: "top 70%",
        //markers: true,
        id: "culture"
    }
})

gsap.from("#home-art-anim", {
    duration: 0.5,
    yPercent: 10,
    alpha: 0,
    scrollTrigger: {
        //scrub:true,
        toggleActions: "restart reverse restart reverse",
        trigger: "#home-art",
        start: "top 70%",
        //markers: true,
        id: "culture"
    }
})