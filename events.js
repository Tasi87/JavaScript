//! Eventy
//note	-	sú akcie, ktoré sú zavolané pri napr.: načitaní stránky, kliknutí, scrolovaní, prejdení kurzoru nad nejaký element na stránke a pod.
//note	-	focus		(keď kliknem napr.: do textboxu - môžem vymazať nejaký obsah)
//note	-	keydown		(keď stlačím nejakú klávesu, môžem odchytiť akú klávesu si stlačil napr.: enter a podľa toho priradiť nejakú akciu)
//note	-	change		(pokiaľ niekto napr. zmení textbox napíše nejaký znak, tak sa vyvolá event)
//note	-	mouseenter	(hover alebo focus nad nejaký element)
//note	-	mouseleave	(odídem z elementu)
//note	-	click		(keď kliknem na element, tak sa spustí event)
							//idea	Všetky sa píšu s preficom "on"
						//	windows.onfocus				/	.onfocus				
						//	windows.onkeydown			/	.onkeydown
						//	windows.onchange			/	.onchange
						//	windows.onmouseenter		/	.onmouseenter
						//	windows.onmouseleave		/	.onmouseleave
						//	windows.onclick				/	.onclick

// window.onload = poNacitaniStranky;

// function poNacitaniStranky() {
// 	alert('stránka sa načítava');
// } //! toto nefungovalo

document.addEventListener('DOMContentLoaded', poNacitaniStranky);

function poNacitaniStranky() {
	alert('stránka sa načítava');
}

window.onresize = poZmeneVelkostiStranky;

function poZmeneVelkostiStranky() {
	alert ('zmenšenie/zväčšenie stránky');
}

window.onscroll = poScrollovaniStranky;

function poScrollovaniStranky() {
	alert ('scroll stránky');
}