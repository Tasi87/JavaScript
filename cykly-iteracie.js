//note Cykly alebo Iterácie
//		-	while
//		-	do while
//		-	for
// note	-	pomáhajú opakovať konkrétnu operáciu viackrát po sebe (napr.: pomkliknutí vloží obrázok 10x do stránky)

//! while
// najjednoduchšia iterácia

var x = 0; // var môže byť aj let

while (x < 5) {
	console.log("premena x je: " + x);

	x += 1;		 //note toto je inkrement, x zvyšuje o 1 (možný zápis x++;)
	// x -= 1;	 //note toto je dekrement, x zmenšuje o 1 (možný zápis x--;)
}

//! do while
// veľmi podobná iterácia ako while, kde sa najprv vykoná do a potom while
var x = 0;

do {
	console.log("premena x je: " + x);
	x++;
} while (x < 5);

//! for

for (let index = 0; index < 5; index++) {
	console.log("premena x je: " + index);	
}

// while, do while a for v podstate riešia to isté.