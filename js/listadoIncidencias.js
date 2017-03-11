
function llamadaListadoIncidencia(){
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "php/listadoIncidencias.php", true);
    peticion.overrideMimeType('text/xml');
    peticion.send(null);
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var oXML = this.responseXML;
            var incidencias = procesarXML(oXML);
            if(incidencias.length==0){
                alert("No hay ninguna incidencia dado de alta");
            }
            else{
                var tituloTh=['ID','Maquinaria','Nombre','Marca','Tipo','Concepto','Descripcion','Estado','Fecha'];
                var idTabla='tablaIncidencias';
                var cadena='Incidencias listadas';
                var total=incidencias.length;

                creaInsertaTabla(idTabla,'tIncidencia');
                insertaCabeceraTabla(tituloTh,idTabla);
                insertaBodyTabla(incidencias,idTabla);
                insertaPieTabla(total,cadena,idTabla,tituloTh.length);
            }
        }
    }
}
function procesarXML(oXML){
    var xmlIncidencia = oXML.getElementsByTagName("incidencia");
    var incidencias = new Array(xmlIncidencia.length);
    for(var i=0;i<xmlIncidencia.length;i++){
        incidencias[i] = new Array(xmlIncidencia[i].childNodes.length);
        for(var j=0;j<xmlIncidencia[i].childNodes.length;j++){
            if(j==4){
                if(xmlIncidencia[i].childNodes[4]!=0) //Si bateria no es 0
                    incidencias[i][4]="Electrica";
                else
                    incidencias[i][4]="Combustible";
            }
            else{
                incidencias[i][j]=xmlIncidencia[i].childNodes[j].textContent;
            }
        }
    }
    return incidencias;
}
function creaDialogoListadoIncidencia(){
    $("#mIncidencias").dialog({
        title: 'Listado de Incidencias',
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
    llamadaListadoIncidencia();
}