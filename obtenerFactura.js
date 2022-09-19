Function facturaPDF() {
    let nombre = document.getElementById('nombrecompleto').value;
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
}