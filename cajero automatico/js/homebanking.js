//Declaración de variables
var nombreUsuario = "AA";

var saldoCuenta = 50000;

var limiteExtraccion = 10000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var val1 =Number(prompt("Ingrese el limite de extraccion nuevo"));
    if(val1 == isNaN || val1 <= 0 ){
        alert("Ingresar un valor aceptado");
    }
    else{
        limiteExtraccion = val1;
        actualizarLimiteEnPantalla();
        alert("El nuevo limite de extraccion es de " + val1);
    }
}

function extraerDinero() {
    var val1 =Number(prompt("Ingrese el valor que desea extraer"));
    if(val1 == isNaN || val1 <= 0 ){
        alert("Ingresar un valor aceptado");
    }
    else{
        if(val1 < saldoCuenta){
            if(val1 < limiteExtraccion){
                var validar= val1 /100
                if (validar % 1 == 0){  
                restarcuenta(val1);
                alert("Se ha retirado: "+val1 +"\nTu saldo actual es: "+saldoCuenta+ "\nY el saldo anterior era: "+(saldoCuenta + val1));
                }
                else{
                    alert("La extraccion no es valida. Solo se puede entregar billetes de 100");
                }
            }
            else{
                alert("Se ha superado el limite de extraccion");
            }
        }
        else{
            alert("no hay saldo disponible para entregar esa cantida de dinero");
        }
    }
}

function depositarDinero() {
    var val1 =Number(prompt("Ingrese el valor a sumar"));
    if(val1 == isNaN || val1 <= 0 ){
        alert("Ingresar un valor aceptado");
    }
    else{
        sumarcuenta(val1);
    }
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {  
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

function sumarcuenta(dinerito) {
    saldoCuenta += dinerito;
    actualizarSaldoEnPantalla();
}

function restarcuenta (dinerito) {
    saldoCuenta -= dinerito;
    actualizarSaldoEnPantalla();
}