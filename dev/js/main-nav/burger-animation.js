var burgerAnimationTimeline = gsap.timeline({pause:true});
var burgerAnimationSpeed = 0.25;

// reset transformOrigin point for each time
gsap.set(".lines",{transformOrigin:"center"});

//reference to the timeline (burgerAnimationTimeline), to = what you want to animate, what properties?
burgerAnimationTimeline.to("#middleline",{duration:burgerAnimationSpeed,alpha:0},"burgerStart")
                        .to("#topline",{duration:burgerAnimationSpeed,rotation:45,y:9, stroke:"#59BEB0"},"burgerStart")
                        .to("#bottomline",{duration:burgerAnimationSpeed,rotation:-45,y:-9,stroke:"#59BEB0",onReverseComplete:resetFunctionLineColor},"burgerStart");
function animateBurger(){
    if(canYouSeeTheMenu === true){
        burgerAnimationTimeline.play();
    }else{
        burgerAnimationTimeline.reverse();
    }
}

function resetFunctionLineColor(){
    //change back to pink after the animation
    gsap.to(".lines",{duration:burgerAnimationSpeed,stroke:"#EF87A3"});
}