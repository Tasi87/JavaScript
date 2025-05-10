//! Tieto funkcie zmenia string na number
parseInt()							// Int znamená Integer - celé číslo
parseFloat()

let x = parseFloat('1.1');
let y = parseInt('4');
console.log((y/x).toFixed(2));
//------

let i = "Tahssain";
console.log(i.length);				//note zráta počet znakov v slove
//------

let a = "Test dlhej vety pre testovanie";
a = a.replace('Test', 'Pokus');		//note .replace umožní nahradiť text v texte za iný
console.log(a);						//! .replace spraví iba raz náhradu nie za všetky slová Test
//------

let b = "Test dlhej vety pre testovanie.";
 b = b.toLowerCase().split('te').join('*');
console.log(b);
//------

let c = "          Test dlhej vety pre testovanie.          ";
console.log(c.length);			// zobrazí počet znakov S medzerami na začiatku aj na konci
console.log(c.trim().length)	// zobrazí počet znakov BEZ medzier na začiatku a na konci
//------

//! Orezávajú text, majú dva parametre.
//.substr()	//! už sa nepoužíva
//.substring()

let d = "Test dlhej vety pre testovanie.";
console.log(d.substr(2, 6));

let e = "Test dlhej vety pre testovanie.";
e = e.substring(10, 1);		// prvý parameter zobrazí počet prvých znakov
console.log(e)				// druhý parameter hovorí koľko znakov zoberie od začiatku
//------

let f = ['Jaro', 'Peter', 'Zdeno', 'Jaro'];
console.log(f.join(' - '));
let index = f.indexOf('Jaro');		// vyhľadá a zobrazí index
console.log(f[index]);

let g = ['Jaro', 'Peter', 'Zdeno'];
// let prvok = g.pop();			//note .pop odoberá prvky
// console.log(prvok);
// console.log(g.length);

let prvok = g.push("Eva");	//note .push pridáva prvky
console.log(g.length);
console.log(g.join(' - '));

let h = ['Jaro', 'Peter', 'Zdeno', 'Adam', 'Katka'];
h = h.sort();					//note zoradenie podľa abecedy
console.log(h.join(' - '));

let j = [10, 4, 7, 3, 1, 12];
j = j.sort();					//note tento zápis nevyhovuje pri číslach
console.log(j.join(' - '));

j = j.sort(function(a,b){return a - b});	//note tento zápis zoraďovania vyhovuje pri číslach
console.log(j.join(' - '));

let date = new Date();
console.log(date.toString());
console.log(date.toJSON());
// napr.: aj takto si viem vytiahnúť aktuálne časové dáta
	console.log(date.getFullYear());
	console.log(date.getMonth());
	console.log(date.getDay());
	console.log(date.getHours());
	console.log(date.getMinutes());
	console.log(date.getSeconds());
	console.log(date.getMilliseconds());

console.log(Math.ceil(4.1));	// zaokrúhlenie nahor
console.log(Math.floor(4.9));	// zaokrúhlenie nadol
console.log(Math.pow(2, 3));	// 3. mocnina
console.log(Math.random());		// náhodné číslo od 0 - 1
console.log(Math.round(4.4));	// matematické zaokrúhlenie
console.log(Math.round(4.5));	// matematické zaokrúhlenie

console.log(randomIntFromInterval(10, 20));
// náhodné číslo zo zvoleného rozsahu
function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}