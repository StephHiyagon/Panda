var foto1=document.getElementById('panda1');
var foto2=document.getElementById('panda2');
var foto3=document.getElementById('panda3');
var foto4=document.getElementById('panda4');

var span1=document.getElementById('p1');
var span2=document.getElementById('p2');
var span3=document.getElementById('p3');
var span4=document.getElementById('p4');

var images=document.getElementById('images');
images.addEventListener('click',ocultar);

function ocultar(event){
  if(event.target.tagName=="SPAN"){
  // console.log(event.target.id);
  switch (event.target.id) {
    case "p1":
      foto1.style.display="none";
      span1.style.display="none";
      break;
    case "p2":
      foto2.style.display="none";
      span2.style.display="none";
      break;
    case "p3":
      foto3.style.display="none";
      span3.style.display="none";
      break;
    case "p4":
      foto4.style.display="none";
      span4.style.display="none";
      break;
    }
  }
}

var restaura=document.getElementById('restaurar');
restaura.addEventListener('click',function(){
  var foto=document.getElementsByClassName('fotos');
  var span=document.getElementsByClassName('span');
  for(var i=0;i<4;i++){
    foto[i].style.display="block";
    span[i].style.display="block";
  }

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
