import $ from "jquery";

export function fancyBox() {

    $('[data-fancybox="gallery"]').fancybox({
        touch : {
            vertical : true
        },
        buttons : [
            // "zoom",
            // "share",
            // "slideShow",
            // "fullScreen",
            // "download",
            // "thumbs",
            // "close"
        ]
        
    });
}
