// console.log("tiny slider is working")
$(document).ready(function () {

  console.log($(".slides").hasClass("my-slider"));
  if ($(".slides").hasClass("my-slider")) {
    tns({
        container: ".my-slider",
        items: 1,
        slideBy: "page",
        navPosition: "bottom",
        "edgePadding": 50,
        "gutter": 20,
        controls: true,
        autoplay: true,
        responsive: {
            768: {
              "gutter": 20,
              items: 1
            },
            1025: {
              "gutter": 30,
              items: 2
            },
            1440: {
              items: 2
            }
          }
    });
  }
});