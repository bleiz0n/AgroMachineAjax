
function creaDialogoAltaMaquinaria(){
    $("#altaMaquinaria").dialog({
        title: 'Alta de Maquinaria',
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
            click: procesoAltaMaquinaria
        }]
    });
    cargarIdMaquinaria();

    $('input[name=rbtTipoMaquinaria]:radio').change(function (event) {
        if ($('input[name=rbtTipoMaquinaria]:checked').val()=="electrica") {
            $('#capaAltaTipoElectrica').attr('style','display:block');
            $('#capaAltaTipoCombustible').attr('style','display:none');
            formAltaMaquinaria.bateriaElectrica.value = "";
            formAltaMaquinaria.voltajeElectrica.value = "";
        }
        else{
            $('#capaAltaTipoCombustible').attr('style','display:block');
            $('#capaAltaTipoElectrica').attr('style','display:none');
            formAltaMaquinaria.tipoCombustible.value = "";
            formAltaMaquinaria.capacidadCombustible.value = "";
        }
    });
}
function procesoAltaMaquinaria(){
        var oRespuestaValidacion = validaMaquinaria();
        if(oRespuestaValidacion.valida){
            $.ajax({
                type: "POST",
                url: "php/altaMaquinaria.php",
                data: 'maquinaria='+JSON.stringify(oRespuestaValidacion.oMaquinaria),
                datatype: 'json',
                success: function(mensaje){
                }
            });
            $(".ui-dialog-titlebar-close").click();
            mensajePersonalizado(oRespuestaValidacion.mensaje,'Confirmado');
        }
}

function cargarIdMaquinaria(){
    //Llamada ajax -> GET, respuesta Text | Conseguir ultima id maquinaria existente
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "php/ultimaMaquinaria.php", true);
    peticion.send(null);
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var ultimaMaquinaria = this.responseText;
            var actualMaquinaria = parseInt(ultimaMaquinaria)+1;
            var cadena;
                cadena = anadirCeros(actualMaquinaria,5);
                var idMaquinaria = formAltaMaquinaria.idMaquinaria;
                idMaquinaria.value = cadena;
        }
    }
    peticion.onerror = function (e) {console.error(peticion.statusText);}
}