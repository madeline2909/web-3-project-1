var burgerToXTimeline = gsap.timeline({paused:true});
burgerToXTimeline.to("#burger", {duration:0.25, alpha:0}, "iOSburgerAnimation")
.to("#bottomline", {duration:0.25, y:-9, rotation:-45}, "iOSburgerAnimation")
.to("#topline", {duration:0.25, y:9, rotation:45}, "iOSburgerAnimation")
.to("#arrow-down-left", {duration:0.2, alpha:0}, "iOSburgerAnimation")
.to("#arrow-down-right", {duration:0.2, alpha:0}, "iOSburgerAnimation")
.to("#arrow-up-right", {duration: 0.2, alpha:0}, "iOSburgerAnimation")
.to("#arrow-up-left", {duration: 0.2, alpha:0}, "iOSburgerAnimation")


function mobileburgerAnimation(){

    if(canYouSeeTheMenu === true){
        console.log("turn the burger into an X");
        burgerToXTimeline.play();
    }
    else{
        console.log("turn the X into a burger");
        burgerToXTimeline.reverse();
    }
}