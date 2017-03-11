function creaDialogoModificaIncidencia(){
    $("#modificaIncidencia").dialog({
        title: 'Modificacion de Incidencia',
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
            click: procesoModificaIncidencia
        }]
    });
    $("#fechaIncidencia").datepicker({
        dateFormat: 'dd/mm/yy',
        minDate: '-2d',
        maxDate: '+2d',
        onClose: function(dateText) {

        }
    });


    var select = document.getElementById("incidenciaModifica");
    cargarSelectIncidencia(select,'modificar');
    var selectMaquinaria = formModificaIncidencia.maquinariaIncidencia;
    cargarSelectMaquinaria(selectMaquinaria,'incidencia');
    select.addEventListener("change",cargarDatosIncidencia,false);

}
function procesoModificaIncidencia(){
        var oRespuestaValidacion = validaIncidencia();
        console.log("oRespuestaValidacion = "+oRespuestaValidacion.valida)
        if(oRespuestaValidacion.valida){
            $.ajax({
                type: "POST",
                url: "php/modificaIncidencia.php",
                data: 'incidencia='+JSON.stringify(oRespuestaValidacion.oIncidencia),
                datatype: 'json',
                success: function(mensaje){
                }
            });
            $(".ui-dialog-titlebar-close").click();
            mensajePersonalizado(oRespuestaValidacion.mensaje,'Actualizada');
        }

}