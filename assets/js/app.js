
var div1=document.getElementById('div1');
var div2=document.getElementById('div2');
var div3=document.getElementById('div3');
var div4=document.getElementById('div4');

var images=document.getElementById('images');
images.addEventListener('click',ocultar);

function ocultar(event){
  if(event.target.tagName=="SPAN"){
  // console.log(event.target.id);
  switch (event.target.id) {
    case "p1":
      div1.style.display="none";
      break;
    case "p2":
      div2.style.display="none";
      break;
    case "p3":
      div3.style.display="none";
      break;
    case "p4":
      div4.style.display="none";
      break;
    }
  }
}

var restaura=document.getElementById('restaurar');
restaura.addEventListener('click',function(){
  var divs=document.getElementsByClassName('divs');
  for(var i=0;i<4;i++){
    divs[i].style.display="inline-block";
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
