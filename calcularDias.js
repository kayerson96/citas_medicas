function calcularDias() {
    let fechainicio = new Date(document.getElementById('fechainicio').value);
    let fechafin =  new Date(document.getElementById('fechafin').value);
    if (fechainicio >= fechafin){
        alert("la información indicada no es correcto, validar fecha de ingreso")
        // fechainicio.value="";
        // fechafin.value="";
        document.getElementById("fechainicio").value="";
        document.getElementById("fechafin").value="";
    }else{
        let fechaResultado= fechafin - fechainicio;
        let days = Math.floor((fechaResultado)/(1000*60*60*24))+1;
        alert(days);
        return days;
    }
}
function calcularValor (days) {
    let valor = 75000;
    let subtotal = valor*days;
    alert(subtotal);
    return subtotal;
}