let nomeHeroi = "Luciano";
let nivelHeroi = "";
let expHeroi = 1000;

for (let expHeroi = 0; expHeroi <= 10001; ) {
  expHeroi += 1000;
  if (expHeroi <= 1000) {
    nivelHeroi = "Ferro";
  } else if (expHeroi <= 2000) {
    nivelHeroi = "Bronze";
  } else if (expHeroi <= 5000) {
    nivelHeroi = "Prata";
  } else if (expHeroi <= 7000) {
    nivelHeroi = "Ouro";
  } else if (expHeroi <= 8000) {
    nivelHeroi = "Platina";
  } else if (expHeroi <= 9000) {
    nivelHeroi = "Ascendente";
  } else if (expHeroi <= 10000) {
    nivelHeroi = "Imortal";
  } else if (expHeroi) {
    nivelHeroi = "Radiante";
  }
  console.log("O heroi " + nomeHeroi + " completou uma missão.");
  console.log("O heroi " + nomeHeroi + " esta no nivel " + nivelHeroi + ".");
}
