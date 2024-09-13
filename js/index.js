// TIPOS DE COMBUSTIBLES - PRECIO
const combustibles = [
    {
      tipo: "nafta",
      eess: [
        {
          nombre: "ypf",
          imagen:'./assets/eess.png',
          categorias: [
            { nombre: "Super", precio: 1024 },
            { nombre: "infinia Nafta", precio: 1251 },
          ],
        },
        {
          nombre: "shell",
          imagen:'./assets/eess.png',
          categorias: [
            { nombre: "Super", precio: 1085 },
            { nombre: "vpower", precio: 1350 },
          ],
        },
        {
          nombre: "axion",
          imagen:'./assets/eess.png',
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
          imagen:'./assets/eess.png',
          categorias: [
            { nombre: "Ultra Diesel", precio: 1114 },
            { nombre: "infinia Diesel", precio: 1307 },
          ],
        },
        {
          nombre: "shell",
          imagen:'./assets/eess.png',
          categorias: [
            { nombre: "Evolux", precio: 1150 },
            { nombre: "Vpower Diesel", precio: 1357 },
          ],
        },
        {
          nombre: "axion",
          imagen:'./assets/eess.png',
          categorias: [
            { nombre: "Diesel", precio: 1025 },
            { nombre: "Cuantium Diesel", precio: 1250 },
          ],
        },
      ],
    },
  ];
// Guardar datos en localStorage
localStorage.setItem('combustibles', JSON.stringify(combustibles));

// MUESTRA CONTENIDO TIPO COMBUSTIBLE
document.getElementById('btnYes').addEventListener('click', () => {
  document.getElementById('message').textContent = 'Excelente, indíquenos qué tipo de combustible usa su vehículo.';
  document.getElementById('fuelForm').style.display = 'block'; 
});

// OCULTA FORMULARIO E INDICA GRACIAS
document.getElementById('btnNo').addEventListener('click', () => {
  document.getElementById('message').textContent = 'Gracias por usar nuestro servicio.';
  document.getElementById('fuelForm').style.display = 'none';
});

document.getElementById('btnCalculate').addEventListener('click', () => {
  const combustibleSeleccionado = document.getElementById('fuelType').value.toLowerCase();
  const monto = Number(document.getElementById('amount').value);
  calcularLitrosPorEstaciones(combustibleSeleccionado, monto);
});

function calcularLitrosPorEstaciones(combustibleSeleccionado, monto) {
  const resultDiv = document.getElementById('result');
  const storedCombustibles = JSON.parse(localStorage.getItem('combustibles'));
  const combustible = storedCombustibles.find((comb) => comb.tipo === combustibleSeleccionado);

  if (!combustible) {
    resultDiv.textContent = 'Tipo de combustible no encontrado';
    return;
  }

  let resultado = '';
  const imagenDiv = document.createElement('div');
  imagenDiv.className = 'image-container';

  combustible.eess.forEach(estacion => {
    const categoriasFiltradas = estacion.categorias.filter(categoria => categoria.precio <= monto);
    
    if (categoriasFiltradas.length > 0) {
      categoriasFiltradas.forEach(categoria => {
        const litrosEstacion = monto / categoria.precio;
        resultado += `En ${estacion.nombre} puedes cargar ${litrosEstacion.toFixed(2)} litros de ${combustible.tipo} ${categoria.nombre}<br>`;
      });
    } else {
      resultado += `En ${estacion.nombre} no hay categorías de ${combustible.tipo} dentro del rango de precio indicado.<br>`;
    }

    // Crear y añadir la imagen de la estación de servicio
    const estacionImage = document.createElement('img');
    estacionImage.src = estacion.imagen;
    estacionImage.alt = estacion.nombre;
    imagenDiv.appendChild(estacionImage);
  });

  resultDiv.innerHTML = resultado;
  resultDiv.appendChild(imagenDiv);
}