const miPromesa = () => {
  return new Promise((resolve, reject) => {
    //Devuelve una promesa al igual que una funcion asyncrona
    setTimeout(() => {
      //resolve('Tengo un valor en la promesa');
      reject('Tengo un error en la promesa');
    }, 1000);
  });
};

//Funcion asincrona -> hay que poner async en la funcion
const medirTiempoAsync = async () => {
  try {
    console.log('Inicio');
    //El await va a hacer que la funcion medirTiempoAsync espere hasta que miPromesa() sea resuelta
    const respuesta = await miPromesa(); //lo que sea que sea devuelto desde miPromesa() va a ser almacenado en la variable respuesta.
    console.log(respuesta);
    console.log('Fin');
    //return 'fin de medir tiempo async';
    //throw 'Error en medirTiempoAsync';
  } catch (error) {
    //return 'catch en medirTiempoAsync';
    throw 'Error en medirTiempoAsync';
  }
};

medirTiempoAsync()
  .then((valor) => console.log(valor))
  .catch((err) => console.log(err));
