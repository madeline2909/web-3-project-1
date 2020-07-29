var burgerToArrowTimeline = gsap.timeline({paused:true});
var xtoArrowTimeline = gsap.timeline({paused:true});
var burgerArrowSpeed = 0.25;

burgerToArrowTimeline.to("#burger", {duration:burgerArrowSpeed, rotation:-90}, "animateBurger")
                    .to("#bottomline", {duration:burgerArrowSpeed, y:-9}, "animateBurger")
                    .to("#topline", {duration:burgerArrowSpeed, y:9}, "animateBurger")
                    .to("#arrow-left", {duration:burgerArrowSpeed, rotation:55}, "createArrow")
                    .to("#arrow-right", {duration:burgerArrowSpeed, rotation:-55}, "createArrow")

xtoArrowTimeline.to("#burger", {duration:burgerArrowSpeed, rotation:-270}, "animateX")
                    .to("#bottomline", {duration:burgerArrowSpeed, rotation:180, y:-9}, "animateX")
                    .to("#topline", {duration:burgerArrowSpeed, rotation:180, y:9}, "animateX")
                    .to("#arrow-left", {duration:burgerArrowSpeed, rotation:55, alpha:1}, "createArrowUp")
                    .to("#arrow-right", {duration:burgerArrowSpeed, rotation:-55, alpha:1}, "createArrowUp")

$("#burger").on("mouseenter", function(){
    console.log("mouse enter");
    if(canYouSeeTheMenu === false){
        burgerToArrowTimeline.play();
    }else{
        xtoArrowTimeline.play();
    }
});
$("#burger").on("mouseleave", function(){
    console.log("mouse leave");
    if(canYouSeeTheMenu === false){
        burgerToArrowTimeline.reverse();
    }else{
        xtoArrowTimeline.reverse();
    }
});