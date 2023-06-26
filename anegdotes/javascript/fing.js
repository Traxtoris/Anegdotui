// console.log('чашка!');

// let number;
// number = 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
// console.log(number);
// let logic;
// logic =  100000>999999 ;
// console.log(logic);

let button = document.querySelector("#contrabant");
button.addEventListener("click", function(){
  phurchar=prompt("Вы поменяли цвет");
//   console.log(phrase);
document.body.style.background="#ffa500";
document.querySelector("#exhaust").style.color = "#008000";
})

let button2 = document.querySelector("#rubbish");
button2.addEventListener("click", function(){
button2.style.background="#01FF01";
 phurchar2=alert("Вы поменяли цвет");
})

let day=document.querySelector("#gadzooks");
day.addEventListener("mouseover", function(){
  day.style.color = "#01FF01";
  })
day.addEventListener("mouseout", function(){
  day.style.color = "#000000";
  })

let anegdot = document.querySelector("#regarding");
anegdot.addEventListener("mouseover", function(){
anegdot.style.background = "linear-gradient(45deg, #ffe600, #fd0000)";
})
anegdot.addEventListener("mouseout", function(){
  anegdot.style.background = "#fff";
  })

  let fingers = document.querySelector("#pupsik");
  fingers.addEventListener("mouseover", function(){
  fingers.style.border = "#8b00ff 3px solid";
  })
  fingers.addEventListener("mouseout", function(){
  fingers.style.border = "none";
  })
  // let murmur = document.querySelector("#pups")
  // let laika = 0;
  // let slon = document.querySelector("#until")
  // slon.addEventListener("click", function(){
  //   laika = laika + 1;
  //   murmur.innerHTML = laika;

  // })
//   let button3 = document.querySelector("#until");
// button3.addEventListener("click",function(){
//   phurchar=alert("Вы нажали на лайк");
//   console.log(phrase);
// })
// let kulturnoe = document.querySelector("#okurma")
// let dislaika = 0;
// let slonsgrebnem = document.querySelector("#sosochki")
// slonsgrebnem.addEventListener("click", function(){
//   dislaika = dislaika + 1;
//   kulturnoe.innerHTML = dislaika;

// })
// for (let i=10; i>-1; i--) {
//     console.log(i);

// }
let kisrab = {'like0': 0,'like1': 0,'like2': 0,'like3': 0,'like4': 0,'like5': 0,'like6': 0,'like7': 0,'like8': 0}
let pipipi = {'dislike0': 0,'dislike1': 0,'dislike2': 0,'dislike3': 0,'dislike4': 0,'dislike5': 0,'dislike6': 0,'dislike7': 0,'dislike8': 0}
let bonbaron = document.querySelectorAll('.klacklac')
let avganestan = document.querySelectorAll(".muxa");
// console.log(avganestan);
for (let rip = 0; rip<9; rip++){
  avganestan[rip].addEventListener("click", function(){
    kisrab['like' + rip] = kisrab['like' + rip] + 1;
    bonbaron[rip].innerHTML = kisrab['like' + rip];
})}

let baron = document.querySelectorAll('.vopie')
let bon = document.querySelectorAll(".porcha");
// console.log(avganestan);
for (let rip = 0; rip<9; rip++){
  baron[rip].addEventListener("click", function(){
    pipipi['dislike' + rip] = pipipi['dislike' + rip] + 1;
    bon[rip].innerHTML = pipipi['dislike' + rip];
})}

// let barsik = {'age': '∞', 'color': 'lightgoldenrodyellow'}
// console.log(barsik['age'])
// console.log(barsik['color'])
// barsik['legs']=10011010100101001010101010100101
// console.log(barsik)

// pipipi['dislike4'] = 4
// console.log (pipipi)
// let poshak = {'eat': '🍕', 'quantity': '0'}
// console.log(barsik['eat'])
// console.log(barsik['quantity'])
let cfc = document.querySelector('#aizerbaidzan');



let uvj = document.querySelector('#cnucoed');
uvj.addEventListener("click", function(){
  if (cfc.style.display == 'none')
    cfc.style.display="block";
  else cfc.style.display = 'none';
  })
  
  let slon = 21786275632706;
  let dondon = 6463746278364;

  if (slon > dondon) {
    console.log ('правда')
  } else {
    console.log ('неправда')
  }

let age = prompt ("введите свой возраст");
console.log (age);
if (age < 18) {
  alert ('иди отсюда дауна куска');
}
else {
  alert ('привет пупсик');
}

  // let cart = 7;
  // if (cart = 0) {
  //   alert ('корзина пуста');
  // }
  // else {
  //  alert ('в корзине есть товары');
  // }
  
let year = 2012
if (year % 4 == 0) {
  alert ('високосным')
}
else {
  alert ('невисокосный')
}

let primer = prompt ("введите число 1");
let primerchik = prompt ("введите число 2");
if (primer < primerchik) {
   alert ('ты математик или да?')
}
 else if (primer == primerchik) {
  alert ('чел это эээээ я чё-то хотел сказать вроде а щас не помню, аааа вспомнил ну короче сова ладно они равны:)');
 }
 
else {
  alert ('чел оставайся в саду');
}
let obema = document.querySelector ('#obama');
obema.addEventListener("click", function(){
  let fink=document.querySelector ('input[name="chumacheche"]').value;
  console.log(fink);
  })
