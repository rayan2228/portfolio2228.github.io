// service-slider
$(".service-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// testimonial-slider
$(".testimonial-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    // autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// mixitup 
var mixer = mixitup('.portfolio-mixitup');
