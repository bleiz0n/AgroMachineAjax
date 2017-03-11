function limpiamosSelect(select){
    for (var i=select.length-1; i>0 ; i--) {
        if(select.options.length>=0){
            select.removeChild(select.options[i]);
        }
    }
}
function rellenamosSelect(select,values,options){
    //Rellenamos select
    for(var i=0; i<options.length; i++){
        var opt = options[i]; var val = values[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = val;
        select.appendChild(el);
    }
}
function inputsDisabledVacios(form){
    var inputs = form.getElementsByTagName('input');
    for(i=0;i<inputs.length;i++){
        inputs[i].setAttribute("disabled","disabled");
        inputs[i].value = "";
    }
}
function inputsHabilitados(form){
    var inputs = form.getElementsByTagName('input');
    for(i=0;i<inputs.length;i++){
        inputs[i].removeAttribute("disabled");
    }
}
function primerOptiondeSelects(select,cadena){
    select.options[0].text=cadena;
}

function anadirCeros(number, length) {
    var cad = '' + number;
    while (cad.length < length) {
        cad = '0' + cad;
    }
    return cad;
}

function cargarFecha(input){
    var f1, fecha;
    var f = new Date();

    f1 = (f.getMonth() + 1) + "/" + f.getDate() + "/" + f.getFullYear();
    fecha = anadirCeros(f.getDate(),2) + "/" + anadirCeros((f.getMonth() + 1),2) + "/" + f.getFullYear();
    input.value = fecha;
}
function cargarFechas(){
    var txtFechaInicio = formAltaAlquiler.fechaInicioAlquiler;
    var txtFechaFin = formAltaAlquiler.fechaFinAlquiler;
    var f1, f2;
    var fechaInicio, fechaFin;
    var f = new Date();

    f1 = (f.getMonth() + 1) + "/" + f.getDate() + "/" + f.getFullYear();
    fechaInicio = anadirCeros(f.getDate(),2) + "/" + anadirCeros((f.getMonth() + 1),2) + "/" + f.getFullYear();
    txtFechaInicio.value = fechaInicio;

    f2 = sumarDias(f, 30);
    fechaFin = anadirCeros(f2.getDate(),2) + "/" + anadirCeros((f2.getMonth() + 1),2) + "/" + f2.getFullYear();
    txtFechaFin.value = fechaFin;
}


function sumarDias(fecha, dias) {
    var resultado = new Date(fecha);
    resultado.setDate(resultado.getDate() + dias);
    return resultado;
}
/* Validar fecha excepciones */
function isValidDate(fecha) {
    var valid = true;

    fecha = fecha.replace('/-/g', '');

    var day  = parseInt(fecha.substring(0,2),10);
    var month   = parseInt(fecha.substring(3,5),10);
    var year = parseInt(fecha.substring(6,10),10);

    if((month < 1) || (month > 12)) valid = false;
    else if((day < 1) || (day > 31)) valid = false;
    else if(((month == 4) || (month == 6) || (month == 9) || (month == 11)) && (day > 30)) valid = false;
    else if((month == 2) && (((year % 400) == 0) || ((year % 4) == 0)) && ((year % 100) != 0) && (day > 29)) valid = false;
    else if((month == 2) && ((year % 100) == 0) && (day > 29)) valid = false;
    else if((month == 2) && (day > 28)) valid = false;

    return valid;
}

function mensajePersonalizado(sMensaje, sTitulo){
    if (!sTitulo)
        sTitulo = 'Mensaje';
    if (!sMensaje)
        sMensaje = 'No hay descripcion';

    $("<div></div>").html(sMensaje).dialog({
        title: sTitulo,
        resizable: false,
        modal: true,
        close: function () {$(this).dialog("close"); $(this).remove();},
        buttons: [{
            text: "Aceptar",
            class: "btn btn-default btn-sm btn-primary",
            click: function(){$( this ).dialog( "close" );$(this).remove();}
        }]
    });
}