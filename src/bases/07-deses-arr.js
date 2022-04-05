/**
 * Desestructuracion de arrays
 */

const characters = ['Goku', 'Vegeta', 'Trunks'];

//const goku = characters[0] -> Forma antigua

/**
 * Se necesitan corchetes
 * El nombre es indifirente
 * El orden de asignacion es muy importante*/
const [g, v, t] = characters;

// Si solo quiero tomar un valor
const [, , trunks] = characters;
const [, vegeta] = characters;

// Establecer un valor por defecto
const [goku, vg, tr, goten = 'No tiene valor'] = characters;

/**
 * Desestructuracion de Arrays en funciones
 */
//Forma 1
const returnArray = (arreglo) => {
  return ['ABC', 123];
};

const [letters, numbers] = returnArray();

// Forma 2
const returnArray2 = ([letters, numbers]) => {
  return [letters, numbers];
};
const [letras, numeros] = returnArray(['XYZ', 987]);
