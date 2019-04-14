$(document).foundation();

// Smooth Scroll
smoothScroll.init({
    updateURL: false
});

$(document).ready(function () {

    // Animsition
    $(".animsition").animsition({
        inDuration: 800,
        outDuration: 400,
        loading: false,
        timeout: true,
        timeoutCountdown: 300,
        onLoadEvent: false
    });

    // Nav Toggle
    $('.nav-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('nav-open');
    });

    // Close Nav
    $('#nav a.close-nav').on('click', function (e) {
        e.preventDefault();
        $('body').removeClass('nav-open');
    });

    // RoyalSlider Referenzen
    $("#referenzen .royalSlider").royalSlider({
        imageScaleMode: 'none',
        imageAlignCenter: false,
        imageScalePadding: 0,
        arrowsNavAutoHide: false,
        slidesSpacing: 0,
        loop: true,
        numImagesToPreload: 1,
        transitionSpeed: 400,
        navigateByClick: false,
        sliderDrag: false,
        keyboardNavEnabled: true,
        globalCaption: true,
        autoHeight: true
    });

    // Refresh Equalizer after Ajax Load More
    $.fn.almComplete = function (alm) {
        new Foundation.Equalizer($('#news'));
    };

    // Hide legal_stuff
    $('#legal_stuff').hide();

    // Open legal_stuff
    $('.open-legal_stuff').on('click', function (e) {
        e.preventDefault();

        $('#legal_stuff').show();

        $('html, body').animate({scrollTop: $('#legal_stuff').offset().top - 109}, 500, 'easeInOutCubic');
    });

    // Close legal_stuff
    $('.close-legal_stuff').on('click', function (e) {
        e.preventDefault();

        $('#legal_stuff').hide();
    });

    $(".download").mouseenter(function() {
        $(this).addClass("hover");
    });

    $(".download").mouseleave(function() {
        $(this).removeClass("hover");
    });
});

$(window).load(function () {

    if (window.location.hash) {

        setTimeout(function () {
            // Scroll to correct anchor position
            var hash = window.location.hash;
            $(document).scrollTop($(hash).offset().top + 1);
        }, 100);

    }

});
