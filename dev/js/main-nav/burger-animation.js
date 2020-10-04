import {gsap} from "gsap";
var burgerAnimationSpeed = 0.25;

// reset transformOrigin point for each time
gsap.set(".lines",{transformOrigin:"center"});

//reference to the timeline (burgerAnimationTimeline), to = what you want to animate, what properties?

export const burgerAnimationTimeline = gsap.timeline({paused:true});
burgerAnimationTimeline.addLabel("burgerToDownArrow")
                    .to("#burger",{duration: burgerAnimationSpeed, rotation:-90}, "animateBurger")     
                    .to("#bottomline", {duration: burgerAnimationSpeed, y:-9}, "animateBurger")
                    .to("#topline", {duration: burgerAnimationSpeed, y:9}, "animateBurger")
                    .to("#arrow-down-left", {duration: burgerAnimationSpeed, rotation:55}, "createArrow")
                    .to("#arrow-down-right", {duration: burgerAnimationSpeed, rotation:-55}, "createArrow")
                    .addLabel("burgerToDownArrowReverse")
                    .addPause()

                    .addLabel("downArrowToX")
                    .to("#bottomline", {duration:burgerAnimationSpeed, rotation:45}, "burgerToX")
                    .to("#topline", {duration:burgerAnimationSpeed, rotation:-45}, "burgerToX")
                    .to("#middleline",{duration: burgerAnimationSpeed, alpha:0},"burgerToX")
                    .to("#arrow-down-left", {duration:burgerAnimationSpeed, alpha:0, rotation:0}, "burgerToX")
                    .to("#arrow-down-right", {duration:burgerAnimationSpeed, alpha:0, rotation:0}, "burgerToX")
                    .to("#arrow-up-left", {duration:burgerAnimationSpeed, alpha:0}, "burgerToX")
                    .to("#arrow-up-right", {duration:burgerAnimationSpeed, alpha:0}, "burgerToX")
                    .addLabel("downArrowToXReverse")
                    .addPause()

                    .addLabel("XToUpArrow")
                    .to("#bottomline", {duration:burgerAnimationSpeed, rotation:0}, "upArrow")
                    .to("#topline", {duration:burgerAnimationSpeed, rotation:0}, "upArrow")
                    .to("#arrow-up-left", {duration:burgerAnimationSpeed, rotation:-55, alpha:1}, "createArrowUp")
                    .to("#arrow-up-right", {duration:burgerAnimationSpeed, rotation:55, alpha:1}, "createArrowUp")

                    .addLabel("XToUpArrowReverse")
                    .addPause()

                    .addLabel("upArrowToBurger")
                    .to("#topline", {duration: burgerAnimationSpeed, y:0, rotation:0}, "backToBurger")
                    .to("#bottomline", {duration: burgerAnimationSpeed, y:0, rotation:0}, "backToBurger")
                    .to("#middleline", {duration: burgerAnimationSpeed, alpha:1}, "backToBurger")
                    .to("#burger", {duration: burgerAnimationSpeed, rotation: 0}, "backToBurger")
                    .to("#arrow-up-right", {duration: burgerAnimationSpeed, alpha:0, rotation: 0}, "backToBurger")
                    .to("#arrow-up-left", {duration: burgerAnimationSpeed, alpha:0, rotation: 0}, "backToBurger")
                    .to("#arrow-down-left", {duration: burgerAnimationSpeed, alpha:1}, "backToBurger")
                    .to("#arrow-down-right", {duration: burgerAnimationSpeed, alpha:1}, "backToBurger")

                    .addPause()
