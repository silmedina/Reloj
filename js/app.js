function obtenerFecha(){
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    
    console.log(horas + ':' +minutos+ ':' +segundos)

    //traer los elementos p correspondientes
    let pHoras = document.getElementById('hora'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pDiaSemana = document.querySelector('#diaSemana'),
        pNumDia = document.querySelector('#numDia'),
        pMes = document.querySelector('#mes'),
        pAnio = document.querySelector('#anio');

    
     //asignar los valores de la fecha
     let semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
     pDiaSemana.innerHTML = semana[fecha.getDay()];
     pNumDia.innerHTML = fecha.getDate();

     //asiganr los valores del mes
     let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
     pMes.innerHTML = meses[fecha.getMonth()];

     pAnio.innerHTML = fecha.getFullYear();

     //Asignar los valores de la hora
     if(segundos < 10){
         segundos = '0'+ segundos
     }
     if(minutos < 10){
         minutos = '0'+ minutos
     }
     if(horas < 10){
         horas = '0'+ horas
     }
     pHoras.innerHTML = horas;
     pMinutos.innerHTML = minutos;
     pSegundos.innerHTML = segundos;
}

window.setInterval(obtenerFecha,1000);

function cambiarColorPink(){
    let section = document.getElementById('reloj');
    section.className = 'w-75 pink';
}

function cambiarColorBlue(){
    let section = document.getElementById('reloj');
    section.className = 'w-75 blue';
}

function cambiarColorGreen(){
    let section = document.getElementById('reloj');
    section.className = 'w-75 green';
}