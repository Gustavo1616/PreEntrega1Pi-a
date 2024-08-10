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

// TIPOS DE COMBUSTIBLES 
let tipoCombustible="";
function combustible() {
    let=combustibleElegido = prompt('Ingrese tipo de combustible. Ej: Nafta o Gasoil.').toLowerCase();
    while (combustibleElegido != 'nafta' && combustibleElegido != 'gasoil'){
        alert('elija un combustible valido');
        combustibleElegido = prompt('Ingrese tipo de combustible. Ej: Nafta o Gasoil.').toLowerCase();
    }
    if (combustibleElegido=='nafta'){
        console.log(`Combustible elegido: ${combustibleElegido}`);
        combustibleElegido=tipoCombustible;
        montoGastarNafta();
    } else {
        console.log(`Combustible elegido: ${combustibleElegido}`);
        combustibleElegido=tipoCombustible;
        montoGastarGasoil();
    }
    
}

// MONTOS DE COMBUSTIBLE
// RESULTADOS GLOBALES
let resultado1=0;
let resultado2=0;
let resultado3=0;
// NAFTA 
const ypfNafta=[200,300,400];
const shellNafta=[350,450,550];
const axionNafta=[600, 650, 700];
const promedioYpf= (ypfNafta[0] + ypfNafta[1] + ypfNafta[2]) / 3;
const promedioShell= (shellNafta[0] + shellNafta[1] + shellNafta[2]) / 3;
const promedioAxion= (axionNafta[0] + axionNafta[1] + axionNafta[2]) / 3;
function montoGastarNafta (){
    let monto;
    let litrosEsperados;
    // Bucle para asegurar que se ingrese un número válido
    while (true) {
        monto = Number(prompt('Ingrese monto a gastar'));
        if (!isNaN(monto) && monto !== null && monto !== '') break;
        alert("Por favor, ingrese un monto válido.");
    }
    while (true) {
        litrosEsperados = Number(prompt('Ingrese litros a comprar.'));
        if (!isNaN(litrosEsperados) && litrosEsperados !== null && litrosEsperados !== '') break;
        alert("Por favor, ingrese un valor numérico válido para los litros.");
    }
    resultado1 = monto / promedioYpf;
    resultado2 = monto / promedioShell;
    resultado3 = monto / promedioAxion;

    if (litrosEsperados <= resultado3) {
    console.log(`Con tu monto a gastar puedes cargar en las 3 estaciones.`)

    } else if  (litrosEsperados >resultado3 && litrosEsperados <=resultado2) {
    console.log(`Con tu monto a gastar, puedes cargar en YPF y SHELL.`)

    } else if (litrosEsperados > resultado2 && litrosEsperados <= resultado1) {
    console.log(`Con tu monto a gastar, te conviene ir a YPF.`)

    } else {
    console.log('No puede cargar en ninguna estacion.')
}
} 
// GASOIL 
const ypfGasoil=[200, 300, 400];
const shellGasoil=[350,450,550];
const axionGasoil=[600, 650, 700];
const promedioYpf2= (ypfGasoil[0] + ypfGasoil[1] + ypfGasoil[2]) / 3;
const promedioShell2= (shellGasoil[0] + shellGasoil[1] + shellGasoil[2]) / 3; 
const promedioAxion2= (axionGasoil[0] + axionGasoil[1] + axionGasoil[2]) / 3; 

function montoGastarGasoil (){
    let monto;
    let litrosEsperados;
    // Bucle para asegurar que se ingrese un número válido
    while (true) {
        monto = Number(prompt('Ingrese monto a gastar'));
        if (!isNaN(monto) && monto !== null && monto !== '') break;
        alert("Por favor, ingrese un monto válido.");
    }
    while (true) {
        litrosEsperados = Number(prompt('Ingrese litros a comprar.'));
        if (!isNaN(litrosEsperados) && litrosEsperados !== null && litrosEsperados !== '') break;
        alert("Por favor, ingrese un valor numérico válido para los litros.");
    }
    resultado1 = monto / promedioYpf;
    resultado2 = monto / promedioShell;
    resultado3 = monto / promedioAxion;

    if (litrosEsperados <= resultado3) {
    console.log(`Con tu monto a gastar puedes cargar en las 3 estaciones.`)

    } else if  (litrosEsperados >resultado3 && litrosEsperados <=resultado2) {
    console.log(`Con tu monto a gastar, puedes cargar en YPF y SHELL.`)

    } else if (litrosEsperados > resultado2 && litrosEsperados <= resultado1) {
    console.log(`Con tu monto a gastar, te conviene ir a YPF.`)

    } else {
    console.log('No puede cargar en ninguna estacion.')
} 
} 
combustible();
console.log('Para conducir debe ser mayor a 18 años, recuerde si conduce no beba alcohol.')
alert('Gracias por utilizar nuestro servicio.');