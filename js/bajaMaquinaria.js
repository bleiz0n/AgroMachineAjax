function creaDialogoBajaMaquinaria(){
    $("#bajaMaquinaria").dialog({
        title: 'Baja de Maquinaria',
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
            click: procesoBajaMaquinaria
        }]
    });

    var select = document.getElementById("maquinariaBaja");
    cargarSelectMaquinariaDisponible(select,'dar de baja');
    select.addEventListener("change",cargarDatosMaquinaria,false);
}
function procesoBajaMaquinaria(){
         var oRespuestaValidacion = validaMaquinaria();
        console.log("oRespuestaValidacion = "+oRespuestaValidacion.valida)
        if(oRespuestaValidacion.valida){
            $.ajax({
                type: "POST",
                url: "php/bajaMaquinaria.php",
                data: 'maquinaria='+oRespuestaValidacion.oMaquinaria.id,
                datatype: 'json',
                success: function(mensaje){
                }
            });
            $(".ui-dialog-titlebar-close").click();
            mensajePersonalizado(oRespuestaValidacion.mensaje,'Borrada');
        }

}