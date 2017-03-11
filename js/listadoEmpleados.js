
function llamadaListadoEmpleado(){
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "php/listadoEmpleados.php", true);
    peticion.overrideMimeType('text/xml');
    peticion.send(null);
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var oXML = this.responseXML;
            var empleados = procesarXML(oXML);
            if(empleados.length==0){
                alert("No hay ning�n empleado dado de alta");
            }
            else{
                var tituloTh=['DNI','Nombre','Apellidos','Rol','Domicilio','Provincia','CP','Telefono'];
                var idTabla='tablaEmpleados';
                var cadena='Empleados listados';
                var total=empleados.length;

                    creaInsertaTabla(idTabla,'tEmpleado');
                    insertaCabeceraTabla(tituloTh,'tablaEmpleados');
                    insertaBodyTabla(empleados,'tablaEmpleados');
                    insertaPieTabla(total,cadena,'tablaEmpleados',tituloTh.length);

            }
        }
    }
}
function procesarXML(oXML){
    var xmlEmpleado = oXML.getElementsByTagName("empleado");
    var empleados = new Array(xmlEmpleado.length);
    for(var i=0;i<xmlEmpleado.length;i++){
        empleados[i] = new Array(xmlEmpleado[i].childNodes.length);
        for(var j=0;j<xmlEmpleado[i].childNodes.length;j++){
            empleados[i][j]=xmlEmpleado[i].childNodes[j].textContent;
        }
    }
    return empleados;
}
function creaDialogoListadoEmpleado(){
    $("#mEmpleados").dialog({
        title: 'Listado de Empleados',
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
    llamadaListadoEmpleado();
}