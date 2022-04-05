const nombre = 'Fernando';
const apellido = 'Herrera';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(`${nombreCompleto}`);

console.log(`Esto es un texto: ${getName(nombre)}`);

function getName(name) {
  return 'Hola ' + name;
}
