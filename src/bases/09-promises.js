/*
console.log('Inicio');
new Promise((resolve, reject) => {
  console.log('Cuerpo de la promesa');
  //Resolve -> si todo sale bien
  resolve('Promesa resuelta');
  //Reject -> si hay algun error
  //reject('Promesa resuelta con error');
})
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
//también podría ser .catch(console.log) y sería exactamente el mismo codigo

console.log('Fin');
*/

import { getHeroById } from '../bases/08-imp-exp';

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroById(id);

      if (heroe) {
        resolve(heroe);
      } else {
        reject('El heroe no existe');
      }
    }, 1000);
  })
    .then((msg) => {
      console.log(msg);
    })
    .catch((err) => console.log(err));
};

getHeroByIdAsync(1);
