
function llamadaListadoAlquiler(){
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "php/listadoAlquileres.php", true);
    peticion.overrideMimeType('text/xml');
    peticion.send(null);
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var oXML = this.responseXML;
            var alquileres = procesarXML(oXML);
            if(alquileres.length==0){
                alert("No hay ningún alquiler dado de alta");
            }
            else{
                var tituloTh=['ID','Empleado','Cliente','Nombre','Apellidos','IDM','Maquinaria','Marca','Mensualidad','Inicio','Fin'];
                var idTabla='tablaAlquileres';
                var cadena='Alquileres listados';
                var total=alquileres.length;

                    creaInsertaTabla(idTabla,'tAlquiler');
                    insertaCabeceraTabla(tituloTh,'tablaAlquileres');
                    insertaBodyTabla(alquileres,'tablaAlquileres');
                    insertaPieTabla(total,cadena,'tablaAlquileres',tituloTh.length);
            }
        }
    }
}
function procesarXML(oXML){
    var xmlAlquiler = oXML.getElementsByTagName("alquiler");
    var alquileres = new Array(xmlAlquiler.length);
    for(var i=0;i<xmlAlquiler.length;i++){
        alquileres[i] = new Array(xmlAlquiler[i].childNodes.length);
        for(var j=0;j<xmlAlquiler[i].childNodes.length;j++){
            alquileres[i][j]=xmlAlquiler[i].childNodes[j].textContent;
        }
    }
    return alquileres;
}
function creaDialogoListadoAlquiler(){
    $("#mAlquileres").dialog({
        title: 'Listado de Alquileres',
        autoOpen: true,
        modal:true,
        close: function () {$(this).dialog("close"); $(this).remove();},
        hide: "blind",
        show: "fade",
        height:"auto",
        width:"1200px",
        resizable:false,
        buttons: [{
            text: "Cerrar",
            class: "btn btn-default btn-sm btn-info",
            click: function () {$(".ui-dialog-titlebar-close").click();}
        }]
    });
    llamadaListadoAlquiler();
}