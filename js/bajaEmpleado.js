function creaDialogoBajaEmpleado(){
    $("#bajaEmpleado").dialog({
        title: 'Baja de Empleado',
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
            click: procesoBajaEmpleado
        }]
    });
    var select = document.getElementById("empleadoBaja");
        cargarSelectEmpleado(select,'dar de baja');
        select.addEventListener("change",cargarDatosEmpleado,false);
}
function procesoBajaEmpleado(){
         var oRespuestaValidacion = validaEmpleado();
        console.log("oRespuestaValidacion = "+oRespuestaValidacion.valida)
        if(oRespuestaValidacion.valida){
            $.ajax({
                type: "POST",
                url: "php/bajaEmpleado.php",
                data: 'empleado='+oRespuestaValidacion.oEmpleado.dni,
                datatype: 'json',
                success: function(mensaje){
                }
            });
            $(".ui-dialog-titlebar-close").click();
            mensajePersonalizado(oRespuestaValidacion.mensaje,'Borrado');
        }

}