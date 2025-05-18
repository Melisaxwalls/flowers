// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No se que pasa, te veo. No se me pasa, te deseo.", time: 21 }, 
  { text: "Llevo tatuado tu aroma entero.", time: 23 },
  { text: "Mientras caminas yo te espero. Y no, no, no lo creo.", time: 28 },
  { text: "Que bien tú y yo nos vemos. Tú y yo nos", time: 33 },
  { text: "vemos,", time: 34 },
  { text: "yeah.", time: 36},
  { text: "Te estoy esperando ", time: 37 },
  { text: "baby, dime donde.", time: 39 },
  { text: "No lo pidas, llevo flores. Mereces flores.", time: 44 },
  { text: "Te estoy esperando. Perfuma mi cuerpo.", time: 50 },
  { text: "Y que luego te hable.", time: 52 },
  { text: "De lo que yo", time: 53 },
  { text: "no cuento.", time: 54 },
  { text: "Te estoy esperando. Perfuma mi cuerpo.", time: 60 },
  { text: "Y que luego te ", time: 61 },
  { text: "hable. De lo que yo ", time: 63 },
  { text: "no cuento.", time: 64 },
  { text: "Te estoy esperando ho-hoy. Quiero", time: 69 },
  { text: " verte hoy. Préstame tus besos.", time: 73 },
  { text: "Los devuelvo luego.", time: 75 },  
  { text: "Sigo pensando qué flores llevar. Dime dónde las paso a dejar. ", time: 80 },
  { text: "Le llevo una flor a tu mamá.", time: 83 },
  { text: "Para agradecer que te vino ", time: 84 },
  { text: "a crear. Sólo quiero complacerla. Que se sienta", time: 89 },
  { text: "toda una reina.", time: 90 }, 
  { text: "Que yo me muero si me besa.", time: 92 },
  { text: "Le doy mi", time: 93 },
  { text: "vida,", time: 94 },
  { text: " si usted me deja.", time: 95 },
  { text: "Te estoy esperando baby, dime dónde.", time: 101 },
  { text: "Llevo flores,", time: 103 },
  { text: "mereces flores.", time: 104 },
  { text: "No sé qué pasa, yeah. No sé qué pasa, te veo.", time: 111 },
  { text: "No se me pasa, te deseo. Llevo tatuado tu aroma entero,", time: 115 },
  { text: " mientras caminas... Te estoy esperando.", time: 119 },
  { text: "Perfuma mi cuerpo. Y que luego te hable.", time: 125 },
  { text: "De lo que yo no", time: 126 },
  { text: "cuento.", time: 127 },
  { text: "Te estoy esperando", time: 129 },
  { text: "ho-hoy. ", time: 130 },
  { text: "Quiero verte ", time: 132 },
  { text: "hoy. Préstame tus besos. Los devuelvo ", time: 137 },
  { text: "luego.", time: 138 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);