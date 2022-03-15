//1.
const spanMessWithMe = document.querySelector('.mess-with-me');
spanMessWithMe.style.fontSize = '40px';
//2.
const pMessWithMe = document.querySelector('p.mess-with-me');
pMessWithMe.style.backgroundColor = 'green';
//3.
const hide2Image = document.querySelector('#hide-me');
hide2Image.style.display = 'none';
//4.
const firstImage = document.querySelector("#triceratops");
firstImage.style.width = '324px';
//Event Listener Challenges
//1.
const makeOrange = function(){
if (spanMessWithMe.style.color===''){spanMessWithMe.style.color = 'orange';}else{
    spanMessWithMe.style.color = '';
}

};

spanMessWithMe.addEventListener('click',makeOrange);
//2.
const redBorder = function(){
  if  (firstImage.style.border==='') {firstImage.style.border = 'thin dotted red';}
  else{firstImage.style.border = '';}
};
firstImage.addEventListener('click', redBorder);
//3.
const featherDino = document.querySelector('#feathers')
const halfTranny = function(){
  if (featherDino.style.opacity==='1'){featherDino.style.opacity = '0.5';}
  else{featherDino.style.opacity='1'}
};
featherDino.addEventListener('click',halfTranny);
//4.
const button = document.querySelector('#toggle');
const picRow= document.querySelector('#row');
const changeBackgroundColor = function(){
  if(picRow.style.backgroundColor === ''){
  picRow.style.backgroundColor = 'blue';
  } else if (picRow.style.backgroundColor === 'blue'){
    picRow.style.backgroundColor = '';
  }
};

button.addEventListener('click', changeBackgroundColor);
//5.
biggy = document.querySelector('#biggify');
biggy2 = document.querySelector('#biggify');
const hoverGrow = function(){
  biggy.style.width = '200px';
};

const hoverunGrow = function(){
  biggy.style.width = '162px';
};

biggy.addEventListener('mouseover',hoverGrow);
biggy2.addEventListener('mouseleave',hoverunGrow);







