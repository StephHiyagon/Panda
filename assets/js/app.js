var foto1=document.getElementById('panda1');
var foto2=document.getElementById('panda2');
var foto3=document.getElementById('panda3');
var foto4=document.getElementById('panda4');

var span1=document.getElementById('p1');
var span2=document.getElementById('p2');
var span3=document.getElementById('p3');
var span4=document.getElementById('p4');

span1.addEventListener('click',ocultar1);
span2.addEventListener('click',ocultar2);

function ocultar1(event){
  foto1.style.display="none";
  span1.style.display="none";
}

function ocultar2(event){
  foto2.style.display="none";
  span2.style.display="none";
}
