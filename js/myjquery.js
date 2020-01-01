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
// end hover for list categories