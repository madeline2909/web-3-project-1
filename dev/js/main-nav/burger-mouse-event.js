var burgerToArrowTimeline = gsap.timeline({paused:true});
var burgerArrowSpeed = 0.25;

burgerToArrowTimeline.to("#burger", {duration:burgerArrowSpeed, rotation:-90}, "animateBurger")
                    .to("#bottomline", {duration:burgerArrowSpeed, y:-9}, "animateBurger")
                    .to("#topline", {duration:burgerArrowSpeed, y:9}, "animateBurger")
                    .to("#arrow-left", {duration:burgerArrowSpeed, rotation:55}, "createArrow")
                    .to("#arrow-right", {duration:burgerArrowSpeed, rotation:-55}, "createArrow")

$("#burger").on("mouseenter", function(){
    console.log("mouse enter");
    burgerToArrowTimeline.play();
});
$("#burger").on("mouseleave", function(){
    console.log("mouse leave");
    burgerToArrowTimeline.reverse();
});