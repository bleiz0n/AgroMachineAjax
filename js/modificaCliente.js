function creaDialogoModificaCliente(){
    $("#modificaCliente").dialog({
        title: 'Modificacion de Cliente',
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
            click: procesoModificaCliente
        }]
    });
    var selectProvincia = formModificaCliente.provinciaCliente;
    selectProvincia.setAttribute("disabled","disabled");
    var selectCliente = document.getElementById("clienteModifica");
        cargarSelectCliente(selectCliente,'modificar');
        cargarSelectProvincia(selectProvincia);
        selectCliente.addEventListener("change",cargarDatosCliente,false);

}
function procesoModificaCliente(){
        var oRespuestaValidacion = validaCliente();
        console.log("oRespuestaValidacion = "+oRespuestaValidacion.valida)
        if(oRespuestaValidacion.valida){
            $.ajax({
                type: "POST",
                url: "php/modificaCliente.php",
                data: 'cliente='+JSON.stringify(oRespuestaValidacion.oCliente),
                datatype: 'json',
                success: function(mensaje){
                }
            });
            $(".ui-dialog-titlebar-close").click();
            mensajePersonalizado(oRespuestaValidacion.mensaje,'Actualizado');
        }

}