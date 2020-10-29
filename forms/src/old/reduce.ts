const numeros = [10, 20 ,30 ,40 ,50]

const total = numeros.reduce((acc, item) =>{

  //console.log("Acululador: ", acc);
  //console.log("Item atual: ", item);
  //console.log("----");
  return acc + item;

});

//console.log(total);

const pokemons = [
  {
    name: 'Pikachu',
    type: 'eletric'
  },
  {
    name: 'Squirtle',
    type: 'water'
  },
  {
    name: 'Magikarp',
    type: 'water'
  }
];

// Reduce serve para transformar array em outras coisas!
const pokemonsPorTipo = pokemons.reduce((acc, item)=>{


  acc[item.type] = acc[item.type] || [];
  acc[item.type].push(item);

  return acc;

}, {});

console.log(pokemonsPorTipo);
