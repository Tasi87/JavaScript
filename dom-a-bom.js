//!	BOM
//	-	Browser Object Model
//	-	je to window (prehliadač)
// alert('Výška je: ' + window.innerHeight + ' a šírka je: ' + window.innerWidth);

//!	DOM
//	-	Document Object Model
//	-	je to moje HTML (zdrojový kód, s ktorým môžem manipulovať)
let testFarbyNadpisu = document.getElementById("nadpis");
//note odchytí dokument podľa id, uloží ho do premenej testFarby, ktorou môžem manipulovať.
//idea let testFarby = window.document.getElementById("môjOdstavec"); môžem volať aj takýmto zápisom, pretože document je aj súčasť window objektu.

testFarbyNadpisu.style.color = "red";
//note zmením napr. farbu textu.
testFarbyNadpisu.style.fontWeight = "bold";
//note zmením hrúbku textu atď.
testFarbyNadpisu.style.fontSize = "40px";

document.getElementById("nadpis").onclick = zmenFarbuNadpisu;
//note po kliknutí spustí fukciu zmenFarbu, pretože fukcia je viazaná na onclick.

function zmenFarbuNadpisu() {
	let testFarbyNadpis = document.getElementById("nadpis");
	testFarbyNadpis.style.color = "#bada55"
}

//idea Ak chcem meniť viacero vlastností, tak je dobré objekt uložiť do nejakej premenej a potom ho používať:

let odstavec = document.getElementById("môjOdstavec");
odstavec.onclick = zmenFarbu;

function zmenFarbu() {
	odstavec.style.color = "blue";
	odstavec.style.fontSize = "28px";
	odstavec.innerHTML = "Zmena vety";
//note viem meniť rôzne parametre
}

let pridaniePodNadpisu = document.getElementById("nadpis");
pridaniePodNadpisu.onclick = pridajVetu;

function pridajVetu() {
	let podNadpis = document.createElement("h2");
	podNadpis.innerHTML = "Toto je Podnadpis";
	document.body.appendChild(podNadpis);
}