/* ===== ANIMACIÓN CUENTO ===== */

const story = document.getElementById("story");
const main = document.getElementById("mainContent");
const text = document.getElementById("storyText");

if(story){

  const messages = [
    "Había una vez…",
    "Una noche mágica ✨",
    "Una pequeña princesa que está por llegar 👑",
    "Nataly Samantha 💕"
  ];

  let i = 0;

  function nextMessage(){
    if(i < messages.length){
      text.innerText = messages[i];
      i++;
      setTimeout(nextMessage,2000);
    } else {
      story.style.opacity = "0";
      setTimeout(()=>{
        story.style.display = "none";
        main.classList.remove("hidden");
        petals();
      },1500);
    }
  }

  setTimeout(nextMessage,2000);
}

/* ===== LLUVIA DE PÉTALOS ===== */

function petals(){
  for(let i=0;i<30;i++){
    let p = document.createElement("div");
    p.className = "petal";
    p.style.left = Math.random()*100 + "%";
    p.style.animationDuration = (Math.random()*5+5)+"s";
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),8000);
  }
}

/* ===== BOTÓN WHATSAPP INTELIGENTE ===== */

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

  const numero = "5219511712247"; // <-- AQUÍ CAMBIA SI QUIERES OTRO

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.location.href = url;
}