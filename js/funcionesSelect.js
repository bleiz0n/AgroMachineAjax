

function cargarSelectProvincia(select){
    if(localStorage.getItem("provincias") === null){ //Si no existe la clave provincias en localStorage
        select.setAttribute("disabled","disabled");
        limpiamosSelect(select); //Limpiamos select anterior
        primerOptiondeSelects(select,"Cargando datos de Provincias");

        //Llamada ajax -> GET, respuesta JSON | Obtener provincias
        var peticion = new XMLHttpRequest();
        peticion.open("GET", "php/cargarProvincias.php", true);
        peticion.send(null);
        peticion.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                var respuesta = JSON.parse(this.responseText);
                //Rellena localStorage
                localStorage.setItem('provincias',JSON.stringify(respuesta));
                console.log("LocalStorage -> se ha creado.\n");
                var values = obtenerLocalStorage();
                rellenamosSelect(select,values,values);
                primerOptiondeSelects(select,"Seleccione provincia");
                if($('#formAltaCliente').length > 0 || $('#formAltaEmpleado').length > 0 ) {
                    select.removeAttribute("disabled");
                }
            }
        };
        peticion.onerror = function (e) {console.error(peticion.statusText);}
    }
    else{
        var values = obtenerLocalStorage();
        rellenamosSelect(select,values,values);
        primerOptiondeSelects(select,"Seleccione provincia");

        if($('#altaCliente').length>0){
            select.removeAttribute("disabled");
        }
    }
}

function obtenerLocalStorage(){
    var provincias = JSON.parse(localStorage.getItem("provincias"));
    var values=[];
    for(var i=0; i<provincias.length; i++){
        values[i]=provincias[i].pr;//generamos values y options para select
    }
    console.log("LocalStorage -> se ha cargado.\n");
    return values;
}

/* Metodo para cargar los options del select */
function cargarSelectCliente(select,cadena){
    select.setAttribute("disabled","disabled");

    limpiamosSelect(select); //Limpiamos select anterior
    primerOptiondeSelects(select,"Cargando datos de Clientes");

    //Llamada ajax -> GET, respuesta JSON | Consultar datos importantes de los clientes
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "php/selectClientes.php", true);
    peticion.send(null);
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var clientes = JSON.parse(this.responseText);
            var options = []; var values = [];
            primerOptiondeSelects(select,"Selecciona Cliente para "+cadena);
            for(var i=0;i<clientes.length;i++){ //Almacenamos en array los datos de clientes
                values[i]=clientes[i].dni;
                options[i]=clientes[i].dni +" - " +clientes[i].nombre+" " +clientes[i].apellidos +" - " +clientes[i].provincia +" - " +clientes[i].telefono;
            }
            rellenamosSelect(select,values,options); //Rellenamos select
            if($('#formBajaCliente').length > 0 || $('#formModificaCliente').length > 0 || $('#formAltaAlquiler').length > 0 ) {
                select.removeAttribute("disabled");
            }
        }
    }
    peticion.onerror = function (e) {console.error(peticion.statusText);}
}

/* Metodo para cargar los datos del select al formulario */
function cargarDatosCliente(){
    var select=this;
    var seleccionado=select.selectedIndex;
    var form=select.parentNode.parentNode;

    if(seleccionado==0) {
        inputsDisabledVacios(form);
        if(form.getAttribute('id') == 'formModificaCliente'){
            form.provinciaCliente.setAttribute('disabled','disabled');
        }
        form.reset();
    }
    else{//Llamada ajax -> GET, respuesta JSON | Datos importantes de los clientes
        var peticion = new XMLHttpRequest();
        peticion.open("GET", "php/infoCliente.php?dni="+select.options[seleccionado].value, true);
        peticion.send(null);
        peticion.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var cliente = JSON.parse(this.responseText);
                if(cliente.dni == select.options[seleccionado].value){
                    if(form.getAttribute('id') == 'formModificaCliente'){
                        form.provinciaCliente.removeAttribute('disabled');
                        inputsHabilitados(form);

                    }
                    form.nombreCliente.value = cliente.nombre;
                    form.apellidosCliente.value = cliente.apellidos;
                    form.direccionCliente.value = cliente.domicilio;
                    form.provinciaCliente.value = cliente.provincia;
                    form.cpCliente.value = cliente.cp;
                    form.telefonoCliente.value = cliente.telefono;

                }
            }
        }
        peticion.onerror = function (e) {console.error(peticion.statusText);}
    }
}

