var valor1=0;
var result;
var valor2;
var cambio = true;
var operacion;

function numero(num){
    cambio ? textoPantalla.innerText= num : textoPantalla.innerText= textoPantalla.innerText + num;
    cambio= false;
}

function calcular(op){
    operacion = op;
    valor2=0;
        igual()
    }

function borradoTotal(){
    valor1=0;
    result=undefined;
    valor2=undefined;
    cambio = true;
    textoPantalla.innerText= "0";
}

function igual(){
    if((valor1 == undefined || valor1 == null ) || (valor2 == undefined || valor2 == null) || (operacion == undefined || operacion == null)){
        textoPantalla.innerText = "ingrese valores correspondientes"
    }
    else{
        valor2 = Number(textoPantalla.innerText)
        switch (operacion) {
            case "+":
                result= valor1 + valor2;
                textoPantalla.innerText= result;
                break;
            case "-":
                if(valor2 < 0){
                    result= valor1 + valor2;
                    textoPantalla.innerText= result;
                }
                else{
                    if(valor1 == 0){
                        textoPantalla.innerText = valor2;
                        result = valor2
                    }
                    else{
                        result= valor1 - valor2;
                        textoPantalla.innerText= result;
                    }
                }
                break;
            case "*":
                if(valor1 == 0){
                    result = valor2
                }
                else{
                result= valor1 * valor2;
                }
                textoPantalla.innerText= result;
                break;                
            case "/":
                if(valor1 == 0 || valor2 ==0){
                    if(cambio){
                        textoPantalla.innerText= "Error al dividir, la operacion no es posible";
                    }
                    else{
                        result = valor2;
                    }
                }
                else{
                    result= valor1 / valor2;
                    textoPantalla.innerText= result;
                }
                break;
            default:
                break;
            }
            result == Infinity ? borradoTotal() : valor1 = result;
        cambio = true;
    }
}