// Obtenemos el elemento con "ID" resultado
let resultado = document.getElementById('resultado');
// variable para almacenar las expresiones matematicas ingresadas
let expresion = "";

/*
    Nombre: Agregar
    Argumentos: valor (string)
    Descripcion: Agregara un numero u operador al contenedor de resultados para su visualizacion. Si el contenido es "0" o "Error", lo reemplaza. En caso contrario, concatena el valor.
*/
function agregar(valor) {

    // Reemplaza si el contenido actual es "0" o "Error"
    if (resultado.textContent === "0" || resultado.textContent === "Error") {
        resultado.textContent = valor;
    } else {
        // Agrega nuevo valor al contenido ya existente
        resultado.textContent += valor;
    }
    expresion = resultado.textContent;  // Almacena la expresion Actualizada
};

/*
    Nombre: Limpiar
    Argumentos: Ninguno
    Descripcion: Restablece el contenido del resultado a "0" y limpia la expresión almacenada.
*/
function limpiar() {
    resultado.textContent = "0";
    expresion = "";
};

/*
    Nombre: Calcular
    Argumentos: Ninguna
    Descripcion: Evaluara la expresion matematicas almacenada mediante la funcion eval, si ocurra un error  en la evaluacion mostrara por pantalla "Error"
                 asi como en caso de que se oprima el boton que llame a la funcion, despues de que esta se limpiara, mantendra el 0 en el resultado
*/
function calcular() {
    try {
        // en caso de que la expresion no este vacia se reliza las operaciones
        if (expresion.trim() === "") {
            // si la operacion esta vacia, el contenido se mantiene en 0
            resultado.textContent = "0";
            return;
        }

        // Evalua expresion Matematica
        resultado.textContent = eval(expresion);
        expresion = resultado.textContent;
    } catch (e) {
        // En caso de error, reinicia la expresion y muestra "Error" en el contenedor
        resultado.textContent = "Error";
        expresion = "";
    }
};