/* Metodo para cargar los options del select */
function cargarSelectMaquinaria(select,cadena){
    select.setAttribute("disabled","disabled");
    limpiamosSelect(select); //Limpiamos select anterior
    primerOptiondeSelects(select,"Cargando datos de Maquinarias");

    //Llamada ajax -> GET, respuesta JSON | Consultar datos importantes de las maquinarias
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "php/selectMaquinarias.php", true);
    peticion.send(null);
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var maquinarias = JSON.parse(this.responseText);
            var options = []; var values = [];
            primerOptiondeSelects(select,"Selecciona Maquinaria para "+cadena);
            for(var i=0;i<maquinarias.length;i++){ //Almacenamos en array los datos de clientes
                values[i]=maquinarias[i].id;
                options[i]=maquinarias[i].id +" - " +maquinarias[i].nombre+" " +maquinarias[i].marca +" - " +maquinarias[i].precio +"E - " +(maquinarias[i].bateria!=0?"Electrica":"Combustible");
            }
            rellenamosSelect(select,values,options); //Rellenamos select
            if($('#formBajaMaquinaria').length > 0 || $('#formModificaMaquinaria').length > 0 || $('#formAltaIncidencia').length > 0 ) {
                select.removeAttribute("disabled");
            }
        }
    }
    peticion.onerror = function (e) {console.error(peticion.statusText);}
}
function cargarSelectMaquinariaDisponible(select,cadena){
    select.setAttribute("disabled","disabled");
    limpiamosSelect(select); //Limpiamos select anterior
    primerOptiondeSelects(select,"Cargando datos de Maquinarias disponibles");

    //Llamada ajax -> GET, respuesta JSON | Consultar datos importantes de las maquinarias
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "php/selectMaquinariasDisponibles.php", true);
    peticion.send(null);
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var maquinarias = JSON.parse(this.responseText);
            var options = []; var values = [];
            primerOptiondeSelects(select,"Selecciona Maquinaria para "+cadena);

            for(var i=0;i<maquinarias.length;i++){ //Almacenamos en array los datos de maquinarias
                values[i]=maquinarias[i].id;
                options[i]=maquinarias[i].id +" - " +maquinarias[i].nombre+" " +maquinarias[i].marca +" - " +maquinarias[i].precio +"E - " +(maquinarias[i].bateria!=0?"Electrica":"Combustible");
            }
            rellenamosSelect(select,values,options); //Rellenamos select
            select.removeAttribute("disabled");
        }
    }
    peticion.onerror = function (e) {console.error(peticion.statusText);}
}
/* Metodo para cargar los datos del select al formulario */
function cargarDatosMaquinaria(){
    var select=this;
    var seleccionado=select.selectedIndex;
    var form=select.parentNode.parentNode;

    if(seleccionado==0) {
        inputsDisabledVacios(form);
        if(form.getAttribute('id') == 'formModificaMaquinaria'){
        }
        form.reset();
    }
    else{//Llamada ajax -> GET, respuesta JSON | Datos importantes de los clientes
        var peticion = new XMLHttpRequest();
        peticion.open("GET", "php/infoMaquinaria.php?id="+select.options[seleccionado].value, true);
        peticion.send(null);
        peticion.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var maquinaria = JSON.parse(this.responseText);
                if(maquinaria.id == select.options[seleccionado].value){
                    if(form.getAttribute('id') == 'formModificaMaquinaria'){
                        inputsHabilitados(form);
                    }
                    form.nombreMaquinaria.value = maquinaria.nombre;
                    form.marcaMaquinaria.value = maquinaria.marca;
                    form.precioMaquinaria.value = maquinaria.precio;

                    if(maquinaria.bateria!=0){
                        form.rbtTipoMaquinaria.value = "electrica";
                        $('#capa'+$('input[name=rbtTipoMaquinaria]:checked').attr('id')).attr('style','display:block');
                        $('#capaBajaTipoCombustible').attr('style','display:none');
                        $('#capaModificaTipoCombustible').attr('style','display:none');
                        form.bateriaElectrica.value = maquinaria.bateria;
                        form.voltajeElectrica.value = maquinaria.voltaje;
                        form.tipoCombustible.value = "";
                        form.capacidadCombustible.value = "";
                    }
                    else{
                        form.rbtTipoMaquinaria.value = "combustible";
                        $('#capa'+$('input[name=rbtTipoMaquinaria]:checked').attr('id')).attr('style','display:block');
                        $('#capaBajaTipoElectrica').attr('style','display:none');
                        $('#capaModificaTipoElectrica').attr('style','display:none');
                        form.tipoCombustible.value = maquinaria.combustible;
                        form.capacidadCombustible.value = maquinaria.capacidad;
                        form.bateriaElectrica.value = "";
                        form.voltajeElectrica.value = "";
                    }
                }
            }
        }
        peticion.onerror = function (e) {console.error(peticion.statusText);}
    }
}


