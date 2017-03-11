
function creaDialogoAltaEmpleado(){
    $("#altaEmpleado").dialog({
        title: 'Alta de Empleado',
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
            click: procesoAltaEmpleado
        }]
    });
    var select = document.getElementById("provinciaEmpleado");
        cargarSelectProvincia(select);
}
function procesoAltaEmpleado(){
        var oRespuestaValidacion = validaEmpleado();
        if(oRespuestaValidacion.valida){
            $.ajax({
                type: "POST",
                url: "php/altaEmpleado.php",
                data: 'empleado='+JSON.stringify(oRespuestaValidacion.oEmpleado),
                datatype: 'json',
                success: function(mensaje){
                }
            });
            $(".ui-dialog-titlebar-close").click();
            mensajePersonalizado(oRespuestaValidacion.mensaje,'Confirmado');
        }
}