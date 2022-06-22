/* BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente. */
const allIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// mi richiamo la funzione che cambia i colori delle icone
allIcons.forEach((element) => {
	element.color = generateColor();
});

const iconsContainer = document.querySelector('.icons-container');

// chiamo la funzione per stampare in pagina le card con le icone
printCards(allIcons, iconsContainer);

const selectCategory = document.getElementById('category');

// al cambio option sulla select, vengono filtrate le icons con il type scelto
selectCategory.addEventListener('change', function() {

	const currentValue = this.value;

	// svuoto l'iconsContainer ad ogni cambio opzione
	iconsContainer.innerHTML = '';

	//SE l'opzione è diversa da 'all' filtriamo gli elementi
	//ALTRIMENTI stampo tutte le card
	if(currentValue !== 'all') {
		const filteredArray = allIcons.filter((element) => {
			return element.type === currentValue;
		})	

		// e stampiamo in pagina solo quelli con il type scelto
		printCards(filteredArray, iconsContainer)
	} else {
		printCards(allIcons, iconsContainer)
	}
})

/************
* FUNCTIONS *
*************/

// funzione che stampa la card
function printCards (array, container) {
	array.forEach((element) => {
		const {name, prefix, type, family, color} = element;
	
		const newCard = 
		`<div class="card">
			<i class="${family} ${prefix}${name}" style="color: ${color};"></i>
			<span>${name}</span>
		</div>`;
	
		container.innerHTML += newCard;
	});
}

// funzione che genera i colori casuali
function generateColor() {
	// #1b2b3a
	let color = '#'
	const char = '0123456789abcdef';

	for(let i = 0; i < 6; i++) {
		const randomIndex = getRndInteger(0, char.length - 1);

		const randomChar = char[randomIndex];

		color += randomChar;
	}
	return color;
}

// funzione che genera un numero casuale
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
};
