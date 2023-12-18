const buybtn = document.querySelector('#buy-btn');
const pbtn = document.querySelector('#patty-btn');
const lbtn = document.querySelector('#lettuce-btn');
const totalPriceCount =document.querySelector('#total-price');

const bottomBurger = document.querySelector('#bottom');

let totalPrice =0;
let pattyCount = 0;
let lettuceCount =0;

function createPatty (){
const div = document.createElement('div');
div.className='patty';
 return div;
}

function createLettuce (){
const div = document.createElement('div');
div.className ='lettuce';
  return div;
}

function insertPatty (parent,patty){
  parent.insertBefore(patty, bottomBurger)
}

function insertLettuce (parent,lettuce){
  parent.insertBefore(lettuce, bottomBurger)
}

pbtn.addEventListener('click',() =>{
  totalPrice = totalPrice + 50.00;
  pattyCount =pattyCount +1;
  totalPriceCount.textContent = totalPrice;
  const patty = createPatty();
  insertPatty(bottomBurger.parentNode ,patty);
});

lbtn.addEventListener('click',() =>{
   totalPrice = totalPrice + 30.00;
  lettuceCount = lettuceCount + 1;
  totalPriceCount.textContent = totalPrice;
  const lettuce = createLettuce();
  insertLettuce(bottomBurger.parentNode ,lettuce);
});

buybtn.addEventListener('click', () =>{
  alert(`You have bought the burger for ₹ ${totalPrice}`);
});

