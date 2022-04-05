//1. Exportar -> export const owners = ['DC', 'Marvel'];
//2. Importar
//Forma 1
import { owners } from '../data/heroes';
//Forma 2 -> export default, se puede asignar un nombre inventado
import superHeroes from '../data/heroes';

//console.log(superHeroes);

/**
 * Exportar funciones
 */

export const getHeroById = (id) => superHeroes.find((heroe) => heroe.id === id);

//console.log(getHeroById(2));

export const getHeroesByOwner = (ownerName) =>
  superHeroes.filter((heroe) => heroe.owner === ownerName);

//console.log(getHeroesByOwner('DC'));

/**
 * import { getHeroById, getHeroesByOwner } from './bases/08-imp-exp';
 * console.log(getHeroById(2));
 * console.log(getHeroesByOwner('DC'));
 */
