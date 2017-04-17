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
span3.addEventListener('click',ocultar3);
span4.addEventListener('click',ocultar4);

function ocultar1(event){
  foto1.style.display="none";
  span1.style.display="none";
}

function ocultar2(event){
  foto2.style.display="none";
  span2.style.display="none";
}

function ocultar3(event){
  foto3.style.display="none";
  span3.style.display="none";
}

function ocultar4(event){
  foto4.style.display="none";
  span4.style.display="none";
}

var restaura=document.getElementById('restaurar');

restaura.addEventListener('click',function(){
  foto1.style.display="block";
  span1.style.display="block";
  foto2.style.display="block";
  span2.style.display="block";
  foto3.style.display="block";
  span3.style.display="block";
  foto4.style.display="block";
  span4.style.display="block";
});
//comienzan la interacción con los botones
var origen=document.getElementById('origen');
var parrafo1=document.getElementById('historiaP');
origen.addEventListener('click',function(){
    if(parrafo1.style.visibility=="hidden"){
    parrafo1.style.visibility="visible";
  } else {
    parrafo1.style.visibility="hidden";
  }
});

var historia=document.getElementById('historia');
var parrafo2=document.getElementById('origenP');
historia.addEventListener('click',function(){
    if(parrafo2.style.visibility=="hidden"){
    parrafo2.style.visibility="visible";
  } else {
    parrafo2.style.visibility="hidden";
  }
})
