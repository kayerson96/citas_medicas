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
        alert(days)
    }
 

    // let espacioDias = document.getElementById('espacio_dias').value;
    // let resta = fechafin.getTime() - fechainicio.getTime();
    // alert(resta);

    // function convertirTime(duration) {
    //     var milliseconds = resta;
    //     seconds= Math.floor((duration / 1000) % 60),
    //     minutes= Math.floor((duration / (1000 * 60)) % 60),
    //     hours= Math.floor((duration / (1000 * 60 * 60)) % 24);

    // hours = (hours <10) ? "0" + hours: hours;
    // minutes = (minutes < 10) ? "0" + minutes: minutes;
    // seconds = (seconds < 10) ? "0" + seconds: seconds;

    // return hours +":" + minutes + ";" + seconds + "." + milliseconds;
    // }
    // alert(convertirTime(resta))
    // alert(fechainicio);
    // alert(fechafin);

}