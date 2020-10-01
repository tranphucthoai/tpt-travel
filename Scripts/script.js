$(function () {
    initCarouselMain();
    initCarouselTour();
    initCounter();
    tooltip();
    initBackTop();
    initMenuLeftToggle();
    //priceSlider();
    //rangeSlider();
    //initChangeValueRange();
    var temp = document.getElementById("test");
    temp.setAttribute("value","1998");
});

function initCarouselMain() {
    $("#main-carousel .owl-carousel").owlCarousel({
        nav: true, /*mũi tên qua lại*/
        items: 1, /*cho hiển thị mỗi lần 1 ảnh*/
        loop: true, /*xoay vòng ảnh*/
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        //navText: ["<i class="fa fa-....."></i>", "<i> </"];
    });
};

function initCarouselTour() {
    $(".tour-carousel .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                dots: true,
                items: 1,
            },
            576: {
                dots: true,
                items: 2,
            },
            768: {
                items: 3,
                dots: true,
            }
        }
    });
};

function initHoverMainMenu() {
    $(".header-right-item").hover(function () {
        $(".header-right-item").find(".header-right-item-wrapper").addClass("show").attr("aria-expanded", "true")
            .parent().parent().find(".dropdown-menu").addClass("show");
    });
};

function initCounter() {
    jQuery(document).ready(function ($) {
        $('.num-counter').counterUp({
            delay: 10,
            time: 2000
        });
    });
}

function tooltip() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
};

function initBackTop() {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }
    });

    $(".back-top").click(function () {
        //1 second of animation time
        //html works for FFX but not Chrome
        //body works for Chrome but not FFX
        //This strange selector seems to work universally
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    $(window).scroll(function () {

        if ($(window).scrollTop() > 1500) {
            //$(".back-top-wrapper").css({
            //    'opacity': '0',
            //});
            $(".back-top-wrapper").fadeIn();
        }
        else {
            //$(".back-top-wrapper").css({
            //    'opacity': '1',
            //});
            $(".back-top-wrapper").fadeOut();
        }
    });
};

function priceSlider() {
    $("#range-slider").slider({
        id: "#range-slider",
        min: 0,
        max: 10,
        step: 1,
        orientation: 'horizontal',
        value: 10,

        // enable range slider
        range: true,

        // selection placement.
        // 'before', 'after' or 'none'.
        // in case of a range slider, the selection will be placed between the handles
        selection: 'before',

        // 'show', 'hide', or 'always'
        tooltip: 'always',

        // show two tooltips one for each handler
        tooltip_split: true,

        // lock to ticks
        lock_to_ticks: true,

        // 'round', 'square', 'triangle' or 'custom'
        handle: 'round',

        // whether or not the slider should be reversed
        reversed: true,

        // whether or not the slider is initially enabled
        enabled: true,

        // callback
        formatter: function formatter(val) {
            if (Array.isArray(val)) {
                return val[0] + " : " + val[1];
            } else {
                return val;
            }
        },

        // The natural order is used for the arrow keys.
        // Arrow up select the upper slider value for vertical sliders, arrow right the righter slider value for a horizontal slider - no matter if the slider was reversed or not.
        // By default the arrow keys are oriented by arrow up/right to the higher slider value, arrow down/left to the lower slider value.
        natural_arrow_keys: true,

        // Used to define the values of ticks.
        // Tick marks are indicators to denote special values in the range.
        // This option overwrites min and max options.
        ticks: [],

        // Defines the positions of the tick values in percentages.
        // The first value should always be 0, the last value should always be 100 percent.
        ticks_positions: [],

        // Defines the labels below the tick marks. Accepts HTML input.
        ticks_labels: [],

        // Used to define the snap bounds of a tick.
        // Snaps to the tick if value is within these bounds.
        ticks_snap_bounds: 0,

        // Used to allow for a user to hover over a given tick to see it's value.
        ticks_tooltip: true,

        // Position of tooltip, relative to slider.
        // Accepts 'top'/'bottom' for horizontal sliders and 'left'/'right' for vertically orientated sliders.
        // Default positions are 'top' for horizontal and 'right' for vertical slider.
        tooltip_position: null,

        // Set to 'logarithmic' to use a logarithmic scale.
        scale: 'linear',

        // Focus the appropriate slider handle after a value change.
        focus: true,

        // ARIA labels for the slider handle's, Use array for multiple values in a range slider.
        labelledby: null,

        // Defines a range array that you want to highlight
        rangeHighlights: []

    });


    //$('#range-slider').slider().on(change, function () {

    //});
    var temp = $("#range-slider").slider("getValue");
    $(".value-range").html(temp);
};

function rangeSlider() {
    $(".range-example-1").asRange({

        namespace: 'asRange',

        skin: null,

        max: 5000000,

        min: 500000,

        // initial value
        value: null,

        // moving step at a time
        step: 10,

        // limit the range of the pointer moving
        limit: true,

        // initial range
        range: true,

        // 'v' or 'h'
        direction: 'h',

        // enable keyboard interactions
        keyboard: true,

        // false, 'inherit', {'inherit': 'default'}
        replaceFirst: false,

        // shows tips
        tip: true,

        // shows scales
        scale: true,

        // for formatting output
        format: function format(value) {
            return value + "đ";
        }

    });
};

function initMenuLeftToggle() {
    $(".filter-btn-toggle").click(function () {
        $(".menu-left-toggle").animate({ left: "0px" }, 50);
        $(".menu-left-toggle").addClass("showMenu");
        $(".menu-left-toggle").removeClass("hideMenu");
        $(".mask-menu-left-toggle").removeClass("d-none");
        $(".btn-close-menu-left").removeClass("d-none");
        //$("body").addClass("noScroll");

    });
    $(".btn-close-menu-left").click(function () {
        $(".menu-left-toggle").animate({ left: "-260px" }, 50);
        $(".menu-left-toggle").addClass("hideMenu");
        $(".menu-left-toggle").removeClass("showMenu");
        $(".mask-menu-left-toggle").addClass("d-none");
        $(".btn-close-menu-left").addClass("d-none");
        //$("body").removeClass("noScroll");

    });
};
