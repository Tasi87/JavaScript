let a = 1.1 * 1.1;
console.log(a.toFixed(2));			//! a.toFixed(2) toto sa volá zreťazovanie
//note	.toFixed je na zaokrúhľovanie čísel. Používa sa za premennou.
//------

let b = 1;		// number
let c = "1";	// string
console.log(b.toString() === c);	//! b.toString() toto sa tiež volá zreťazovanie
//note	.toString konvertuje number do string. Používa sa za premennou.
//------

let d = "text";
// NaN = IS NOT A NUMBER
if(isNaN(d)) {
	console.log('premenná d nie je číslo');
} else {
	console.log('d je číslo')
}
//------

let e = 1.2;
//note	.isInteger	-	sú celé čísla
//note	float		-	sú desatiné alebo reálne čísla
if(!isNaN(e)) { // tu sa zisťuje, či e je číslo pomocou "!"
				// ak je e číslo pokračuje v tejto vetve
	if (Number.isInteger(e)) {
		console.log('premenná e je integer');
	} else {
		console.log('premenná e je float');
	} 
}else {			// ak e nie je číslo, prebehne táto podmienka.
	console.log('premenná e nie je číslo');
}
//------
let x = 0;
if(x == 1) {} 		//!	ak x sa rovná 1
if(x != 1) {} 		//!	ak x sa nerovná 1
if(isNaN(x)) {} 	//!	ak x nie je číslo
if(!isNaN(x)) {}	//!	ak x je číslo
//------

x.toFixed(2).toString();	//! toto je spôsob zmeny number na string!
isNaN(x);
Number.isInteger(x);
//------

let z = 'test';

console.log(isNaN(z));			//	true	-	x nie je číslo 	-	pravda
console.log(Number.isNaN(z));	//	false	-	