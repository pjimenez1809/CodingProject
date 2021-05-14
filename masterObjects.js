const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


const pokDiv3 = pokémon.filter(function (item) {
    return item.id %3 ===0; // == "Joe";   //&& item.age < 30;
});

console.log(pokDiv3);


const pokTypeFire = pokémon.filter(function (item) {
    return item.types.includes("fire");
});

console.log(pokTypeFire);



const pokTiposPlus = pokémon.filter(function (item) {
    return item.types.length > 1;
});

console.log(pokTiposPlus);


const pokname= pokémon.map(item => item.name);

console.log(pokname);


const pok99 = pokémon.filter(item => item.id>99).map(item => item.name);
console.log(pok99);

const pokveneno = pokémon.filter(item => item.types.includes("poison") && item.types.length===1).map(item => item.name);
console.log(pokveneno);


const pokflying = pokémon.filter(item => item.types[1]==="flying").map(item => item.types[0]);

console.log(pokflying);

const pokcount = pokémon.filter(item => item.types.includes("normal")).length;

console.log(pokcount);

/* Usando la matriz de Pokémon anterior, encuentre lo siguiente:
    Una serie de objetos Pokémon donde la identificación es divisible por 3   ok
    una serie de objetos Pokémon que son del tipo "fuego"                     ok
    Una variedad de objetos Pokémon que tienen más de un tipo
    una matriz con solo los nombres de los Pokémon
    Una matriz con solo los nombres de Pokémon con una identificación mayor que 99
    una matriz con solo los nombres del pokémon cuyo único tipo es veneno
    una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
    un recuento de la cantidad de pokémon que son de tipo "normal"
*/    






