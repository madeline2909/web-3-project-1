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

ScrollTrigger.matchMedia({
	
    // desktop
    "(min-width: 800px)": function() {
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
            // markers: true,
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
    },

    
  
    // mobile
    "(max-width: 799px)": function() {
      gsap.from("#intro",{
        yPercent: -100,
        alpha:0,
        scrollTrigger: {
        trigger: "#home-intro-img",
        start: "-30 top",
        end:"200 100",
        scrub: 1,
        toggleActions: "restart reverse restart none"
        }
      })
      gsap.from("#culture", {
            xPercent: 100,
            alpha:0,
            scrollTrigger: {
                trigger: "#home-culture",
                id: "culture",
                // markers: true,
                start: "-200 top",
                end:"-200 bottom",
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
    }
  });


//footer
gsap.set("#email", {
    transformOrigin: "right center"
})
gsap.set("#email-btn", {
    transformOrigin: "left center"
});

const logoTimeline = gsap.timeline();
logoTimeline.from(".footer-logo",{
    alpha: 0,
    yPercent: 100,
    rotation:180,
    stagger: 0.25
})
.from("#email-input",{
    duration:0.25,
    alpha: 0,
    width: 0
},"email-animation")
.from("#email-btn",{
    duration:0.25,
    alpha: 0,
    width: 0
},"email-animation");
ScrollTrigger.create({
    trigger: "footer",
    start: "-30% bottom",
    animation: logoTimeline,
    toggleActions: "restart pause reverse none",
    // scrub: 1,
    markers: true,
    id: "logo"
    }
);