// Función asíncrona para cargar los combustibles
async function cargarCombustibles() {
  try {
    const response = await fetch('./data/combustibles.json');
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    const data = await response.json();
    localStorage.setItem('combustibles', JSON.stringify(data.combustibles));
  } catch (error) {
    console.error('Error al cargar los datos con fetch', error);
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Hubo un problema al cargar los datos de combustibles!',
      allowOutsideClick: false,
    });
  }
}
cargarCombustibles();

// Oculta formulario e indica gracias
document.getElementById('btnNo').addEventListener('click', async () => {
  await Swal.fire({
    icon: 'success',
    title: 'Gracias!',
    text: 'Gracias por usar nuestro servicio.',
    confirmButtonText: 'Aceptar',
    allowOutsideClick: false,
  });
  document.getElementById('fuelForm').style.display = 'none';
});

// Mostrar formulario para elegir combustible
document.getElementById('btnYes').addEventListener('click', async () => {
  document.getElementById('fuelForm').style.display = 'block';
  await Swal.fire({
    title: '¡Excelente!',
    text: 'Indíquenos qué tipo de combustible usa su vehículo.',
    icon: 'success',
    confirmButtonText: 'Continuar',
    allowOutsideClick: false,
  });
});

// Evento para calcular litros por estaciones
document.getElementById('btnCalculate').addEventListener('click', async () => {
  const combustibleSeleccionado = document.getElementById('fuelType').value.toLowerCase();
  const monto = Number(document.getElementById('amount').value);
  await calcularLitrosPorEstaciones(combustibleSeleccionado, monto);
});

// Función asíncrona para calcular los litros según estaciones de servicio
async function calcularLitrosPorEstaciones(combustibleSeleccionado, monto) {
  let storedCombustibles = localStorage.getItem('combustibles');
  storedCombustibles = storedCombustibles ? JSON.parse(storedCombustibles) : null;

  if (!storedCombustibles) {
    await Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No hay datos de combustibles disponibles.',
      allowOutsideClick: false,
    });
    return;
  }

  if (!Array.isArray(storedCombustibles)) {
    await Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Los datos de combustibles no están en el formato esperado.',
      allowOutsideClick: false,
    });
    return;
  }

  // Encontrar el combustible seleccionado
  const combustible = storedCombustibles.find(c => c.tipo === combustibleSeleccionado);

  if (!combustible) {
    await Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El tipo de combustible seleccionado no está disponible.',
    });
    return;
  }

  let resultado = '';

  // Iterar sobre las estaciones de servicio
  combustible.eess.forEach(estacion => {
    const categoriasFiltradas = estacion.categorias.filter(categoria => categoria.precio <= monto);
    const tieneCategorias = categoriasFiltradas.length > 0;

    resultado += tieneCategorias ? categoriasFiltradas.map(categoria => {
      const litrosEstacion = monto / categoria.precio;
      return `En <strong>${estacion.nombre}</strong> puedes cargar ${litrosEstacion.toFixed(2)} litros de <strong>${combustible.tipo}</strong> (${categoria.nombre})<br>`;
    }).join('') : `En <strong>${estacion.nombre}</strong> no hay categorías de <strong>${combustible.tipo}</strong> dentro del rango de precio indicado.<br>`;
  });

  await Swal.fire({
    title: 'Resultado',
    html: resultado,
    padding: `2rem`,
    width: `30%`,
    icon: 'info',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: 'Aceptar',
    allowOutsideClick: false,
    imageUrl: `./assets/eess.png`,
    imageWidth: `100%`,
    imageHeight: 200,
    imageAlt: "Estaciones de Servicio",
  });
  location.reload(); // refresca la página actual
}
