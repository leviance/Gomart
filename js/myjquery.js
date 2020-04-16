// change shape mouse 
$(function() {
  var canvas = document.createElement("canvas");
  canvas.width = 40;
  canvas.height = 40;
  //document.body.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#51aa1b";
  ctx.font = "50px FontAwesome";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("\uf100", 12, 12);
  var dataURL = canvas.toDataURL('image/png')
  $('.region-hover-mouse-left').css('cursor', 'url('+dataURL+'), auto');
});

$(function() {
  var canvas = document.createElement("canvas");
  canvas.width = 30;
  canvas.height = 30;
  //document.body.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#51aa1b";
  ctx.font = "50px FontAwesome";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("\uf101", 12, 12);
  var dataURL = canvas.toDataURL('image/png')
  $('.region-hover-mouse-right').css('cursor', 'url('+dataURL+'), auto');
});

// end change shape mouse 

// hover for list categories
  $('.Frozen-item, .frozen-item-list').hover(function () {
      $('.frozen-item-list').removeClass('on-hover');
    }, function () {
      $('.frozen-item-list').addClass('on-hover');
    }
  );


  $('.fruit-veges-list, .fruit-veges').hover(function () {
    $('.fruit-veges-list').removeClass('on-hover');
  }, function () {
    $('.fruit-veges-list').addClass('on-hover');
  }
);

  $('.oils-ghee-list, .oils-ghee').hover(function () {
    $('.oils-ghee-list').removeClass('on-hover');
  }, function () {
    $('.oils-ghee-list').addClass('on-hover');
  }
);
// end hover for list categories

$('.top-categories .owl-carousel').owlCarousel({
  loop:false,
  margin:30,
  nav:true,
  dots: false,
  autoHeight: true,
  loop:true,
  responsive:{
      0:{
          items:1
      },
      480:{
          items:2
      },
      990:{
          items:3
      },
      1200:{
          items:4
      }
  }
})

$('.trending-products .owl-carousel').owlCarousel({
  loop:false,
  margin:30,
  nav:true,
  dots: false,
  autoHeight: true,
  loop:true,
  responsive:{
    0:{
      items:2
    },
    480:{
        items:2
    },
    750:{
        items:3
    },
    1200:{
        items:3
    }
  }
})

$('.from-the-journal .owl-carousel').owlCarousel({
  loop:false,
  margin:30,
  nav:true,
  dots: false,
  autoHeight: true,
  responsive:{
    0:{
      items:1
    },
    765:{
        items:2
    },
    955:{
        items:3
    },
    1200:{
        items:3
    }
  }
})

$('.slide-bottom .owl-carousel').owlCarousel({
  loop:false,
  margin:30,
  dots: false,
  autoHeight: true,
  autoplay: true,
  autoplayHoverPause: true,
  responsive:{
    0:{
      items:2
    },
    480:{
        items:3
    },
    990:{
        items:4
    },
    1200:{
        items:5
    }
  }
})

$('.main-footer .slide-footer .owl-carousel').owlCarousel({
  loop:false,
  margin:30,
  dots: false,
  autoHeight: true,
  autoplayHoverPause: true,
  loop: true,
  responsive:{
    0:{
      items:2
    },
    480:{
        items:3
    },
    990:{
        items:4
    },
    1200:{
        items:4
    }
  }
})


//  effect hover bottom main footer
function effectClickMainFooter(){
  if ($(window).width() < 991){
    $("footer .main-footer .bottom-main .title").on("click",function(){
      $(this).parents(".list-infor").toggleClass("view-list");
      $(this).find("i").toggleClass("i-rotate");
    })
  }
}

// effect loading modal
function effectLoading(){
  $("#loading-modal").hide();
}

$(document).ready(function(){
  effectLoading();
  effectClickMainFooter();
})

// close popup letter
$("#btn-close-popup-letter").on("click", function(){
  $(".popup-letter").hide();
})

// scroll to top

$(".btn-go-to-top").on("click", function(){
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
})

$(document).ready(function(){
  $(window).on("scroll", function(){
    if($(this).scrollTop() > 500){
      $(".btn-go-to-top").show()
    }
    else $(".btn-go-to-top").hide()
  })
})