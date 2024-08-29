alert('Este es nuestra guia para su vehiculo');
function registroUsuario() {
    let registro;
    do {
        registro = prompt('¿Usted tiene vehiculo? Ingrese SI o NO').toUpperCase();
        
        while (registro !== 'SI' && registro !== 'NO') {
            alert('Debe ingresar SI o NO');
            registro = prompt('¿Usted tiene vehiculo? Ingrese SI o NO').toUpperCase();
        }

        if (registro === "SI") {
            alert('Excelente, indiquenos que tipo de combustible usa su vehiculo');
        } else {
            alert('Gracias por usar nuestro servicio');
        }

    } while (registro === "NO");
}

registroUsuario();

// TIPOS DE COMBUSTIBLES - PRECIO
const combustibles = [
    {
      tipo: "nafta",
      eess: [
        {
          nombre: "ypf",
          categorias: [
            { nombre: "super", precio: 200 },
            { nombre: "infinia", precio: 400 },
          ],
        },
        {
          nombre: "shell",
          categorias: [
            { nombre: "super", precio: 350 },
            { nombre: "vpower", precio: 550 },
          ],
        },
        {
          nombre: "axion",
          categorias: [
            { nombre: "super", precio: 600 },
            { nombre: "cuantium", precio: 700 },
          ],
        },
      ],
    },
    {
      tipo: "diesel",
      eess: [
        {
          nombre: "ypf",
          categorias: [
            { nombre: "diesel", precio: 200 },
            { nombre: "infiniadiesel", precio: 400 },
          ],
        },
        {
          nombre: "shell",
          categorias: [
            { nombre: "evolux", precio: 350 },
            { nombre: "vpowerdiesel", precio: 550 },
          ],
        },
        {
          nombre: "axion",
          categorias: [
            { nombre: "diesel", precio: 600 },
            { nombre: "cuantiumdiesel", precio: 700 },
          ],
        },
      ],
    },
  ];
  

function seleccionarCombustible() {
    let combustibleElegido = prompt('Ingrese tipo de combustible. Ej: Nafta o Diesel.').toLowerCase();
    while (combustibleElegido !== 'nafta' && combustibleElegido !== 'diesel') {
      alert('Elija un combustible válido.');
      combustibleElegido = prompt('Ingrese tipo de combustible. Ej: Nafta o Diesel.').toLowerCase();
    }
    console.log(`Combustible elegido: ${combustibleElegido}`);
    return combustibleElegido;
}
  
function calcularLitrosPorEstaciones(combustibleSeleccionado, monto) {
    const combustible = combustibles.find((comb) => comb.tipo === combustibleSeleccionado);
    if (!combustible) {
      console.error('Tipo de combustible no encontrado');
      return;
    }
    for (const estaciones of combustible.eess) {
      for (const categoria of estaciones.categorias) {
        const litrosEstacion = monto / categoria.precio;
        console.log(`En ${estaciones.nombre} puedes cargar ${litrosEstacion.toFixed(2)} litros de ${combustible.tipo}, producto: ${categoria.nombre}`);
      }
    }
}
  
const combustibleSeleccionado = seleccionarCombustible();
const monto = Number(prompt('Ingrese monto a gastar'));
calcularLitrosPorEstaciones(combustibleSeleccionado, monto);
  
console.log('Para conducir debe ser mayor a 18 años, recuerde si conduce no beba alcohol.')
alert('Gracias por utilizar nuestro servicio.');


