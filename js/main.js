// alert("gem");

/***************** Hotstop 3 *******************/
document.querySelector("#_3").addEventListener("mouseover", mouseoverHead_3);
function mouseoverHead_3() {
  console.log("mouseoverHead_3");
  document.querySelector("#_3").style.fill = "red";
}

document.querySelector("#_3").addEventListener("mouseout", mouseoutHead_3);
function mouseoutHead_3() {
  console.log("mouseoutHead_3");
  document.querySelector("#_3").style.fill = "#354698";
}

document.querySelector("#_3").addEventListener("click", clickHead_3);
function clickHead_3() {
  console.log("clickHead_3");
  document.querySelector(".info-text h2").textContent = "Nødsituationen";
  document.querySelector(".info-text .placeholder").textContent = "Er du lige flyttet ind i din første lejlighed og allerede er overvældet over alle de praktiske ting, der følger med? Og er særligt strøm en uoverskuelig opgave? Så er denne guide alt, du har brug for! Men først: ingen stress. Du er hverken den første eller den eneste, der synes, det er svært at forstå strøm. At bestille strøm første gang kan hurtigt virke forvirrende, men hvis du tager det trin for trin, er det faktisk ret simpelt. Det vigtigste er, at du bevarer overblikket, sætter dig lidt ind i det og træffer dine valg ud fra viden - og ikke stress.";
  document.querySelector("#efficiency").textContent = "Hoved er vigtig lksfåowjgsoifhri appohrowhråohvskr iahfehoåqfh";
  document.querySelector("#requirement").textContent = "Hoved er vigtig lksfåowjgsoifhri appohrowhråohvskr iahfehoåqfh";
  document.querySelector(".info-text").classList.remove("hide");
  document.querySelector(".info-text").classList.add("fadeIn");
}
document.querySelector(".info-text").addEventListener("animationend", clear);
function clear() {
  document.querySelector(".info-text").classList.remove("fadeIn");
}

/***************** Hotstop 2 *******************/
document.querySelector("#_2").addEventListener("mouseover", mouseoverHead_2);
function mouseoverHead_2() {
  console.log("mouseoverHead_2");
  document.querySelector("#_2").style.fill = "red";
}

document.querySelector("#_2").addEventListener("mouseout", mouseoutHead_2);
function mouseoutHead_2() {
  console.log("mouseoutHead_2");
  document.querySelector("#_2").style.fill = "#354698";
}

document.querySelector("#_2").addEventListener("click", clickHead_2);
function clickHead_2() {
  console.log("clickHead_2");
  document.querySelector(".info-text h2").textContent = "Praksis";
  document.querySelector(".info-text .placeholder").textContent = "El-aftale: Der findes forskellige typer el-aftaler. Det er vigtigt at vælge en løsning, du forstår, og som passer til dine behov. “Variabel pris” er når prisen ændrer sig løbende. Det er ofte billigere på sigt, men kan svinge. “Fast pris” er når prisen er den samme i en periode. Det giver tryghed, men kan være dyrere.";
  document.querySelector("#efficiency").textContent = "Hoved er vigtig lksfåowjgsoifhri appohrowhråohvskr iahfehoåqfh";
  document.querySelector("#requirement").textContent = "Hoved er vigtig lksfåowjgsoifhri appohrowhråohvskr iahfehoåqfh";
  document.querySelector(".info-text").classList.remove("hide");
  document.querySelector(".info-text").classList.add("fadeIn");
}

// /***************** Hotstop 1 *******************/
document.querySelector("#_1").addEventListener("mouseover", mouseoverHead_1);
function mouseoverHead_1() {
  console.log("mouseoverHead_1");
  document.querySelector("#_1").style.fill = "red";
}

document.querySelector("#_1").addEventListener("mouseout", mouseoutHead_1);
function mouseoutHead_1() {
  console.log("mouseoutHead_1");
  document.querySelector("#_1").style.fill = "#354698";
}

document.querySelector("#_1").addEventListener("click", clickHead_1);
function clickHead_1() {
  console.log("clickHead_1");
  document.querySelector(".info-text h2").textContent = "Viden";
  document.querySelector(".info-text .placeholder").textContent = "El-aftale: Der findes forskellige typer el-aftaler. Det er vigtigt at vælge en løsning, du forstår, og som passer til dine behov. “Variabel pris” er når prisen ændrer sig løbende. Det er ofte billigere på sigt, men kan svinge. “Fast pris” er når prisen er den samme i en periode. Det giver tryghed, men kan være dyrere. ";
  document.querySelector("#efficiency").textContent = "Hovedet er vigtig fordi 2";
  document.querySelector("#requirement").textContent = "Hovedet er vigtig fordi 3 ";
  document.querySelector(".info-text").classList.remove("hide");
  document.querySelector(".info-text").classList.add("fadeIn");
}
