gsap.registerPlugin(ScrollToPlugin);

var scrollItems = ["#home-culture","#home-art"];

function scrollIndex(){
    // gsap.to(window, {duration: 1, scrollTo:{y: scrollItems[$('#main-nav li button').index(this)], offsetY:40}});
    gsap.to(window, {duration: 1, scrollTo:{y: scrollItems[$('#main-nav li button').index(this)]}});
}



// function scrollCulture(){
//     gsap.to(window, {duration: 1, scrollTo:{y:"#home-culture", offsetY:60}});
// }
// function scrollArt(){
//     gsap.to(window, {duration: 1, scrollTo:{y:"#home-art", offsetY:60}});
// }