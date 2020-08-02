var burgerAnimationTimeline = gsap.timeline({paused:true});
var upArrowToBurgerAnimationTimeline = gsap.timeline({paused:true});
var burgerAnimationSpeed = 0.25;

// reset transformOrigin point for each time
gsap.set(".lines",{transformOrigin:"center"});

//reference to the timeline (burgerAnimationTimeline), to = what you want to animate, what properties?
// burgerAnimationTimeline.to("#middleline",{duration:burgerAnimationSpeed,alpha:0},"burgerStart")
//                         .to("#topline",{duration:burgerAnimationSpeed,rotation:45,y:9, stroke:"#59BEB0"},"burgerStart")
//                         .to("#bottomline",{duration:burgerAnimationSpeed,rotation:-45,y:-9,stroke:"#59BEB0",onReverseComplete:resetFunctionLineColor},"burgerStart");

burgerAnimationTimeline.to("#topline", {duration: burgerAnimationSpeed, rotation: 45}, "burgerToX")
                    .to("#bottomline", {duration: burgerAnimationSpeed, rotation: -45}, "burgerToX")
                    .to("#middleline", {duration: burgerAnimationSpeed, alpha:0}, "burgerToX")
                    .to("#arrow-down-right", {duration: burgerAnimationSpeed, alpha:0, rotation: 0}, "burgerToX")
                    .to("#arrow-down-left", {duration: burgerAnimationSpeed, alpha:0, rotation: 0}, "burgerToX")

upArrowToBurgerAnimationTimeline.to("#topline", {duration: burgerAnimationSpeed, y:0}, "ArrowToBurger")
                    .to("#bottomline", {duration: burgerAnimationSpeed, y:0}, "ArrowToBurger")
                    .to("#middleline", {duration: burgerAnimationSpeed, alpha:1}, "ArrowToBurger")
                    .to("#burger", {duration: burgerAnimationSpeed, rotation: 0}, "ArrowToBurger")
                    .to("#arrow-up-right", {duration: burgerAnimationSpeed, alpha:0, rotation: 0}, "ArrowToBurger")
                    .to("#arrow-up-left", {duration: burgerAnimationSpeed, alpha:0, rotation: 0}, "ArrowToBurger")
                    .to("#arrow-down-left", {duration: burgerAnimationSpeed, alpha:1}, "ArrowToBurger")
                    .to("#arrow-down-right", {duration: burgerAnimationSpeed, alpha:1}, "ArrowToBurger")

function animateBurger(){
    if(canYouSeeTheMenu === true){
        burgerAnimationTimeline.play();
    }else{
        // burgerAnimationTimeline.reverse();
        upArrowToBurgerAnimationTimeline.play();
    }
}

// function resetFunctionLineColor(){
//     //change back to pink after the animation
//     gsap.to(".lines",{duration:burgerAnimationSpeed,stroke:"#EF87A3"});
// }