function creaDialogoBajaAlquiler(){
    $("#bajaAlquiler").dialog({
        title: 'Finalizar Alquiler',
        autoOpen: true,
        modal:true,
        close: function () {$(this).dialog("close"); $(this).remove();},
        hide: "blind",
        show: "scale",
        height:"auto",
        width:"500px",
        resizable:false,
        buttons: [{
            text: "Finalizar",
            class: "btn btn-default btn-sm btn-danger",
            click: procesoBajaAlquiler
        }]
    });

    var selectAlquiler = formBajaAlquiler.alquilerBaja;
    var selectEmpleado = formBajaAlquiler.empleadoAlquiler;
    var selectCliente = formBajaAlquiler.clienteAlquiler;
    var selectMaquinaria = formBajaAlquiler.maquinariaAlquiler;
        cargarSelectAlquiler(selectAlquiler,'para cancelar');
        cargarSelectEmpleado(selectEmpleado,'alquiler');
        cargarSelectCliente(selectCliente,'alquiler');
        cargarSelectMaquinaria(selectMaquinaria,'alquiler');

        var inputFecha=formBajaAlquiler.fechaFinAlquiler;
        cargarFecha(inputFecha);
        selectAlquiler.addEventListener("change",cargarDatosAlquiler,false);


}
function procesoBajaAlquiler(){
         var oRespuestaValidacion = validaAlquiler();
        console.log("oRespuestaValidacion = "+oRespuestaValidacion.valida)
        if(oRespuestaValidacion.valida){
            $.ajax({
                type: "POST",
                url: "php/bajaAlquiler.php",
                data: 'alquiler='+oRespuestaValidacion.oAlquiler.id,
                datatype: 'json',
                success: function(mensaje){
                }
            });
            $(".ui-dialog-titlebar-close").click();
            mensajePersonalizado(oRespuestaValidacion.mensaje,'Borrado');
        }

}