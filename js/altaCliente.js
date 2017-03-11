
function creaDialogoAltaCliente(){
    $("#altaCliente").dialog({
        title: 'Alta de Cliente',
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
            click: procesoAltaCliente
        }]
    });
    var select = document.getElementById("provinciaCliente");
    cargarSelectProvincia(select);
}
function procesoAltaCliente(){
        var oRespuestaValidacion = validaCliente();
        if(oRespuestaValidacion.valida){
            $.ajax({
                type: "POST",
                url: "php/altaCliente.php",
                data: 'cliente='+JSON.stringify(oRespuestaValidacion.oCliente),
                datatype: 'json',
                success: function(mensaje){
                }
            });
            $(".ui-dialog-titlebar-close").click();

            mensajePersonalizado(oRespuestaValidacion.mensaje,'Confirmado');
        }
}