/* Metodo para cargar los options del select */
function cargarSelectEmpleado(select,cadena){
    select.setAttribute("disabled","disabled");

    limpiamosSelect(select); //Limpiamos select anterior
    primerOptiondeSelects(select,"Cargando datos de Empleados");

    //Llamada ajax -> GET, respuesta JSON | Consultar datos importantes de los clientes
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "php/selectEmpleados.php", true);
    peticion.send(null);
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var empleados = JSON.parse(this.responseText);
            var options = []; var values = [];
            primerOptiondeSelects(select,"Selecciona Empleado para "+cadena);
            for(var i=0;i<empleados.length;i++){ //Almacenamos en array los datos de clientes
                values[i]=empleados[i].dni;
                options[i]=empleados[i].dni +" - " +empleados[i].nombre+" " +empleados[i].apellidos +" - " +empleados[i].rol +" - " +empleados[i].provincia +" - " +empleados[i].telefono;
            }
            rellenamosSelect(select,values,options); //Rellenamos select
            if($('#formBajaEmpleado').length > 0 || $('#formModificaEmpleado').length > 0 || $('#formAltaAlquiler').length > 0 ) {
                select.removeAttribute("disabled");
            }
        }
    }
    peticion.onerror = function (e) {console.error(peticion.statusText);}
}

/* Metodo para cargar los datos del select al formulario */
function cargarDatosEmpleado(){
    var select=this;
    var seleccionado=select.selectedIndex;
    var form=select.parentNode.parentNode;

    if(seleccionado==0) {
        inputsDisabledVacios(form);
        if(form.getAttribute('id') == 'formModificaEmpleado'){
            form.provinciaEmpleado.setAttribute('disabled','disabled');
        }
        form.reset();
    }
    else{//Llamada ajax -> GET, respuesta JSON | Datos importantes de los clientes
        var peticion = new XMLHttpRequest();
        peticion.open("GET", "php/infoEmpleado.php?dni="+select.options[seleccionado].value, true);
        peticion.send(null);
        peticion.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var empleado = JSON.parse(this.responseText);
                if(empleado.dni == select.options[seleccionado].value){
                    if(form.getAttribute('id') == 'formModificaEmpleado'){
                        form.provinciaEmpleado.removeAttribute('disabled');
                        inputsHabilitados(form);
                    }
                    form.nombreEmpleado.value = empleado.nombre;
                    form.apellidosEmpleado.value = empleado.apellidos;
                    form.rolEmpleado.value = empleado.rol;
                    form.direccionEmpleado.value = empleado.domicilio;
                    form.provinciaEmpleado.value = empleado.provincia;
                    form.cpEmpleado.value = empleado.cp;
                    form.telefonoEmpleado.value = empleado.telefono;

                }
            }
        }
        peticion.onerror = function (e) {console.error(peticion.statusText);}
    }
}


