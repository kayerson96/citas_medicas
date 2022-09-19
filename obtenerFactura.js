function facturaPDF() {
    let nombre = document.getElementById('nombre_completo').value;
    let tipo_documento= document.getElementById('tipodedocumento').value;
    let numero_documento = document.getElementById('numero_documento').value;
    let motivo_hospitalizacion = document.getElementById('hospitalizacion').value;
    let fechainicio = document.getElementById('fechainicio').value;
    let fechaFin = document.getElementById('fechafin').value;

    
    let siSisben = document.getElementById('esteesSi');
    if (siSisben.checked == true){
        siSisben = "Si";
    }else{
        siSisben = "No";
    }


let documentoPDF = new jsPDF();
documentoPDF.setFontSize(20);
documentoPDF.text(70, 15, 'Factura por Hospitalización');
documentoPDF.setFontSize(12);
documentoPDF.text(20, 30, 'Fecha: ' + new Date());
documentoPDF.setFontSize(15);
documentoPDF.text(70, 40, 'Paciente: ' + nombre);
documentoPDF.setFontSize(10);
documentoPDF.text(20, 50, 'Tipo de Documento: ' + tipo_documento);
documentoPDF.text(40, 50, 'Número de documento: ' + numero_documento);
documentoPDF.text(20, 70, 'Motivo de Hospitalización: ' + motivo_hospitalizacion);
documentoPDF.text(20, 80, 'Cuenta con Sisben: ' + siSisben);
documentoPDF.text(20, 90, 'Fecha de Ingreso ' + fechainicio); 
documentoPDF.text(20, 100, 'Fecha de Salida ' + fechaFin);   
documentoPDF.save('Factura_Hospitalizacion');

}