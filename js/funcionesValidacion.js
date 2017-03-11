function validaCliente(){
    var error="";
    var cancelarEnvio=false;
    var focus=false;
    var formulario;
    var dni;
    //Recogemos datos de los Clientes
    if($('#altaCliente').length > 0){
        formulario = formAltaCliente;
        dni = formulario.dniCliente;
        var provinciaSeleccionada = formulario.provinciaCliente.selectedIndex;
    }
    else if($('#bajaCliente').length > 0){
        formulario = formBajaCliente;
        var selectCliente = formulario.clienteBaja;
        dni = formulario.clienteBaja.options[formulario.clienteBaja.selectedIndex];
    }
    else if($('#modificaCliente').length > 0){
        formulario = formModificaCliente;
        var selectCliente = formulario.clienteModifica;
        dni = formModificaCliente.clienteModifica.options[formModificaCliente.clienteModifica.selectedIndex];
        var provinciaSeleccionada = formulario.provinciaCliente.selectedIndex;
    }
    var nombre = formulario.nombreCliente;
    var apellidos = formulario.apellidosCliente;
    var direccion = formulario.direccionCliente;
    var provincia = formulario.provinciaCliente;
    var cp = formulario.cpCliente;
    var telefono = formulario.telefonoCliente;
    //Comprobamos que se este editando

    if($('#altaCliente').length > 0){
        /*Comprobamos DNI de Cliente*/
        if(/^\d{8}[a-zA-Z]$/.test(dni.value)){
            dni.setAttribute("class","form-control");
        }
        else{
            error+="Error en el dni. (12345678A)<br>";
            dni.setAttribute("class","form-control error");
            cancelarEnvio=true;
            dni.focus();
            focus=true;
        }
    }
    else{
        if(selectCliente.selectedIndex > 0 ){
            selectCliente.setAttribute("class","form-control");
        }
        else{
            error+="Selecciona dni<br>";
            selectCliente.setAttribute("class","form-control error");
            cancelarEnvio=true;
            selectCliente.focus();
            focus=true;
        }
    }

    /*Comprobamos Nombre de Cliente*/
    if(/^[A-Za-z\s\w����������]{3,40}$/.test(nombre.value)){
        nombre.setAttribute("class","form-control");
    }
    else{
        error+="Error en el nombre.<br>";
        nombre.setAttribute("class","form-control error");
        cancelarEnvio=true;
        nombre.focus();
        focus=true;
    }

    /*Comprobamos Apellidos de Cliente*/
    if(/^[A-Za-z\s\w����������]{3,40}$/.test(apellidos.value)){
        apellidos.setAttribute("class","form-control");
    }
    else{
        error+="Error en los apellidos.<br>";
        apellidos.setAttribute("class","form-control error");
        cancelarEnvio=true;
        apellidos.focus();
        focus=true;
    }

    /*Comprobamos Direccion de Cliente*/
    if(/^[A-Za-z0-9\s\,\(\)\.\w����������]{3,40}$/.test(direccion.value)){
        direccion.setAttribute("class","form-control");
    }
    else{
        error+="Error en la direcci&oacute;n.<br>";
        direccion.setAttribute("class","form-control error");
        cancelarEnvio=true;
        direccion.focus();
        focus=true;
    }
    /*Comprobamos Provincia de Cliente*/
    if($('#altaCliente').length > 0 || $('#modificaCliente').length > 0){
        if(provinciaSeleccionada!=0 )
            provincia.setAttribute("class","form-control");
        else{
            error+="Selecciona provincia.<br>";
            provincia.setAttribute("class","form-control error");
            cancelarEnvio=true;
            provincia.focus();
        }
    }
    else if($('#bajaCliente').length > 0){
        if(formBajaCliente.provinciaCliente.value != "")
            formBajaCliente.setAttribute("class","form-control");
        else{
            error+="Error en la provincia.<br>";
            provincia.setAttribute("class","form-control error");
            cancelarEnvio=true;
            provincia.focus();
        }
    }
    /*Comprobamos CP de Cliente*/
    if(/^[0-9]{5}$/.test(cp.value)){
        cp.setAttribute("class","form-control");
    }
    else{
        error+="Error en el c&oacute;digo postal.<br>";
        cp.setAttribute("class","form-control error");
        cancelarEnvio=true;
        cp.focus();
        focus=true;
    }

    /*Comprobamos Tel�fono de Cliente*/
    if(/^[0-9]{2,3}-? ?[0-9]{6,7}$/.test(telefono.value)){
        telefono.setAttribute("class","form-control");
    }
    else{
        error+="Error en el tel&eacute;fono. (987654321)<br>";
        telefono.setAttribute("class","form-control error");
        cancelarEnvio=true;
        telefono.focus();
        focus=true;
    }

    if (cancelarEnvio){
        mensajePersonalizado(error,'Error');
        //event.preventDefault(); //Anula el envio
    }
    else{
        var sMensaje = "DNI: "+dni.value +"<br>" +
            "Nombre: " +nombre.value +"<br>" +
            "Apellidos: " +apellidos.value +"<br>" +
            "Direcci&oacute;n: " +direccion.value +"<br>" +
            "Provincia: "+provincia.value +"<br>" +
            "CP: "+cp.value +"<br>" +
            "Tel&eacute;fono: " +telefono.value +".";

        var oCliente={dni:dni.value,nombre:nombre.value,apellidos:apellidos.value,direccion:direccion.value,provincia:provincia.value,cp:cp.value,telefono:telefono.value};

    }
    var respuestaValidacion=new Object();
    respuestaValidacion.valida=!cancelarEnvio;
    respuestaValidacion.oCliente=oCliente;
    respuestaValidacion.mensaje=sMensaje;
    return respuestaValidacion;
}

