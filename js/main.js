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
  document.querySelector(".info-text .placeholder").textContent = "Er du lige flyttet ind i din første lejlighed og allerede er overvældet over alle de praktiske ting, der følger med? Og er særligt strøm en uoverskuelig opgave? Så er denne guide alt, du har brug for! Men først: ingen stress. Du er hverken den første eller den eneste, der synes, det er svært at forstå strøm. At bestille strøm første gang kan hurtigt virke forvirrende, men hvis du tager det trin for trin, er det faktisk ret simpelt. Det vigtigste er, at du bevarer overblikket, sætter dig lidt ind i det og træffer dine valg ud fra viden.";
  document.querySelector("#efficiency").textContent = "Nødsituation";
  document.querySelector("#requirement").textContent = "Nødsituation";
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
  document.querySelector(".info-text .placeholder").textContent =
    "Start med at tjek om der allerede er strøm i din lejlighed og beregn, hvor meget el du forventer at bruge månedligt. Derefter skal du finde forskellige elselskaber og sammenligne dem. Ta’ dig god tid og tænk dig om inden du bestiller noget. Når du har taget en beslutning, tilmelder du online på selskabets hjemmeside eller ved at ringe til dem - og så skulle du gerne have strøm! Det kan være fristende bare at vælge noget hurtigt eller lytte til, hvad andre siger på sociale medier. Men her er det vigtigt, at du stopper op. Din mavefornemmelse er ikke nok og TikTok er ikke en pålidelig kilde. Du bør i stedet sammenligne de forskellige el-aftaler, læse vilkår/betingelser og vær opmærksom på bindingsperioder. En god huskeregel: Hvis et tilbud virker for godt til at være sandt – så er det det ofte.";
  document.querySelector("#efficiency").textContent = "Nødsituation";
  document.querySelector("#requirement").textContent = "Nødsituation";
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
  document.querySelector(".info-text .placeholder").textContent =
    "Når du skal bestille strøm, du skal kende forskel på to ting; el-leverandør og netselskab. El-leverandør er det firma, du køber din strøm fra. Netselskab er det firma, der ejer elnettet og sørger for, at strømmen kommer frem. Du vælger selv din el-leverandør, men du kan ikke selv vælge netselskab. Der findes forskellige typer el-aftaler. Det er vigtigt at vælge en løsning, du forstår, og som passer til dine behov. “Variabel pris” er når prisen ændrer sig løbende. Det er ofte billigere på sigt, men kan svinge. “Fast pris” er når prisen er den samme i en periode. Det giver tryghed, men kan være dyrere.Når du sammenligner el-selskaber, så vær opmærksom på: Spotpris + tillæg, abonnement, oprettelsesgebyr og bindingsperiode. Det billigste tilbud er ikke altid det bedste – kig på det hele.";
  document.querySelector("#efficiency").textContent = "Nødsituation";
  document.querySelector("#requirement").textContent = "Nødsituation";
  document.querySelector(".info-text").classList.remove("hide");
  document.querySelector(".info-text").classList.add("fadeIn");
}
