console.log('Hola Carol!!')

const arreglo = [1, 2, 3, 4, 5]
arreglo.push(5)

const arreglo2 = [...arreglo]
arreglo2.push(6)

//Multiplicar los numeros de los arreglos por 2

const arreglo3 = arreglo2.map(function (n) {
  return n * 2
})
console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
