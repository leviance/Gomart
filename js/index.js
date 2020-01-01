
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
}
  

