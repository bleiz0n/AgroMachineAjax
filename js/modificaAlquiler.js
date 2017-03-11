function creaDialogoModificaAlquiler(){
    $("#modificaAlquiler").dialog({
        title: 'Modificacion de Alquiler',
        autoOpen: true,
        modal:true,
        close: function () {$(this).dialog("close"); $(this).remove();},
        hide: "blind",
        show: "scale",
        height:"auto",
        width:"500px",
        resizable:false,
        buttons: [{
            text: "Actualizar",
            class: "btn btn-default btn-sm btn-info",
            click: procesoModificaAlquiler
        }]
    });

    var selectAlquiler = formModificaAlquiler.alquilerModifica;
    var selectEmpleado = formModificaAlquiler.empleadoAlquiler;
    var selectCliente = formModificaAlquiler.clienteAlquiler;
    var selectMaquinaria = formModificaAlquiler.maquinariaAlquiler;
        cargarSelectAlquiler(selectAlquiler,'editar');
        cargarSelectEmpleado(selectEmpleado,'editar');
        cargarSelectCliente(selectCliente,'editar');
        cargarSelectMaquinaria(selectMaquinaria,'editar');

        selectAlquiler.addEventListener("change",cargarDatosAlquiler,false);
}
function procesoModificaAlquiler(){
        var oRespuestaValidacion = validaAlquiler();
        console.log("oRespuestaValidacion = "+oRespuestaValidacion.valida)
        if(oRespuestaValidacion.valida){
            $.ajax({
                type: "POST",
                url: "php/modificaAlquiler.php",
                data: 'alquiler='+JSON.stringify(oRespuestaValidacion.oAlquiler),
                datatype: 'json',
                success: function(mensaje){
                }
            });
            $(".ui-dialog-titlebar-close").click();
            mensajePersonalizado(oRespuestaValidacion.mensaje,'Actualizado');
        }

}