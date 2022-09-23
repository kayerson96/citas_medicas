
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

var days= calcularDias();
    let valor = 75000;
    let descuentoSisben= 0;
    var subtotal = valor*days;
        if (esteesA.checked == true || esteesB.checked == true){    
            descuentoSisben=35
         }
         Total= ( subtotal-(subtotal*35)/100);

    document.getElementById("espacio_dias").innerHTML="Sub-Total "+subtotal + "COP";
    alert("Sub-Total "+subtotal + "COP");


    document.getElementById("totalGeneral").innerHTML ="Total a Pagar "+Total+ "COP";
    return Total;

 

}


function facturaPDF() {
    let nombre = document.getElementById('nombre_completo').value;
    let tipo_documento= document.getElementById('tipodedocumento').value;
    let numero_documento = document.getElementById('numero_documento').value;
    let motivo_hospitalizacion = document.getElementById('hospitalizacion').value;
    let fechainicio = document.getElementById('fechainicio').value;
    let fechaFin = document.getElementById('fechafin').value;
    let subtotal = document.getElementById("espacio_dias");

    let GrupoA= document.getElementById('esteesA');
    let GrupoB= document.getElementById('esteesB');
    let GrupoC= document.getElementById('esteesC');
    let GrupoD= document.getElementById('esteesD');
    let grupoPertenece = 0;

    
    let siSisben = document.getElementById('esteesSi');
    if (siSisben.checked == true){
        siSisben = "Si";

        if (GrupoA.checked == true){
            grupoPertenece= "A con 35% de descuento";
                
        }else if(GrupoB.checked == true){
                    grupoPertenece= "B con 35% de descuento";
                        
                }else if(GrupoC.checked == true){
                            grupoPertenece= "C";
                            
                        }else if(GrupoD.checked == true){
                                grupoPertenece= "D";}



    }else{
        siSisben = "No";
        grupoPertenece = "No aplica"
    }
    var resultadosemifinal = calcularDias()
   subtotal1= 75000*resultadosemifinal;

   var imgData = '../'

let documentoPDF = new jsPDF();
documentoPDF.setFontSize(30);
documentoPDF.text(40, 15, 'Factura por Hospitalización');
documentoPDF.setFontSize(12);
documentoPDF.text(20, 30, 'Fecha: ' + new Date());
documentoPDF.setFontSize(15);
documentoPDF.setTextColor(8, 47, 86)
documentoPDF.text(20, 40, 'Paciente: ' + nombre);
documentoPDF.setTextColor(0, 0, 0)
documentoPDF.setFontSize(10);
documentoPDF.text(20, 50, 'Tipo de Documento: ' + tipo_documento);
documentoPDF.text(90, 50, 'Número de documento: ' + numero_documento);
documentoPDF.text(60, 60, 'Motivo de Hospitalización: ' + motivo_hospitalizacion);
documentoPDF.text(20, 70, 'Cuenta con Sisben: ' + siSisben); 
documentoPDF.text(80, 70, 'Grupo al que Pertenece: ' + grupoPertenece);
documentoPDF.text(20, 80, 'Fecha de Ingreso ' + fechainicio); 
documentoPDF.text(60, 160, 'Gracias por confiar tu Salud con Nosotros'); 
documentoPDF.text(80, 80, 'Fecha de Salida ' + fechaFin); 
documentoPDF.setFontSize(20);
documentoPDF.setTextColor(129, 175, 221)
documentoPDF.text(60, 140, 'Sub-Total: ' + subtotal1 + "COP"); 
documentoPDF.setTextColor(8, 47, 86)
documentoPDF.text(60, 150, 'Valor a pagar: ' + calcularValor()+"COP"); 
documentoPDF.save('Factura_Hospitalizacion');
documentoPDF.setTextColor(0, 0, 0)
documentoPDF.setFontSize(10); 
}