function creaDialogoModificaEmpleado(){
    $("#modificaEmpleado").dialog({
        title: 'Modificacion de Empleado',
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
            click: procesoModificaEmpleado
        }]
    });
    var selectProvincia = formModificaEmpleado.provinciaEmpleado;
    selectProvincia.setAttribute("disabled","disabled");
    var selectEmpleado = document.getElementById("empleadoModifica");
        cargarSelectEmpleado(selectEmpleado,'modificar');
        cargarSelectProvincia(selectProvincia);
        selectEmpleado.addEventListener("change",cargarDatosEmpleado,false);
}
function procesoModificaEmpleado(){
        var oRespuestaValidacion = validaEmpleado();
        console.log("oRespuestaValidacion = "+oRespuestaValidacion.valida)
        if(oRespuestaValidacion.valida){
            $.ajax({
                type: "POST",
                url: "php/modificaEmpleado.php",
                data: 'empleado='+JSON.stringify(oRespuestaValidacion.oEmpleado),
                datatype: 'json',
                success: function(mensaje){
                }
            });
            $(".ui-dialog-titlebar-close").click();
            mensajePersonalizado(oRespuestaValidacion.mensaje,'Actualizado');
        }

}