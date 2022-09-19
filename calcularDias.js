function calcularDias() {
    let fechainicio = new Date(document.getElementById('fechainicio').value);
    let fechafin =  new Date(document.getElementById('fechafin').value);
    if (fechainicio>fechafin){
        alert("la información indicada no es correcto, validar fecha de ingreso")
        fechainicio.value=""
        fechafin.value=""
    }
    let espacioDias = document.getElementById('espacio_dias').value;
    let resta = fechafin.getTime() - fechainicio.getTime();
    alert(resta);

    // alert(fechainicio);
    // alert(fechafin);

}