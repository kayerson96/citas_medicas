function mostrarHora (){
   var espacio = document.getElementById("reloj");
   
   let horaactual = new Date()

 var segundo = horaactual.getSeconds();
 var minutis= horaactual.getMinutes();
var horas=horaactual.getHours();
 var horafinal ="Hora del sistema " +horas + " " + minutis+ " " + segundo;

 espacio.innerHTML = horafinal;

 setTimeout(mostrarHora, 1000)
}

