const metodos = ["V60", "Kioto drip", "Siphon", "Prensa francesa" ];
for ( const  metodo of metodos) {
    console.log (metodo) ;
}
    console.log ("fin del programa") 
  // ejemplo de bucle de reservas en un día

const reservasDelDia = [2, 1, 2, 1, 2];
let totalTazas = 0;

for (const cantidad of reservasDelDia) {
  totalTazas = totalTazas + cantidad;
}

// ejemplo de un for que corre pero no hace lo que queremos

// for (const cantidad of reservasDelDia) {
//   totalTazas = cantidad;
// }

console.log(totalTazas)  

function calcularPrecio(precioUnitario, cantidad) {
  const total = precioUnitario * cantidad;
  return total;
}

console.log(calcularPrecio(5, 2));
console.log(calcularPrecio(3, 4));
console.log(calcularPrecio(7, 1));


// una función que decide

function puedeReservar(cantidad) {
  if (cantidad <= 2) {
    return true;
  } else {
    return false;
  }
}

if (puedeReservar(2)) {
  console.log("Reserva confirmada");
} else {
  console.log("Lo siento, máximo 2 tazas por persona");
}