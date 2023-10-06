let who = ["Mi perro", "Mi primo", "Mi gato", "Un Alien", "Mi cuñado"];
let action = [
  "se comió",
  "me escondió",
  "destrozó",
  "se robó",
  "manipuló mentalmente"
];
let what = [
  "mi proyecto",
  "mi codigo",
  "mis llaves",
  "mi cargador",
  "mi portatil"
];
let when = [
  "justo cuando iba a terminar.",
  "al salir de casa.",
  "al llegar al trabajo.",
  "cuando ya estaba saliendo.",
  "cuando estaba de vacaciones."
];
function bringRamdomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function excuseGenerator() {
  return `${bringRamdomElement(who)} ${bringRamdomElement(
    action
  )} ${bringRamdomElement(what)} ${bringRamdomElement(when)}`;
}
let refreshPage = document.getElementById("refresh");
refreshPage.addEventListener("click", _ => {
  location.reload();
});
window.onload = excuseGenerator;
const generador_excusa = document.getElementById("excusa");
generador_excusa.textContent = excuseGenerator();
