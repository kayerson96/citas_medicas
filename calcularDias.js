
function calcularDias() {
    var fechainicio = new Date(document.getElementById('fechainicio').value);
    var fechafin =  new Date(document.getElementById('fechafin').value);
    if (fechainicio >= fechafin){
        alert("la información indicada no es correcto, validar fecha de ingreso")
        document.getElementById("fechainicio").value="";
        document.getElementById("fechafin").value="";
    }else{
        var fechaResultado= fechafin - fechainicio;
        var days = Math.floor((fechaResultado)/(1000*60*60*24))+1;
        alert(days + " de Hospitalización");
        return days;
    }

    
}
function calcularValor() {

let esteesA = document.getElementById("esteesA");
let esteesB = document.getElementById("esteesB");

let days= calcularDias();
    let valor = 75000;
    let descuentoSisben= 0;
    let subtotal = valor*days;
        if (esteesA.checked == true || esteesB.checked == true){    
            descuentoSisben=35
         }
         Total= ( subtotal-(subtotal*35)/100);
         console.log(Total)

    document.getElementById("espacio_dias").innerHTML="Sub-Total "+subtotal + "COP";
    alert("Sub-Total "+subtotal + "COP");


    document.getElementById("totalGeneral").innerHTML ="Total a Pagar "+Total+ "COP";
    return Total;

   
}