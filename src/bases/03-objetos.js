const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
};

/*const persona2 = persona
persona2.nombre = 'Peter'
hace referencia al espacio de memoria de persona. Cualquier modificacion que sufra perosna2, también lo va a hacer persona. 
*/

//Operador spread
const persona2 = { ...persona };
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);
