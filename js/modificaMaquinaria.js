function creaDialogoModificaMaquinaria(){
    $("#modificaMaquinaria").dialog({
        title: 'Modificacion de Maquinaria',
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
            click: procesoModificaMaquinaria
        }]
    });
    $('input[name=rbtTipoMaquinaria]:radio').change(function (event) {
        if ($('input[name=rbtTipoMaquinaria]:checked').val()=="electrica") {
            $('#capaModificaTipoElectrica').attr('style','display:block');
            $('#capaModificaTipoCombustible').attr('style','display:none');
            formModificaMaquinaria.bateriaElectrica.value = "";
            formModificaMaquinaria.voltajeElectrica.value = "";
        }
        else if ($('input[name=rbtTipoMaquinaria]:checked').val()=="combustible") {
            $('#capaModificaTipoCombustible').attr('style','display:block');
            $('#capaModificaTipoElectrica').attr('style','display:none');
            formModificaMaquinaria.tipoCombustible.value = "";
            formModificaMaquinaria.capacidadCombustible.value = "";
        }

    });

    var select = document.getElementById("maquinariaModifica");
    cargarSelectMaquinaria(select,'modificar');
    select.addEventListener("change",cargarDatosMaquinaria,false);

}
function procesoModificaMaquinaria(){
        var oRespuestaValidacion = validaMaquinaria();
        console.log("oRespuestaValidacion = "+oRespuestaValidacion.valida)
        if(oRespuestaValidacion.valida){
            $.ajax({
                type: "POST",
                url: "php/modificaMaquinaria.php",
                data: 'maquinaria='+JSON.stringify(oRespuestaValidacion.oMaquinaria),
                datatype: 'json',
                success: function(mensaje){
                }
            });
            $(".ui-dialog-titlebar-close").click();
            mensajePersonalizado(oRespuestaValidacion.mensaje,'Actualizada');
        }

}