function validaMaquinaria(){
    var error="";
    var cancelarEnvio=false;
    var focus=false;

    var formulario;
    var id;

    //Recogemos datos de los Clientes
    if($('#altaMaquinaria').length > 0){
        formulario = formAltaMaquinaria;
        id = formulario.idMaquinaria;
    }
    if($('#bajaMaquinaria').length > 0){
        formulario = formBajaMaquinaria;
        var selectMaquinaria = formulario.maquinariaBaja;
        id = selectMaquinaria.options[selectMaquinaria.selectedIndex];
    }
    if($('#modificaMaquinaria').length > 0){
        formulario = formModificaMaquinaria;
        selectMaquinaria = formulario.maquinariaModifica;
        id = selectMaquinaria.options[selectMaquinaria.selectedIndex];
    }

    var nombre = formulario.nombreMaquinaria;
    var marca = formulario.marcaMaquinaria;
    var precio = formulario.precioMaquinaria;
    var tipoMaquinaria = formulario.rbtTipoMaquinaria;
    var bateria = formulario.bateriaElectrica;
    var voltaje = formulario.voltajeElectrica;
    var tipoC = formulario.tipoCombustible;
    var capacidad = formulario.capacidadCombustible;

    //Comprobamos que estemos en altaCliente
    if($('#bajaMaquinaria').length > 0 || $('#modificaMaquinaria').length > 0){
        if(selectMaquinaria.selectedIndex > 0 ){
            selectMaquinaria.setAttribute("class","form-control");
        }
        else{
            error+="Selecciona maquinaria.<br>";
            selectMaquinaria.setAttribute("class","form-control error");
            cancelarEnvio=true;
            selectMaquinaria.focus();
            focus=true;
        }
    }

    /*Comprobamos Nombre de Maquinaria*/
    if(/^[A-Za-z\s\w����������]{3,40}$/.test(nombre.value)){
        nombre.setAttribute("class","form-control");
    }
    else{
        error+="Error en el nombre.<br>";
        nombre.setAttribute("class","form-control error");
        cancelarEnvio=true;
        nombre.focus();
        focus=true;
    }

    /*Comprobamos marca de Maquinaria*/
    if(/^[A-Za-z\s\w����������]{3,40}$/.test(marca.value)){
        marca.setAttribute("class","form-control");
    }
    else{
        error+="Error en la marca.<br>";
        marca.setAttribute("class","form-control error");
        cancelarEnvio=true;
        marca.focus();
        focus=true;
    }

    /*Comprobamos precio de Maquinaria*/
    if(/^[0-9]+(\.[0-9][0-9])?$/.test(precio.value)){
        precio.setAttribute("class","form-control");
    }
    else{
        error+="Error en el precio.<br>";
        precio.setAttribute("class","form-control error");
        cancelarEnvio=true;
        precio.focus();
        focus=true;
    }
    /*Comprobamos Tipo Maquinaria Electrica*/
    if(tipoMaquinaria[0].checked){
        /*Comprobamos bateria de Maquinaria*/
        if(/^[0-9]{1}$/.test(bateria.value)){
            bateria.setAttribute("class","form-control");
        }
        else{
            error+="Error en la bater&iacute;a.<br>";
            bateria.setAttribute("class","form-control error");
            cancelarEnvio=true;
            bateria.focus();
            focus=true;
        }
        /*Comprobamos voltaje de Maquinaria*/
        if(/^\d+(\.\d{1,2})?$/.test(voltaje.value)){
            voltaje.setAttribute("class","form-control");
        }
        else{
            error+="Error en el voltaje.<br>";
            voltaje.setAttribute("class","form-control error");
            cancelarEnvio=true;
            voltaje.focus();
            focus=true;
        }
    }
    /*Comprobamos Tipo Maquinaria Combustible*/
    else if(tipoMaquinaria[1].checked){
        /*Comprobamos Combustible*/
        if(/^[A-Za-z\s\w����������]{3,40}$/.test(tipoC.value)){
            tipoC.setAttribute("class","form-control");
        }
        else{
            error+="Error en el combustible.<br>";
            tipoC.setAttribute("class","form-control error");
            cancelarEnvio=true;
            tipoC.focus();
            focus=true;
        }
        /*Comprobamos capacidad de Maquinaria*/
        if(/^[0-9]{2,4}$/.test(capacidad.value)){
            tipoC.setAttribute("class","form-control");
        }
        else{
            error+="Error en litros de capacidad.<br>";
            capacidad.setAttribute("class","form-control error");
            cancelarEnvio=true;
            capacidad.focus();
            focus=true;
        }
    }
    else{
        error+="Selecciona un tipo de Maquinaria.<br>";
        cancelarEnvio=true;
        focus=true;
    }
    if (cancelarEnvio){
        mensajePersonalizado(error,'Error');
    }
    else{
        var sMensaje = "ID: "+id.value +"<br>" +
            "Nombre: " +nombre.value +"<br>" +
            "Marca: " +marca.value +"<br>" +
            "Precio: " +precio.value +"&euro;<br>";

        var oMaquinaria;
        if(tipoMaquinaria.value=="electrica"){
            sMensaje += "Bater�a: "+bateria.value +"<br>" + "Voltaje: "+voltaje.value +"v<br>";
            oMaquinaria={id:id.value,nombre:nombre.value,marca:marca.value,precio:precio.value,bateria:bateria.value,voltaje:voltaje.value,combustible:'',capacidad:''};
        }
        else{
            sMensaje += "Combustible: "+tipoC.value +"<br>" + "Capacidad: "+capacidad.value +"L<br>";
            oMaquinaria={id:id.value,nombre:nombre.value,marca:marca.value,precio:precio.value,bateria:'',voltaje:'',combustible:tipoC.value,capacidad:capacidad.value};
        }
    }
    var respuestaValidacion=new Object();
    respuestaValidacion.valida=!cancelarEnvio;
    respuestaValidacion.oMaquinaria=oMaquinaria;
    respuestaValidacion.mensaje=sMensaje;
    return respuestaValidacion;
}
function validaEmpleado(){
    var error="";
    var cancelarEnvio=false;
    var focus=false;
    var formulario;
    var dni;
    //Recogemos datos de los Empleados
    if($('#altaEmpleado').length > 0){
        formulario = formAltaEmpleado;
        dni = formulario.dniEmpleado;
        var provinciaSeleccionada = formulario.provinciaEmpleado.selectedIndex;
    }
    else if($('#bajaEmpleado').length > 0){
        formulario = formBajaEmpleado;
        var selectEmpleado = formulario.empleadoBaja;
        dni = formulario.empleadoBaja.options[formulario.empleadoBaja.selectedIndex];
    }
    else if($('#modificaEmpleado').length > 0){
        formulario = formModificaEmpleado;
        var selectEmpleado = formulario.empleadoModifica;
        dni = formModificaEmpleado.empleadoModifica.options[formModificaEmpleado.empleadoModifica.selectedIndex];
        var provinciaSeleccionada = formulario.provinciaEmpleado.selectedIndex;
    }
    var nombre = formulario.nombreEmpleado;
    var apellidos = formulario.apellidosEmpleado;
    var rol = formulario.rolEmpleado;
    var direccion = formulario.direccionEmpleado;
    var provincia = formulario.provinciaEmpleado;
    var cp = formulario.cpEmpleado;
    var telefono = formulario.telefonoEmpleado;
    //Comprobamos que se este editando

    if($('#altaEmpleado').length > 0){
        /*Comprobamos DNI de Empleado*/
        if(/^\d{8}[a-zA-Z]$/.test(dni.value)){
            dni.setAttribute("class","form-control");
        }
        else{
            error+="Error en el dni. (12345678A)<br>";
            dni.setAttribute("class","form-control error");
            cancelarEnvio=true;
            dni.focus();
            focus=true;
        }
    }
    else{
        if(selectEmpleado.selectedIndex > 0 ){
            selectEmpleado.setAttribute("class","form-control");
        }
        else{
            error+="Selecciona dni<br>";
            selectEmpleado.setAttribute("class","form-control error");
            cancelarEnvio=true;
            selectEmpleado.focus();
            focus=true;
        }
    }

    /*Comprobamos Nombre de Empleado*/
    if(/^[A-Za-z\s\w����������]{3,40}$/.test(nombre.value)){
        nombre.setAttribute("class","form-control");
    }
    else{
        error+="Error en el nombre.<br>";
        nombre.setAttribute("class","form-control error");
        cancelarEnvio=true;
        nombre.focus();
        focus=true;
    }

    /*Comprobamos Apellidos de Empleado*/
    if(/^[A-Za-z\s\w����������]{3,40}$/.test(apellidos.value)){
        apellidos.setAttribute("class","form-control");
    }
    else{
        error+="Error en los apellidos.<br>";
        apellidos.setAttribute("class","form-control error");
        cancelarEnvio=true;
        apellidos.focus();
        focus=true;
    }
    /*Comprobamos Rol de Empleado*/
    if(/^[A-Za-z\s\w����������]{3,40}$/.test(rol.value)){
        rol.setAttribute("class","form-control");
    }
    else{
        error+="Error en el rol.<br>";
        rol.setAttribute("class","form-control error");
        cancelarEnvio=true;
        rol.focus();
        focus=true;
    }
    /*Comprobamos Direccion de Empleado*/
    if(/^[A-Za-z0-9\s\,\(\)\.\w����������]{3,40}$/.test(direccion.value)){
        direccion.setAttribute("class","form-control");
    }
    else{
        error+="Error en la direcci&oacute;n.<br>";
        direccion.setAttribute("class","form-control error");
        cancelarEnvio=true;
        direccion.focus();
        focus=true;
    }
    /*Comprobamos Provincia de Empleado*/
    if($('#altaEmpleado').length > 0 || $('#modificaEmpleado').length > 0){
        if(provinciaSeleccionada!=0 )
            provincia.setAttribute("class","form-control");
        else{
            error+="Selecciona provincia.<br>";
            provincia.setAttribute("class","form-control error");
            cancelarEnvio=true;
            provincia.focus();
        }
    }
    else if($('#bajaEmpleado').length > 0){
        if(formBajaEmpleado.provinciaEmpleado.value != "")
            formBajaEmpleado.setAttribute("class","form-control");
        else{
            error+="Error en la provincia.<br>";
            provincia.setAttribute("class","form-control error");
            cancelarEnvio=true;
            provincia.focus();
        }
    }
    /*Comprobamos CP de Empleado*/
    if(/^[0-9]{5}$/.test(cp.value)){
        cp.setAttribute("class","form-control");
    }
    else{
        error+="Error en el c&oacute;digo postal.<br>";
        cp.setAttribute("class","form-control error");
        cancelarEnvio=true;
        cp.focus();
        focus=true;
    }

    /*Comprobamos Tel�fono de Empleado*/
    if(/^[0-9]{2,3}-? ?[0-9]{6,7}$/.test(telefono.value)){
        telefono.setAttribute("class","form-control");
    }
    else{
        error+="Error en el tel&eacute;fono. (987654321)<br>";
        telefono.setAttribute("class","form-control error");
        cancelarEnvio=true;
        telefono.focus();
        focus=true;
    }

    if (cancelarEnvio){
        mensajePersonalizado(error,'Error');
        //event.preventDefault(); //Anula el envio
    }
    else{
        var sMensaje = "DNI: "+dni.value +"<br>" +
            "Nombre: " +nombre.value +"<br>" +
            "Apellidos: " +apellidos.value +"<br>" +
            "Rol: " +rol.value +"<br>" +
            "Direcci&oacute;n: " +direccion.value +"<br>" +
            "Provincia: "+provincia.value +"<br>" +
            "CP: "+cp.value +"<br>" +
            "Tel&eacute;fono: " +telefono.value +".";

        var oEmpleado={dni:dni.value,nombre:nombre.value,apellidos:apellidos.value,rol:rol.value,direccion:direccion.value,provincia:provincia.value,cp:cp.value,telefono:telefono.value};
    }
    var respuestaValidacion=new Object();
    respuestaValidacion.valida=!cancelarEnvio;
    respuestaValidacion.oEmpleado=oEmpleado;
    respuestaValidacion.mensaje=sMensaje;
    return respuestaValidacion;
}
function validaAlquiler(){
    var error="";
    var cancelarEnvio=false;
    var focus=false;

    var formulario;
    var idAlquiler, selectAlquiler;
    var idEmpleado, selectEmpleado;
    var idCliente, selectCliente;
    var idMaquinaria, selectMaquinaria;

    //Recogemos datos de los Alquileres
    if($("#altaAlquiler").length > 0){
        formulario = formAltaAlquiler;
        idAlquiler = formulario.idAlquiler;
    }
    if($("#bajaAlquiler").length > 0){
        formulario = formBajaAlquiler;
        selectAlquiler = formulario.alquilerBaja;
        idAlquiler = selectAlquiler.options[selectAlquiler.selectedIndex];

    }
    if($("#modificaAlquiler").length > 0){
        formulario = formModificaAlquiler;
        selectAlquiler = formulario.alquilerModifica;
        idAlquiler = selectAlquiler.options[selectAlquiler.selectedIndex];
    }

    selectEmpleado = formulario.empleadoAlquiler;
    selectCliente = formulario.clienteAlquiler;
    selectMaquinaria = formulario.maquinariaAlquiler;
    idEmpleado = selectEmpleado.options[selectEmpleado.selectedIndex];
    idCliente = selectCliente.options[selectCliente.selectedIndex];
    idMaquinaria = selectMaquinaria.options[selectMaquinaria.selectedIndex];
    var fechaInicio = formulario.fechaInicioAlquiler;
    var fechaFin = formulario.fechaFinAlquiler;

    //Comprobamos que estemos en altaAlquiler
    if($("#altaAlquiler").length > 0){
        /*Comprobamos ID de Alquiler*/
        if(/^\d{5}$/.test(idAlquiler.value)){
            idAlquiler.setAttribute("class","form-control");
        }
        else{
            error+="Error en la id. (00001)<br>";
            idAlquiler.setAttribute("class","form-control error");
            cancelarEnvio=true;
            idAlquiler.focus();
            focus=true;
        }
    }
    else{
        /*Comprobamos select de Alquiler*/
        if(selectAlquiler.selectedIndex > 0 ){
            selectAlquiler.setAttribute("class","form-control");
        }
        else{
            error+="Selecciona alquiler<br>";
            selectAlquiler.setAttribute("class","form-control error");
            cancelarEnvio=true;
            selectAlquiler.focus();
            focus=true;
        }
    }
    /*Comprobamos select de Empleado*/
    if(selectEmpleado.selectedIndex > 0 ){
        selectEmpleado.setAttribute("class","form-control");
    }
    else{
        error+="Selecciona empleado<br>";
        selectEmpleado.setAttribute("class","form-control error");
        cancelarEnvio=true;
        selectEmpleado.focus();
        focus=true;
    }
    /*Comprobamos select de Proveedor*/
    if(selectCliente.selectedIndex > 0 ){
        selectCliente.setAttribute("class","form-control");
    }
    else{
        error+="Selecciona Cliente<br>";
        selectCliente.setAttribute("class","form-control error");
        cancelarEnvio=true;
        selectCliente.focus();
        focus=true;
    }
    /*Comprobamos select de Maquinaria*/
    if(selectMaquinaria.selectedIndex > 0 ){
        selectMaquinaria.setAttribute("class","form-control");
    }
    else{
        error+="Selecciona maquinaria<br>";
        selectMaquinaria.setAttribute("class","form-control error");
        cancelarEnvio=true;
        selectMaquinaria.focus();
        focus=true;
    }
    /*Comprobamos fecha correcta*/
    if(fechaInicio.value!="" && fechaInicio.value!=null){
        fechaInicio.setAttribute("class","form-control");
    }
    else{
        error+="Error en la fecha inicio (DD/MM/AAAA)<br>";
        fechaInicio.setAttribute("class","form-control error");
        cancelarEnvio=true;
        fechaInicio.focus();
        focus=true;
    }
    /*Comprobamos fecha correcta*/
    if(fechaFin.value!="" && fechaFin.value!=null){
        fechaFin.setAttribute("class","form-control");
    }
    else{
        error+="Error en la fecha fin (DD/MM/AAAA)<br>";
        fechaFin.setAttribute("class","form-control error");
        cancelarEnvio=true;
        fechaFin.focus();
        focus=true;
    }
    if (cancelarEnvio){
        mensajePersonalizado(error,'Error');
        //event.preventDefault(); //Anula el envio
    }
    else{
        var sMensaje = "ID: "+idAlquiler.value +"<br>" +
            "Empleado: " +idEmpleado.value +"<br>" +
            "Cliente: " +idCliente.value +"<br>" +
            "Maquinaria: " +idMaquinaria.value +"<br>" +
            "Fecha Inicio: "+fechaInicio.value +"<br>" +
            "Fecha Fin: "+fechaFin.value +".";

        var oAlquiler={id:idAlquiler.value,empleado:idEmpleado.value,cliente:idCliente.value,maquinaria:idMaquinaria.value,fecha_inicio:fechaInicio.value,fecha_fin:fechaFin.value};
    }
    var respuestaValidacion=new Object();
    respuestaValidacion.valida=!cancelarEnvio;
    respuestaValidacion.oAlquiler=oAlquiler;
    respuestaValidacion.mensaje=sMensaje;
    return respuestaValidacion;
}

