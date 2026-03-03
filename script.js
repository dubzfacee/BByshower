const story = document.getElementById("story");
const main = document.getElementById("mainContent");
const text = document.getElementById("storyText");

const messages = [
  "Había una vez…",
  "En una noche muy estrellada ✨",
  "Una pequeña princesa que está por llegar 👑",
  "Nataly Samantha 💕"
];

let i=0;

function nextMessage(){
  if(i < messages.length){
    text.innerText = messages[i];
    i++;
    setTimeout(nextMessage,2000);
  } else {
    story.style.opacity="0";
    setTimeout(()=>{
      story.style.display="none";
      main.classList.remove("hidden");
      petals();
    },1500);
  }
}

setTimeout(nextMessage,2000);

/* LLUVIA DE PETALOS */
function petals(){
  for(let i=0;i<30;i++){
    let p=document.createElement("div");
    p.className="petal";
    p.style.left=Math.random()*100+"%";
    p.style.animationDuration=(Math.random()*5+5)+"s";
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),8000);
  }
}


/* FORMULARIO REAL */
document.getElementById("rsvpForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const data = {
    nombre: nombre.value,
    personas: personas.value,
    mensaje: mensaje.value
  };

  await fetch("PEGA_AQUI_TU_URL_DE_APPS_SCRIPT", {
    method:"POST",
    body: JSON.stringify(data)
  });

  this.classList.add("hidden");
  document.getElementById("thanks").classList.remove("hidden");
});
function sendWhatsApp(){

  const nombre = document.getElementById("nombre").value;
  const personas = document.getElementById("personas").value;
  const mensaje = document.getElementById("mensaje").value;

  if(!nombre || !personas){
    alert("Por favor completa nombre y número de personas 💕");
    return;
  }

  const hora = new Date().getHours();
  let saludo = "";

  if(hora < 12){
    saludo = "Buenos días";
  } else if(hora < 19){
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  let texto = `¡Hola! 💗 ${saludo}, soy ${nombre}. Confirmo mi asistencia con ${personas} personas al Baby Shower de Nataly Samantha 💕`;

  if(mensaje){
    texto += ` ${mensaje}`;
  }

  const numero = "5295126536904";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}