/* Metodo para cargar los options del select */
function cargarSelectAlquiler(select,cadena){
    limpiamosSelect(select); //Limpiamos select anterior
    primerOptiondeSelects(select,"Cargando datos de Alquileres");

    //Llamada ajax -> GET, respuesta JSON | Consultar datos importantes de los clientes
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "php/selectAlquileres.php", true);
    peticion.send(null);
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var alquileres = JSON.parse(this.responseText);
            var options = []; var values = [];
            primerOptiondeSelects(select,"Selecciona Alquiler para "+cadena);
            for(var i=0;i<alquileres.length;i++){ //Almacenamos en array los datos de clientes
                values[i]=alquileres[i].id;
                options[i]=alquileres[i].id +" - E: " +alquileres[i].empleado+" - C: " +alquileres[i].dni +" " +alquileres[i].apellidos +", " +alquileres[i].nombre +" - M: " +alquileres[i].idM +" " +alquileres[i].nombreM +", " +alquileres[i].marca +" - Inicio: "+alquileres[i].fecha_inicio;
            }
            rellenamosSelect(select,values,options); //Rellenamos select
            if($('#formBajaAlquiler').length > 0 || $('#formModificaAlquiler').length > 0 ) {
                select.removeAttribute("disabled");
            }
        }
    }
    peticion.onerror = function (e) {console.error(peticion.statusText);}
}

/* Metodo para cargar los datos del select al formulario */
function cargarDatosAlquiler(){
    var select=this;
    var seleccionado=select.selectedIndex;
    var form=select.parentNode.parentNode;
    if(seleccionado==0) {
        inputsDisabledVacios(form);
        if($('#formBajaAlquiler').length > 0 || $('#formModificaAlquiler').length > 0 ){
            form.empleadoAlquiler.setAttribute('disabled','disabled');
            form.clienteAlquiler.setAttribute('disabled','disabled');
            form.maquinariaAlquiler.setAttribute('disabled','disabled');
        }
        form.reset();
    }
    else{//Llamada ajax -> GET, respuesta JSON | Datos importantes de alquileres
        var peticion = new XMLHttpRequest();
        peticion.open("GET", "php/infoAlquiler.php?id="+select.options[seleccionado].value, true);
        peticion.send(null);
        peticion.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var alquiler = JSON.parse(this.responseText);
                if(alquiler.id == select.options[seleccionado].value){
                    if($('#formBajaAlquiler').length > 0 ){
                        form.empleadoAlquiler.setAttribute('disabled','disabled');
                        form.clienteAlquiler.setAttribute('disabled','disabled');
                        form.maquinariaAlquiler.setAttribute('disabled','disabled');
                    }
                    else if($('#formModificaAlquiler').size() >0){
                        form.empleadoAlquiler.removeAttribute('disabled');
                        form.clienteAlquiler.removeAttribute('disabled');
                        form.maquinariaAlquiler.removeAttribute('disabled');
                        form.fechaFinAlquiler.removeAttribute('disabled');

                    }
                    form.empleadoAlquiler.value = alquiler.empleado;
                    form.clienteAlquiler.value = alquiler.cliente;
                    form.maquinariaAlquiler.value = alquiler.maquinaria;
                    form.fechaInicioAlquiler.value = alquiler.fecha_inicio;
                    if($('#formModificaAlquiler').size() >0){
                        form.fechaFinAlquiler.value = alquiler.fecha_fin;

                    }
                }
            }
        }
        peticion.onerror = function (e) {console.error(peticion.statusText);}
    }
}