function validaIncidencia(){
    var error="";
    var cancelarEnvio=false;
    var focus=false;

    var formulario;
    var id;
    var idIncidencia, selectIncidencia;
    var idMaquinaria, selectMaquinaria;


    //Recogemos datos de las Incidencias

    if($("#altaIncidencia").length > 0){
        formulario = formAltaIncidencia;
        idIncidencia = formulario.idIncidencia;
    }
    if($("#bajaIncidencia").length > 0){
        formulario = formBajaIncidencia;
        selectIncidencia = formulario.incidenciaBaja;
        idIncidencia = selectIncidencia.options[selectIncidencia.selectedIndex];
    }
    if($("#modificaIncidencia").length > 0){
        formulario = formModificaIncidencia;
        selectIncidencia = formulario.incidenciaModifica;
        idIncidencia = selectIncidencia.options[selectIncidencia.selectedIndex];
    }

    var selectMaquinaria = formulario.maquinariaIncidencia;
    idMaquinaria = selectMaquinaria.options[selectMaquinaria.selectedIndex];
    var estado = formulario.estado;
    var titulo = formulario.tituloIncidencia;
    var descripcion = formulario.descripcionIncidencia;
    var fecha = formulario.fechaIncidencia;

    //Comprobamos que estemos en altaIncidencia
    if($("#altaIncidencia").length > 0){
        /*Comprobamos ID de Incidencia*/
        if(/^\d{5}$/.test(idIncidencia.value)){
            idIncidencia.setAttribute("class","form-control");
        }
        else{
            error+="Error en la id. (00001)<br>";
            idIncidencia.setAttribute("class","form-control error");
            cancelarEnvio=true;
            idIncidencia.focus();
            focus=true;
        }
    }
    else{
        if(selectIncidencia.selectedIndex > 0 ){
            selectIncidencia.setAttribute("class","form-control");
        }
        else{
            error+="Selecciona incidencia<br>";
            selectIncidencia.setAttribute("class","form-control error");
            cancelarEnvio=true;
            selectIncidencia.focus();
            focus=true;
        }
    }

    /*Comprobamos select de Maquinaria*/
    if(selectMaquinaria.selectedIndex > 0 ){
        selectMaquinaria.setAttribute("class","form-control");
    }
    else{
        error+="Selecciona maquinaria<br>";
        selectMaquinaria.setAttribute("class","form-control error");
        cancelarEnvio=true;
        selectMaquinaria.focus();
        focus=true;
    }

    /*Comprobamos titulo de Incidencia*/
    if(/^[A-Za-z\s\w����������]{3,40}$/.test(titulo.value)){
        titulo.setAttribute("class","form-control");
    }
    else{
        error+="Error en el titulo.<br>";
        titulo.setAttribute("class","form-control error");
        cancelarEnvio=true;
        titulo.focus();
        focus=true;
    }

    /*Comprobamos descripcion de Incidencia*/
    if(/^[A-Za-z\s\w����������,.()]{3,1000}$/.test(descripcion.value)){
        descripcion.setAttribute("class","form-control");
    }
    else{
        error+="Error en la descripcion.<br>";
        descripcion.setAttribute("class","form-control error");
        cancelarEnvio=true;
        descripcion.focus();
        focus=true;
    }
    /*Comprobamos estado de Incidencia*/
    if(estado[0].checked){
        estado[0].value="Activa";
    }
    else{
        if(estado[1].checked){
            estado[1].value="Anulada";
        }
        else{
            error+="Selecciona un estado de incidencia.<br>";
            cancelarEnvio=true;
            focus=true;
        }
    }

    /*Comprobamos fecha correcta*/
    if(fecha.value!="" && fecha.value!=null){
        /*if(isValidDate(fecha.value)==true){
         fecha.setAttribute("class","form-control");
         }
         else{
         error+="Esa fecha nunca existio\n";
         fecha.setAttribute("class","form-control error");
         cancelarEnvio=true;
         fecha.focus();
         focus=true;
         }*/
    }
    else{
        error+="Error en la fecha de incidencia (DD/MM/AAAA)<br>";
        fecha.setAttribute("class","form-control error");
        cancelarEnvio=true;
        fecha.focus();
        focus=true;
    }

    var respuestaValidacion=new Object();
    respuestaValidacion.valida=!cancelarEnvio;

    if (cancelarEnvio){
        mensajePersonalizado(error,'Error');
        //event.preventDefault(); //Anula el envio
    }
    else{
        var sMensaje = "ID: "+idIncidencia.value +"<br>" +
            "Maquinaria: " +idMaquinaria.value +"<br>" +
            "Titulo: " +titulo.value +"<br>" +
            "Descripcion: " +descripcion.value +"<br>" +
            "Estado: "+estado.value +"<br>" +
            "Fecha: "+fecha.value +".";

        var oIncidencia={id:idIncidencia.value,maquinaria:idMaquinaria.value,titulo:titulo.value,descripcion:descripcion.value,estado:estado.value,fecha:fecha.value};
    }
    var respuestaValidacion=new Object();
    respuestaValidacion.valida=!cancelarEnvio;
    respuestaValidacion.oIncidencia=oIncidencia;
    respuestaValidacion.mensaje=sMensaje;
    return respuestaValidacion;
}