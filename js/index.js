
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

window.onclick = function(event) {
  if (!event.target.matches('.t123')&&!event.target.matches('.t124')) {
   drop_choose1.classList.add('show0921');
   drop_choose2.classList.add('show0921');
  }
}

// end effect for head top title

// effect for cart
var cart = document.getElementById('p31121240');
var list_cart = document.getElementById('p31121241');
cart.onclick = () =>{
  list_cart.classList.toggle('hidden');
}

// end effect for cart