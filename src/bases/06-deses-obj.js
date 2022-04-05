const person = {
  name: 'Tony',
  age: 45,
  codeName: 'Ironman',
};

/*JavaScript crea unas constantes que están dentro de las llaves. 
Usualmente suelen llevar el mismo nombre que dentro del objeto. El orden no importa, si estamos Desestructurando un objeto.
Se pueden añadir constantes e inicializarlas*/

const { age, name, codeName, power = 'No tiene poder' } = person;

/**
 * Desestructuracion en funciones
 */

const createHero = ({ name, age, codeName, power = 'Dinero' }) => ({
  id: 1,
  name, // no hace falta poner name: name -> es más facil simplemente hacer referencia a la constante name que creamos con la desestructuracion
  age,
  codeName,
  power,
});
console.log(createHero(person));
