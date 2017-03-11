function creaDialogoBajaIncidencia(){
    $("#bajaIncidencia").dialog({
        title: 'Anula de Incidencia',
        autoOpen: true,
        modal:true,
        close: function () {$(this).dialog("close"); $(this).remove();},
        hide: "blind",
        show: "scale",
        height:"auto",
        width:"500px",
        resizable:false,
        buttons: [{
            text: "Anular",
            class: "btn btn-default btn-sm btn-danger",
            click: procesoBajaIncidencia
        }]
    });

    var select = document.getElementById("incidenciaBaja");
    cargarSelectIncidenciaActivas(select,'anular');
    var selectMaquinaria = formBajaIncidencia.maquinariaIncidencia;
    cargarSelectMaquinaria(selectMaquinaria,'incidencia');
    select.addEventListener("change",cargarDatosIncidencia,false);
}
function procesoBajaIncidencia(){
    var oRespuestaValidacion = validaIncidencia();
    console.log("oRespuestaValidacion = "+oRespuestaValidacion.valida)
    if(oRespuestaValidacion.valida){
        $.ajax({
            type: "POST",
            url: "php/bajaIncidencia.php",
            data: 'incidencia='+oRespuestaValidacion.oIncidencia.id,
            datatype: 'json',
            success: function(mensaje){
            }
        });
        $(".ui-dialog-titlebar-close").click();
        mensajePersonalizado(oRespuestaValidacion.mensaje,'Anulada');
    }
}