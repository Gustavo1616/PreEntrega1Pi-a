alert('Bienvenido/a. Esta es nuestra guia para su vehiculo.');
alert('Comencemos...');
function registroUsuario() {
    let registro;
    do {
        registro = prompt('¿Usted tiene vehiculo? Ingrese SI o NO').toUpperCase();
        
        while (registro !== 'SI' && registro !== 'NO') {
            alert('Debe ingresar SI o NO');
            registro = prompt('¿Usted tiene vehiculo? Ingrese SI o NO').toUpperCase();
        }

        if (registro === "SI") {
            alert('Excelente, indiquenos que tipo de combustible usa su vehiculo.');
        } else {
            alert('Gracias por usar nuestro servicio.');
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
            { nombre: "Super", precio: 1024 },
            { nombre: "infinia Nafta", precio: 1251 },
          ],
        },
        {
          nombre: "shell",
          categorias: [
            { nombre: "Super", precio: 1085 },
            { nombre: "vpower", precio: 1350 },
          ],
        },
        {
          nombre: "axion",
          categorias: [
            { nombre: "Super", precio: 1015 },
            { nombre: "cuantium", precio: 1120 },
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
            { nombre: "Ultra Diesel", precio: 1114 },
            { nombre: "infinia Diesel", precio: 1307 },
          ],
        },
        {
          nombre: "shell",
          categorias: [
            { nombre: "Evolux", precio: 1150 },
            { nombre: "Vpower Diesel", precio: 1357 },
          ],
        },
        {
          nombre: "axion",
          categorias: [
            { nombre: "Diesel", precio: 1025 },
            { nombre: "Cuantium Diesel", precio: 1250 },
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
    combustible.eess.forEach(estacion => {
    const categoriasFiltradas = estacion.categorias.filter(categoria => categoria.precio <= monto);
      
    if (categoriasFiltradas.length > 0) {
      categoriasFiltradas.forEach(categoria => {
        const litrosEstacion = monto / categoria.precio;
        console.log(`En ${estacion.nombre} puedes cargar ${litrosEstacion.toFixed(2)} litros de ${combustible.tipo} ${categoria.nombre}`);
        });
      } else {
        console.log(`En ${estacion.nombre} no hay categorías de ${combustible.tipo} dentro del rango de precio indicado.`);
      }
    });
}
const eess=['YPF', 'SHELL', 'AXION'];
alert(`Contamos con las siguientes estaciones de servicio: ${eess}.`);
const combustibleSeleccionado = seleccionarCombustible();
const monto = Number(prompt('Ingrese monto a gastar'));
calcularLitrosPorEstaciones(combustibleSeleccionado, monto);
  
console.log('Para conducir debe ser mayor a 18 años, recuerde si conduce no beba alcohol.');
alert('Gracias por utilizar nuestro servicio.');