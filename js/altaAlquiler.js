
function creaDialogoAltaAlquiler(){
    $("#altaAlquiler").dialog({
        title: 'Nuevo Alquiler',
        autoOpen: true,
        modal:true,
        close: function () {$(this).dialog("close"); $(this).remove();},
        hide: "blind",
        show: "scale",
        height:"auto",
        width:"500px",
        resizable:false,
        buttons: [{
            text: "Enviar",
            class: "btn btn-default btn-sm btn-success",
            click: procesoAltaAlquiler
        }]
    });
    cargarIdAlquiler();
    var selectEmpleado = formAltaAlquiler.empleadoAlquiler;
    var selectCliente = formAltaAlquiler.clienteAlquiler;
    var selectMaquinaria = formAltaAlquiler.maquinariaAlquiler;
        cargarSelectEmpleado(selectEmpleado,'alquiler');
        cargarSelectCliente(selectCliente,'alquiler');
        cargarSelectMaquinariaDisponible(selectMaquinaria,'alquiler');
        cargarFechas();

}
function procesoAltaAlquiler(){
        var oRespuestaValidacion = validaAlquiler();
        titulo="";
        if(oRespuestaValidacion.valida){
            console.log(oRespuestaValidacion.mensaje)
            $.ajax({
                type: "POST",
                url: "php/altaAlquiler.php",
                data: 'alquiler='+JSON.stringify(oRespuestaValidacion.oAlquiler),
                datatype: 'json',
                success: function(mensaje){

                }
            });
            $(".ui-dialog-titlebar-close").click();
            mensajePersonalizado(oRespuestaValidacion.mensaje,'Confirmado');
        }

}

function cargarIdAlquiler(){
    //Llamada ajax -> GET, respuesta Text | Conseguir ultima id alquiler existente
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "php/ultimoAlquiler.php", true);
    peticion.send(null);
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var ultimoAlquiler = this.responseText;
            var actualAlquiler = parseInt(ultimoAlquiler)+1;
            var cadena = anadirCeros(actualAlquiler,5);
            var idAlquiler = formAltaAlquiler.idAlquiler;
            idAlquiler.value = cadena;

        }
    }
    peticion.onerror = function (e) {console.error(peticion.statusText);}
}