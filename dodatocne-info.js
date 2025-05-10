// Escape znaky
let x = 'Moja veta x\'ta veta v stranke';
	// ak použijem rovnaké znaky napr.: '' alebo "" ako je v príklade,
	// tak MUSÍM použiť escape znak aby mi konzola nehlásila chybu
console.log(x)

//! Escape znaky:
	//	\\	backslash
	//	\n	new line
	//	\r	carriage return
	//	\t	tab
	//	\b	backspace
	//	\f	from feed

let clovek = {
	meno: '',
	nastavMeno: function (meno) {
		this.meno = meno;	//note this. preprezentuje objekt, ku ktorému pristupujem
	  //meno = meno;		//! !!!TENTO ZÁPIS JE NESPRÁVNY!!!
	}
}

clovek.nastavMeno('Tasi');
console.log(clovek.meno);
//------

document.getElementById('môjOdstavec').onclick = function () {
	this.style.color = "red";
	console.log(event.type);	//! !!!GLOBÁLNY EVENT SA UŽ NEPOUŽÍVA!!!
	event.preventDefault();
	event.target.parentNode.style.backgroundColor = 'black';	// targetujem rodičovský element	
}