let quien = ["Mi perro", "Mi primo", "Mi gato", "Un Alien", "Mi cuñado"];
let accion = [
  "se comió",
  "me escondió",
  "destrozó",
  "se robó",
  "manipuló mentalmente"
];
let que = [
  "mi proyecto",
  "mi codigo",
  "mis llaves",
  "mi cargador",
  "mi portatil"
];
let cuando = [
  "justo cuando iba a terminar.",
  "al salir de casa.",
  "al llegar al trabajo.",
  "cuando ya estaba saliendo.",
  "cuando estaba de vacaciones."
];

function ElementoT(array) {
  let ElementoRamdom = array[Math.floor(Math.random() * array.length)];
  return ElementoRamdom;
}

function generarExcusa() {
  let quienRam = ElementoT(quien);
  let accionRam = ElementoT(accion);
  let queRam = ElementoT(que);
  let cuandoRam = ElementoT(cuando);

  return `${quienRam} ${accionRam} ${queRam} ${cuandoRam}`;
}

let refresh = document.getElementById("refresh");
refresh.addEventListener("click", _ => {
  location.reload();
});

window.onload = generarExcusa;

const generador_excusa = document.getElementById("excusa");
generador_excusa.textContent = generarExcusa();
