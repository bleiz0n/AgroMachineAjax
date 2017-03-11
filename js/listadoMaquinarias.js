function creaDialogoFiltroMaquinaria(){
    $("#filtraMaquinarias").dialog({
        title: 'Filtrar Maquinarias',
        autoOpen: true,
        modal:true,
        close: function () {$(this).dialog("close"); $(this).remove();},
        hide: "blind",
        show: "fade",
        height:"auto",
        width:"400px",
        resizable:false,
        buttons: [{
            text: "Filtrar",
            class: "btn btn-default btn-sm btn-info",
            click: function () {$(".ui-dialog-titlebar-close").click();
                llamadaListadoMaquinaria(formFiltraMaquinarias.rbtTipoMaquinaria.value);
            }
        }]
    });
}

function llamadaListadoMaquinaria(seleccionado){
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "php/listadoMaquinarias.php", true);
    peticion.overrideMimeType('text/xml');
    peticion.send(null);
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var oXML = this.responseXML;
            var todasMaquinarias = procesarXML(oXML);
            if(todasMaquinarias.length==0){
                alert("No hay ninguna maquinaria dado de alta");
            }
            else{
                var tipoSeleccionado=seleccionado;
                console.log(tipoSeleccionado);
                var tituloTh=['ID','Nombre','Marca','Alquiler'];
                cadena='Maquinarias';
                var maquinarias = new Array();

                if(tipoSeleccionado=="todo"){
                    tituloTh.push('Tipo');
                }
                else if(tipoSeleccionado=="electrica"){
                    tituloTh.push('Bateria','Voltaje');
                    cadena+=' Electricas';
                }
                else{
                    tituloTh.push('Combustible','Capacidad');
                    cadena+=' de Combustible';
                }

                var x=0;
                for(var i=0;i<todasMaquinarias.length;i++){
                    maquinarias[x] = new Array();
                    for(var j=0;j<tituloTh.length;j++){
                        if(tipoSeleccionado=="todo"){
                            if(j==4){
                                if(todasMaquinarias[i][4]!=0) //Si bateria no es 0
                                    maquinarias[x][4]="Electrica";
                                else
                                    maquinarias[x][4]="Combustible";
                            }
                            else{
                                maquinarias[x][j]=todasMaquinarias[i][j];
                            }
                        }
                        else if(tipoSeleccionado=="electrica"){
                            if(todasMaquinarias[i][4]!=0)
                                maquinarias[x][j]=todasMaquinarias[i][j];
                        }
                        else{
                            if(tipoSeleccionado=="combustible"){
                                if(todasMaquinarias[i][4]==0){ //Si bateria == 0
                                    if(j>=0 && j<4)
                                        maquinarias[x][j]=todasMaquinarias[i][j];
                                    else if(j==4)
                                        maquinarias[x][j]=todasMaquinarias[i][6];
                                    else if(j==5)
                                        maquinarias[x][j]=todasMaquinarias[i][7];
                                }
                            }
                        }
                    }
                    if(maquinarias[x][i] !== undefined)
                        x++;
                }


                console.log(maquinarias[0].length)
                console.log(maquinarias)
                var idTabla='tablaMaquinarias';
                var total=maquinarias.length;

                $('#formularios').load("formularios/gestionListados.html #mMaquinarias", function(){
                    creaDialogoListadoMaquinaria(cadena);
                    creaInsertaTabla(idTabla,'tMaquinaria');
                    insertaCabeceraTabla(tituloTh,idTabla);
                    insertaBodyTabla(maquinarias,idTabla);
                    insertaPieTabla(total,cadena+' listadas','tablaMaquinarias',tituloTh.length);
                });
            }
        }
    }
}
function procesarXML(oXML) {
    var xml = oXML.getElementsByTagName("maquinaria");
    var maquinarias = new Array(xml.length);
        for(var i=0;i<xml.length;i++){
            maquinarias[i] = new Array(xml[i].childNodes.length);
            for(var j=0;j<xml[i].childNodes.length;j++){
                    maquinarias[i][j]=xml[i].childNodes[j].textContent;
            }
        }
    console.log(maquinarias)
    return maquinarias;
}

function creaDialogoListadoMaquinaria(cadena){
    $("#mMaquinarias").dialog({
        title: 'Listado de '+cadena,
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

}