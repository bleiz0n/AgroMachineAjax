
function creaDialogoAltaIncidencia(){
    $("#altaIncidencia").dialog({
        title: 'Nueva Incidencia',
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
            click: procesoAltaIncidencia
        }]
    });
    cargarIdIncidencia();
    var selectMaquinaria = formAltaIncidencia.maquinariaIncidencia;
    cargarSelectMaquinaria(selectMaquinaria,'nueva Incidencia');
    var inputFecha=formAltaIncidencia.fechaIncidencia;
    cargarFecha(inputFecha);

}
function procesoAltaIncidencia(){
    var oRespuestaValidacion = validaIncidencia();
    if(oRespuestaValidacion.valida){
        $.ajax({
            type: "POST",
            url: "php/altaIncidencia.php",
            data: 'incidencia='+JSON.stringify(oRespuestaValidacion.oIncidencia),
            datatype: 'json',
            success: function(mensaje){
            }
        });
        $(".ui-dialog-titlebar-close").click();
        mensajePersonalizado(oRespuestaValidacion.mensaje,'Confirmado');
    }
}

function cargarIdIncidencia(){
    //Llamada ajax -> GET, respuesta Text | Conseguir ultima id Incidencia existente
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "php/ultimaIncidencia.php", true);
    peticion.send(null);
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var ultimaIncidencia = this.responseText;
            var actualIncidencia = parseInt(ultimaIncidencia)+1;
            var cadena;
            cadena = anadirCeros(actualIncidencia,5);
            var idIncidencia = formAltaIncidencia.idIncidencia;
            idIncidencia.value = cadena;
        }
    }
    peticion.onerror = function (e) {console.error(peticion.statusText);}
}