/* =========================================
                Preloader
============================================ */
$(window).on('load', function() { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* =========================================
                Team
============================================ */
$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/* =========================================
                Progress Bars
============================================ */
$(function() {

    $("#progress-elements").waypoint(function() {

        $(".progress-bar").each(function() {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});
/* =========================================
                Reesponsive Tabs
============================================ */


$(function() {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});

/* =========================================
               protfoli-Isotope Filter
============================================ */
$(window).on('load', function() {

    //initilize Isotope

    $("#isotope-container").isotope({

    });

    //  filter item on buttoon click
    $("#isotope-filters").on('click', 'button', function() {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio
        $(".isotope-container").isotope({
            filter: filterValue
        });
        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* =========================================
               protfoli-magnifier
============================================ */

$(function() {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        },
        type: 'image'

    });



});


/* =========================================
               Testimonials
============================================ */

$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/* =========================================
               Stats
============================================ */
$(function() {
        $('.counter').counterUp({
            delay: 10,
            time: 1000,
        });
    })
    /* =========================================
                   Clients
    ============================================ */
$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/* =========================================
                Navigation
============================================ */
/* Show and hide White Navigation */
$(function() {


    // Show/hide nav on page load
    showHideNav();



    $(window).scroll(function() {
        // Show/hide nav on Windows Scroll
        showHideNav();
    });



    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            //Show White Nav

            $("nav").addClass("white-nav-top");


            //Show Dark Logo

            $(".navbar-brand img").attr("src", "img/solo-images/logo/logo-dark.png")

            // Back to top Button

            $("#back-to-top").fadeIn();

        } else {
            //Show Normal Nav

            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/solo-images/logo/logo.png")

            // Hide Back to top
            $("#back-to-top").fadeOut();
        };
    };

});

/* =========================================
                Smooth Scrolling
============================================ */
$(function() {

    $("a.smooth-scroll").click(function(event) {

        event.preventDefault();

        // get Section id like #home,#services etc.

        var section_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section_id).offset().top
        }, 1300, "easeInOutExpo");

    });


});
/* =========================================
                Animation
============================================ */
// Animate On Scroll
$(function() {
    new WOW().init();
});

$(window).on('load', function() {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $('#arrow-down').addClass('animated bounceIn');

});