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

//animating contact caption
gsap.from("#recom-animation", {
    duration: 0.5,
    yPercent: 10,
    alpha: 0,
    scrollTrigger: {
        //scrub:true,
        toggleActions: "restart none none reverse",
        trigger: "#p1",
        start: "top 70%",
        //markers: true,
        id: "contact caption"
    }
})
gsap.from(".recom-2-animation", {
    duration: 0.5,
    yPercent: 10,
    alpha: 0,
     stagger: 0.15,
    scrollTrigger: {
        //scrub:true,
        toggleActions: "restart none none reverse",
        trigger: "#contact-recom-2",
        start: "top 70%",
        stagger: true,
        //markers: true,
        id: "contact caption 2"
    }
})