/* Metodo para cargar los options del select */
function cargarSelectIncidencia(select,cadena){
    limpiamosSelect(select); //Limpiamos select anterior
    primerOptiondeSelects(select,"Cargando datos de Incidencias");

    //Llamada ajax -> GET, respuesta JSON | Consultar datos importantes de los clientes
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "php/selectIncidencias.php", true);
    peticion.send(null);
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var incidencias = JSON.parse(this.responseText);
            var options = []; var values = [];
            primerOptiondeSelects(select,"Selecciona Incidencia para "+cadena);
            for(var i=0;i<incidencias.length;i++){ //Almacenamos en array los datos de clientes
                values[i]=incidencias[i].id;
                options[i]=incidencias[i].id +" - M: " +incidencias[i].maquinaria+" - " +incidencias[i].titulo+", " +incidencias[i].estado +" - " +incidencias[i].fecha ;
            }
            rellenamosSelect(select,values,options); //Rellenamos select

        }
    }
    peticion.onerror = function (e) {console.error(peticion.statusText);}
}

/* Metodo para cargar los options del select */
function cargarSelectIncidenciaActivas(select,cadena){
    limpiamosSelect(select); //Limpiamos select anterior
    primerOptiondeSelects(select,"Cargando datos de Incidencias Activas");

    //Llamada ajax -> GET, respuesta JSON | Consultar datos importantes de los clientes
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "php/selectIncidenciasActivas.php", true);
    peticion.send(null);
    peticion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            select.removeAttribute("disabled");
            var incidencias = JSON.parse(this.responseText);
            var options = []; var values = [];
            primerOptiondeSelects(select,"Selecciona Incidencia para "+cadena);
            for(var i=0;i<incidencias.length;i++){ //Almacenamos en array los datos de clientes
                values[i]=incidencias[i].id;
                options[i]=incidencias[i].id +" - M: " +incidencias[i].maquinaria+" "+incidencias[i].nombre+", "+incidencias[i].marca+" - " +incidencias[i].titulo +" - " +incidencias[i].fecha ;
            }
            rellenamosSelect(select,values,options); //Rellenamos select
        }
    }
    peticion.onerror = function (e) {console.error(peticion.statusText);}
}


/* Metodo para cargar los datos del select al formulario */
function cargarDatosIncidencia(){
    var select=this;
    var seleccionado=select.selectedIndex;
    var form=select.parentNode.parentNode;
    if(seleccionado==0) {
        inputsDisabledVacios(form);
        if($('#formBajaIncidencia').length > 0 || $('#formModificaIncidencia').length > 0 ){
            form.maquinariaIncidencia.setAttribute('disabled','disabled');
            form.descripcionIncidencia.setAttribute('disabled','disabled');
        }
        form.reset();
    }
    else{//Llamada ajax -> GET, respuesta JSON | Datos importantes de incidencias
        var peticion = new XMLHttpRequest();
        peticion.open("GET", "php/infoIncidencia.php?id="+select.options[seleccionado].value, true);
        peticion.send(null);
        peticion.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var alquiler = JSON.parse(this.responseText);
                if(alquiler.id == select.options[seleccionado].value){
                    if($('#formBajaIncidencia').length > 0 ){
                        form.maquinariaIncidencia.setAttribute('disabled','disabled');
                        form.estado[1].removeAttribute('disabled');
                    }
                    else if($('#formModificaIncidencia').size() > 0){
                        form.maquinariaIncidencia.removeAttribute('disabled');
                        form.descripcionIncidencia.removeAttribute('disabled');
                        form.estado[0].removeAttribute('disabled');
                        form.estado[1].removeAttribute('disabled');
                        inputsHabilitados(form);
                    }
                    form.maquinariaIncidencia.value = alquiler.maquinaria;
                    form.tituloIncidencia.value = alquiler.titulo;
                    form.descripcionIncidencia.value = alquiler.descripcion;
                    if(alquiler.estado == "Activa"){
                        form.estado[0].setAttribute("checked",true);
                    }
                    else{
                        form.estado[1].setAttribute("checked",true);
                    }
                    form.fechaIncidencia.value = alquiler.fecha;

                }
            }
        }
        peticion.onerror = function (e) {console.error(peticion.statusText);}
    }
}