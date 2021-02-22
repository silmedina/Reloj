//ejecutar una funcion despues de un tiempo
//window.setTimeout(funcion,tiempo en milisegundos)

function saludar(){
    document.write('hola mundo<br>');
}

//window.setTimeout(saludar,3000);
//ejecuta una funcion cada x milisegundos
window.setInterval(saludar,2000);