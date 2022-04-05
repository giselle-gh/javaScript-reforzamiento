const nombre = 'Tony';
//Forma tradicional
function saludar(name) {
  return `Hola ${name}`;
}

/*Otra forma de crear la funcion
Evita que la funcion saludar se cambie por otro valor. Ej:
saludar = true;
Devolveria true y no la function*/
const saludame = function (name) {
  return `Hola ${name}`;
};

//Funciones de flecha
const saludameOtraVez = (name) => {
  return `Hola ${name} otra vez`;
};

console.log(saludar(nombre));
console.log(saludame(nombre));
console.log(saludameOtraVez(nombre));

//Devuelve un objeto
const getUser = () => ({
  uid: 'ABC123',
  username: 'Tony001',
});

console.log(getUser());

const heroes = [
  {
    id: 1,
    name: 'Batman',
  },
  {
    id: 2,
    name: 'Superman',
  },
];

//Verificar si alguien tiene el id 1, si existe true, else false
const existe = (objetos, id) => {
  return objetos.some((dataObjeto) => id === dataObjeto.id);
};
console.log(existe(heroes, 1));

//Otra forma de buscar por id, devuele todo el nombre
const heroe = heroes.find((heroe) => heroe.id === 1);
console.log(heroe.name);

// Desestructurando el objeto. Name devuelve Batman
const { name } = heroes.find((heroe) => heroe.id === 1);
console.log(name);
