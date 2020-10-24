import $ from "jquery";
//import {tns} from 'tiny-slider';

export function tinySliderFunc() {
  // $(document).ready(function () {

    console.log($(".slides").hasClass("my-slider"));
    if ($(".slides").hasClass("my-slider")) {
      tns({
          navPosition: "bottom",
          container: '.my-slider',
          items: 1,
          mouseDrag: true,
          slideBy: "page",
          "edgePadding": 50,
          "gutter": 20,
          controls: true,
          controlsPosition:"bottom",
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
    }else {
      console.log("No TinySlider found!");
    }
  // });
}

