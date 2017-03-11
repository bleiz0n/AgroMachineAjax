
function llamadaListadoCliente(){
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "php/listadoClientes.php", true);
    peticion.overrideMimeType('text/xml');
    peticion.send(null);
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var oXML = this.responseXML;
            var clientes = procesarXML(oXML);
            if(clientes.length==0){
                alert("No hay ningún cliente dado de alta");
            }
            else{
                var tituloTh=['DNI','Nombre','Apellidos','Domicilio','Provincia','CP','Telefono'];
                var idTabla='tablaClientes';
                var cadena='Clientes listados';
                var total=clientes.length;

                    creaInsertaTabla(idTabla,'tCliente');
                    insertaCabeceraTabla(tituloTh,'tablaClientes');
                    insertaBodyTabla(clientes,'tablaClientes');
                    insertaPieTabla(total,cadena,'tablaClientes',tituloTh.length);
            }
        }
    }
}
function procesarXML(oXML){
    var xmlCliente = oXML.getElementsByTagName("cliente");
    var clientes = new Array(xmlCliente.length);
    for(var i=0;i<xmlCliente.length;i++){
        clientes[i] = new Array(xmlCliente[i].childNodes.length);
        for(var j=0;j<xmlCliente[i].childNodes.length;j++){
            clientes[i][j]=xmlCliente[i].childNodes[j].textContent;
        }
    }
    return clientes;
}
function creaDialogoListadoCliente(){
    $("#mClientes").dialog({
        title: 'Listado de Clientes',
        autoOpen: true,
        modal:true,
        close: function () {$(this).dialog("close"); $(this).remove();},
        hide: "blind",
        show: "fade",
        height:"auto",
        width:"auto",
        resizable:false,
        buttons: [{
            text: "Cerrar",
            class: "btn btn-default btn-sm btn-info",
            click: function () {$(".ui-dialog-titlebar-close").click();}
        }]
    });
    llamadaListadoCliente();
}