
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
  

