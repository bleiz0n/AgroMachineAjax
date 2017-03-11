function creaDialogoBajaCliente(){
    $("#bajaCliente").dialog({
        title: 'Baja de Cliente',
        autoOpen: true,
        modal:true,
        close: function () {$(this).dialog("close"); $(this).remove();},
        hide: "blind",
        show: "scale",
        height:"auto",
        width:"500px",
        resizable:false,
        buttons: [{
            text: "Borrar",
            class: "btn btn-default btn-sm btn-danger",
            click: procesoBajaCliente
        }]
    });
    var select = document.getElementById("clienteBaja");
        cargarSelectCliente(select,'dar de baja');
        select.removeAttribute('disabled');
        select.addEventListener("change",cargarDatosCliente,false);
}
function procesoBajaCliente(){
         var oRespuestaValidacion = validaCliente();
        console.log("oRespuestaValidacion = "+oRespuestaValidacion.valida)
        if(oRespuestaValidacion.valida){
            $.ajax({
                type: "POST",
                url: "php/bajaCliente.php",
                data: 'cliente='+oRespuestaValidacion.oCliente.dni,
                datatype: 'json',
                success: function(mensaje){
                }
            });
            $(".ui-dialog-titlebar-close").click();
            mensajePersonalizado(oRespuestaValidacion.mensaje,'Borrado');
        }
}