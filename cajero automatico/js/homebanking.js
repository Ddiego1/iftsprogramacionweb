//Declaración de variables
var nombreUsuario = "Diego Gomez";

var contraseña = 1234;

var saldoCuenta = 50000;

var limiteExtraccion = 10000;

var entro = false;

//servicios
var agua =350
var telefono=425
var luz=210
var internet=300

//Usuarios amigos
var usuarios=[];
usuarios[0] = ["cuentaAmiga1", 1]
usuarios[1] = ["cuentaAmiga2", 2]


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

function cambiarLimiteDeExtraccion() {
    var valor =Number(prompt("Ingrese el limite de extraccion nuevo"));
    if(isNaN(valor) || valor <= 0 ){
        alert("Ingresar un valor aceptado");
    }
    else{
        limiteExtraccion = valor;
        actualizarLimiteEnPantalla();
        alert("El nuevo limite de extraccion es de " + valor);
    }
}

function extraerDinero() {
    var valor =Number(prompt("Ingrese el valor que desea extraer"));
    if(isNaN(valor) || valor <= 0 ){
        alert("Ingresar un valor aceptado");
    }
    else{
        if(valor < saldoCuenta){
            if(valor <= limiteExtraccion){
                var validar= valor /100
                if (validar % 1 == 0){  
                restarcuenta(valor);
                alert("Se ha retirado: "+valor +"\nTu saldo actual es: "+saldoCuenta+ "\nY el saldo anterior era: "+(saldoCuenta + valor));
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
    var valor =Number(prompt("Ingrese el valor a sumar"));
    if(isNaN(valor) || valor <= 0 ){
        alert("Ingresar un valor aceptado");
    }
    else{
        sumarcuenta(valor);
    }
}

function pagarServicio() {
    var serv = Number(prompt("Seleccione el numero del servicio que desea pagar: \n1-Agua $350 \n2- Telefono $425 \n3-Luz $210 \n4-Internet $300"));
    if(!isNaN(serv)){
    switch(serv){
        case 1:
            saldoCuenta -= agua;
            break;
        case 2:
            saldoCuenta -= telefono;
            break;
        case 3:
            saldoCuenta -= luz;
            break;
        case 4:
            saldoCuenta -= internet;
            break;
        default:
            alert("Seleccionar el numero del servicio que deseas pagar");
    }
    actualizarSaldoEnPantalla();
    }
    else{
        alert("Ingrese el numero del servicio");
    }
}

function transferirDinero() {
    var tranf = Number(prompt("Ingrese el valor a transferir"));
    if(!isNaN(tranf)){
        if(tranf <= saldoCuenta){
            var numcun = Number(prompt("Ingrese el numero de cuenta al que desee transferir el dinero"));
            if(!isNaN(tranf)){
                for(var i=0;i<usuarios.length; i++ ){
                    var usu = usuarios[i];
                    if(usu[1]== numcun){
                        entro = true;
                        saldoCuenta -= tranf;
                        actualizarSaldoEnPantalla();
                        alert("se ha transerido: "+tranf+" pesos \nDestino: "+usu[0]);
                    }
                }
                entro ? entro= false: alert("No se encuentra esa cuenta en el sistema"); 
            }
            else{
                alert("Ingrese el numero de la cuenta correctamente");
            }
        }
        else{
            alert("no puede transferirse esa cantidad de dinero");
        }
    }
    else{
        alert("Ingrese un valor numero del saldo que quieras transferir");
    }
}

function iniciarSesion() {
    var codigo = Number(prompt("Ingrese el codigo de su cuenta"));
    if(codigo == contraseña){
        alert("bienvenido "+ this.nombreUsuario +" ya puedes comenzar a realizar operaciones");
    }
    else{
        alert("Codigo incorrecto se ha retenido su dinero");
        this.saldoCuenta = 0;
    }
}

function sumarcuenta(cash) {
    saldoCuenta += cash;
    actualizarSaldoEnPantalla();
}

function restarcuenta (cash) {
    saldoCuenta -= cash;
    actualizarSaldoEnPantalla();
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