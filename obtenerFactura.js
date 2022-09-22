

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



                                    
                                        
    console.log(grupoPertenece)

let documentoPDF = new jsPDF();
documentoPDF.setFontSize(20);
documentoPDF.text(70, 15, 'Factura por Hospitalización');
documentoPDF.setFontSize(12);
documentoPDF.text(20, 30, 'Fecha: ' + new Date());
documentoPDF.setFontSize(15);
documentoPDF.text(20, 40, 'Paciente: ' + nombre);
documentoPDF.setFontSize(10);
documentoPDF.text(20, 50, 'Tipo de Documento: ' + tipo_documento);
documentoPDF.text(90, 50, 'Número de documento: ' + numero_documento);
documentoPDF.text(60, 60, 'Motivo de Hospitalización: ' + motivo_hospitalizacion);
documentoPDF.text(20, 70, 'Cuenta con Sisben: ' + siSisben); 
documentoPDF.text(80, 70, 'Grupo al que Pertenece: ' + grupoPertenece);
documentoPDF.text(20, 80, 'Fecha de Ingreso ' + fechainicio); 
documentoPDF.text(80, 80, 'Fecha de Salida ' + fechaFin); 
documentoPDF.text(80, 100, 'Valor a pagar ' + calcularValor()); 
documentoPDF.save('Factura_Hospitalizacion');

}