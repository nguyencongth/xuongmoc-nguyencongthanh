$(document).ready(function(){
    $(".regular").slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }

      ]
    });
});


$(document).ready(function(){
  $(".partner-slide").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed:2000,
      slidesToShow: 6,
      slidesToScroll: 1,
      pauseOnHover: true,
      responsive: [
      {
          breakpoint: 1400,
          settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1
          }
      },
      {
        breakpoint: 576,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
      }
      ]
    });
});


