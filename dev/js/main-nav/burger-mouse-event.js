

gsap.set("#arrow-up-left",{transformOrigin:"right center", alpha:0});
gsap.set("#arrow-up-right",{transformOrigin:"right center", alpha:0});


$("#burger").on("mouseenter", function(){
    // console.log("mouse enter");
    if(canYouSeeTheMenu === false){
        burgerAnimationTimeline.play("burgerToDownArrow");
    }else{
        burgerAnimationTimeline.play("XtoUpArrow");
    }
});
$("#burger").on("mouseleave", function(){
    console.log("mouse leave");
    if(canYouSeeTheMenu === false){
        burgerAnimationTimeline.reverse("burgerToDownArrowReverse");
    }else{
        burgerAnimationTimeline.reverse("XtoUpArrowReverse");
    }
}
);
