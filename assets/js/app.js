var divs=document.getElementsByClassName('divs');
var images=document.getElementById('images');
var restaura=document.getElementById('restaurar');
var origen=document.getElementById('origen');
var parrafo1=document.getElementById('historiaP');
var historia=document.getElementById('historia');
var parrafo2=document.getElementById('origenP');

function ocultar(event){
  if(event.target.tagName=="SPAN"){
  // console.log(event.target.id);
  switch (event.target.id) {
    case "p1":
      divs[0].style.display="none";
      break;
    case "p2":
      divs[1].style.display="none";
      break;
    case "p3":
      divs[2].style.display="none";
      break;
    case "p4":
      divs[3].style.display="none";
      break;
    }
  }
}

restaura.addEventListener('click',function(){
  for(var i=0;i<4;i++){
    divs[i].style.display="inline-block";
  }

});
//comienzan la interacción con los botones

origen.addEventListener('click',function(){
    if(parrafo1.style.visibility=="hidden"){
    parrafo1.style.visibility="visible";
  } else {
    parrafo1.style.visibility="hidden";
  }
});

historia.addEventListener('click',function(){
    if(parrafo2.style.visibility=="hidden"){
    parrafo2.style.visibility="visible";
  } else {
    parrafo2.style.visibility="hidden";
  }
})
images.addEventListener('click',ocultar);
