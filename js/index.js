
// effect for head top title
var drop_choose1 = document.getElementById('p31120926');
var drop_choose2 = document.getElementById('p31120927');
function option_head_top2(){
  drop_choose2.classList.toggle('show0921');
  drop_choose1.classList.add('show0921');
}
function option_head_top1(){
  drop_choose1.classList.toggle('show0921');
  drop_choose2.classList.add('show0921');
}


// end effect for head top title

// effect for cart
var cart = document.querySelectorAll('.p31121240');
var list_cart = document.getElementById('p31121241');

// end effect for cart


// effect for register
  function register(){
    var register =  document.querySelector('.login674');
    register.classList.toggle('hidden');
  }
// end effect for register


// effect for big slide top
function slide_move(){
  var img1 = document.querySelector('.d111351'), img2 = document.querySelector('.d111352');
  var button = document.querySelectorAll('.big-slide-top .button-slide .button');
  img1.classList.toggle('hidden');
  img2.classList.toggle('hidden');
  button[0].classList.toggle('active');
  button[1].classList.toggle('active');
}

setInterval(() => {
  var img1 = document.querySelector('.d111351'), img2 = document.querySelector('.d111352');
  var button = document.querySelectorAll('.big-slide-top .button-slide .button');
  img1.classList.toggle('hidden');
  img2.classList.toggle('hidden');
  button[0].classList.toggle('active');
  button[1].classList.toggle('active');
}, 7000);

// end effect for big slide top

// effect for menu list categories
function drop_list_categories(){
  var list_categories = document.querySelector('.wrap-list-categories');
  list_categories.classList.toggle('hidden');
}
// end effect for menu list categories


// effect show cart-mobile
var cart_mobile = document.getElementById('a14235');
  function show_cart_mobile(){
    cart_mobile.classList.toggle('hidden');
  }
// end effect show cart-mobile

// when menu mobile hidden left hidden

function menu_hidden_left_show(){
  var menu = document.querySelector('.top-title-mobile .wrap .menu-bar .menu-hidden-left')
  var background_black = document.querySelector('.top-title-mobile .wrap .menu-bar .background-black')
  menu.classList.remove('go-left');
  background_black.classList.remove('hidden-back-ground-black');
}

function menu_hidden_left_hidden(){
  var menu = document.querySelector('.top-title-mobile .wrap .menu-bar .menu-hidden-left')
  var background_black = document.querySelector('.top-title-mobile .wrap .menu-bar .background-black')
  menu.classList.add('go-left');
  background_black.classList.add('hidden-back-ground-black');
}

function menu_hidden_left_zoom_out(){
  var menu = document.querySelector('.menu-hidden-left .wrap-menu .father-menu');
  var categories = document.querySelector('.menu-hidden-left .menu_2 .father-menu')
  menu.classList.toggle('zoom-out');
  categories.classList.toggle('zoom-out');
}

function settings_zoom_out(){
  var setting = document.querySelector('.menu-hidden-left .wrap-setting .father-setting');
  setting.classList.toggle('zoom-out');
}

// end effect for menu mobile  hidden left

window.onclick = function(event) {
  if (!event.target.matches('.t123')&&!event.target.matches('.t124')) {
   drop_choose1.classList.add('show0921');
   drop_choose2.classList.add('show0921');
  }
  if(event.target == cart[0] || event.target == cart[1] || event.target == cart[2]){
      list_cart.classList.toggle('hidden');
  }
  else{
    list_cart.classList.add('hidden');
  }
  // for cart mobile
  if(!event.target.matches('.cart-mobile i')&&!event.target.matches('.list-cart-mobile p')){
    cart_mobile.classList.add('hidden');
  }
  // end for cart mobile
}
  

