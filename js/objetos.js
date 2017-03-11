
//Objeto Persona
function Persona(dni,nombre,apellidos,direccion,localidad,cp,telefono){
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.direccion = direccion;
    this.localidad = localidad;
    this.cp = cp;
    this.telefono = telefono;
}

Persona.prototype.toHTMLRow = function(){
    return "<tr><td>"+this.dni+"</td><td>"+this.nombre+"</td><td>"+this.apellidos+"</td><td>"+this.direccion+"</td><td>"+this.localidad+"</td><td>"+this.cp+"</td><td>"+this.telefono+"</td></tr>";
}

//Objeto Cliente(Heredamos de persona)
function Cliente(dni,nombre,apellidos,direccion,localidad,cp,telefono){
    Persona.apply(this,[dni,nombre,apellidos,direccion,localidad,cp,telefono]);
}

//Heredamos de Persona (Crear Herencia)
Cliente.prototype = Object.create(Persona.prototype);
Cliente.prototype.constructor = Cliente;

Cliente.prototype.toHTMLRow = function(){
    return "<tr><td>"+this.dni+"</td><td>"+this.nombre+"</td><td>"+this.apellidos+"</td><td>"+this.direccion+"</td><td>"+this.localidad+"</td><td>"+this.cp+"</td><td>"+this.telefono+"</td></tr>";
}

//Objeto Empleado(Heredamos de persona)
function Empleado(dni,nombre,apellidos,rol,direccion,localidad,cp,telefono){
    Persona.apply(this,[dni,nombre,apellidos,direccion,localidad,cp,telefono]);
    this.rol = rol;
}

//Heredamos de Persona (Crear Herencia)
Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.constructor = Empleado;

Empleado.prototype.toHTMLRow = function(){
    return "<tr><td>"+this.dni+"</td><td>"+this.nombre+"</td><td>"+this.apellidos+"</td><td>"+this.rol+"</td><td>"+this.direccion+"</td><td>"+this.localidad+"</td><td>"+this.cp+"</td><td>"+this.telefono+"</td></tr>";
}

//Objeto Maquinaria
function Maquinaria(id,nombre,marca,precio){
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
}

Maquinaria.prototype.toHTMLRow = function(){
    return "<tr><td>"+this.id+"</td><td>"+this.nombre+"</td><td>"+this.marca+"</td><td>"+this.precio+"</td></tr>";
}

//Objeto Electrica(Heredamos de maquinaria)
function Electrica(id,nombre,marca,precio,bateria,voltaje){
	Maquinaria.apply(this,[id,nombre,marca,precio]);
	this.bateria = bateria;
	this.voltaje = voltaje;
}

//Heredamos de Maquinaria (Crear Herencia)
Electrica.prototype = Object.create(Maquinaria.prototype);
Electrica.prototype.constructor = Electrica;

Electrica.prototype.toHTMLRow = function(){
    return "<tr><td>"+this.id+"</td><td>"+this.nombre+"</td><td>"+this.marca+"</td><td>"+this.precio+"</td><td>"+this.bateria+"</td><td>"+this.voltaje+"</td></tr>";
}

//Objeto Electrica(Heredamos de maquinaria)
function Combustible(id,nombre,marca,precio,tipoC,capacidad){
	Maquinaria.apply(this,[id,nombre,marca,precio]);
	this.tipoC = tipoC;
	this.capacidad = capacidad;
}

//Heredamos de Maquinaria (Crear Herencia)
Combustible.prototype = Object.create(Maquinaria.prototype);
Combustible.prototype.constructor = Combustible;

Combustible.prototype.toHTMLRow = function(){
    return "<tr><td>"+this.id+"</td><td>"+this.nombre+"</td><td>"+this.marca+"</td><td>"+this.precio+"</td><td>"+this.tipoC+"</td><td>"+this.capacidad+"</td></tr>";
}

//Objeto Incidencia
function Incidencia(id,maquinaria,titulo,descripcion,estado,fecha){
  this.id = id;
  this.maquinaria = maquinaria;
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.estado = estado;
  this.fecha = fecha;
}

Incidencia.prototype.toHTMLRow = function(){
  return "<tr><td>"+this.id+"</td><td>"+this.maquinaria+"</td><td>"+this.titulo+"</td><td>"+this.descripcion+"</td><td>"+this.estado+"</td><td>"+this.fecha+"</td></tr>";
}

//objeto Proveedor
function Proveedor(cif, nombre, direccion, localidad, cp, telefono){
	this.cif = cif;
	this.nombre = nombre;
	this.direccion = direccion;
	this.localidad = localidad;
	this.cp = cp;
	this.telefono = telefono;
}
Proveedor.prototype.toHTMLRow = function(){
	return "<tr><td>"+this.cif+"</td><td>"+this.nombre+"</td><td>"+this.direccion+"</td><td>"+this.localidad+"</td><td>"+this.cp+"</td><td>"+this.telefono+"</td></tr>";
}

//Objeto Alquiler
function Alquiler(id,empleado,cliente,maquinaria,fechaInicio,fechaFin){
	this.id = id;
	this.empleado = empleado;
	this.cliente = cliente;
	this.maquinaria = maquinaria;
	this.fechaInicio = fechaInicio;
	this.fechaFin = fechaFin;
}

Alquiler.prototype.toHTMLRow = function(){
	return "<tr><td>"+this.id+"</td><td>"+this.empleado+"</td><td>"+this.cliente+"</td><td>"+this.maquinaria+"</td><td>"+this.fechaInicio+"</td><td>"+this.fechaFin+"</td></tr>";
}


//Objeto Compra
function Compra(id,empleado,proveedor,maquinaria,cuantia,fecha){
	this.id = id;
	this.empleado = empleado;
	this.proveedor = proveedor;
	this.maquinaria = maquinaria;
	this.cuantia = cuantia;
	this.fecha = fecha;
}

Compra.prototype.toHTMLRow = function(){
	return "<tr><td>"+this.id+"</td><td>"+this.empleado+"</td><td>"+this.proveedor+"</td><td>"+this.maquinaria+"</td><td>"+this.cuantia+"</td><td>"+this.fecha+"</td></tr>";
}

/* --------------------- SUPERCLASE Y FUNCIONES ------------------------ */

function Agromachine(){
    this.clientes = new Array();
    this.maquinarias = new Array();
    this.proveedores = new Array();
    this.compras = new Array();
    this.alquileres = new Array();
	this.empleados = new Array();
	this.incidencias = new Array();
}

Agromachine.prototype.altaCliente = function(oCliente){	this.clientes.push(oCliente);	}
Agromachine.prototype.getClientes = function()		  {	return this.clientes;	}

Agromachine.prototype.altaMaquinaria = function(oMaquinaria){	this.maquinarias.push(oMaquinaria);	}
Agromachine.prototype.getMaquinarias = function()			{	return this.maquinarias;	}

Agromachine.prototype.altaProveedor = function(oProveedor){	this.proveedores.push(oProveedor);	}
Agromachine.prototype.getProveedores = function()		  {	return this.proveedores;	}

Agromachine.prototype.altaEmpleado = function(oEmpleado){	this.empleados.push(oEmpleado);	}
Agromachine.prototype.getEmpleados = function()			{	return this.empleados;	}

Agromachine.prototype.altaCompra = function(oCompra){	this.compras.push(oCompra);	}
Agromachine.prototype.getCompras = function()			{	return this.compras;	}

Agromachine.prototype.altaAlquiler = function(oAlquiler){	this.alquileres.push(oAlquiler);	}
Agromachine.prototype.getAlquileres = function()			{	return this.alquileres;	}

Agromachine.prototype.altaIncidencia = function(oIncidencia){	this.incidencias.push(oIncidencia);	}
Agromachine.prototype.getIncidencias = function()			{	return this.incidencias;	}

Agromachine.prototype.compruebaDNI = function(dni){
    for(var i=0;i<this.clientes.length;i++)if (this.clientes[i].dni == dni)
        return true;
    for(var i=0;i<this.empleados.length;i++)if (this.empleados[i].dni == dni)
        return true;
    return false;
}

Agromachine.prototype.compruebaID = function(id){
    for(var i=0;i<this.maquinarias.length;i++)if (this.maquinarias[i].id == id)
        return true;
    return false;
}
Agromachine.prototype.compruebaCIF = function(cif){
    for(var i=0;i<this.proveedores.length;i++)if (this.proveedores[i].cif == cif)
        return true;
    return false;
}

Agromachine.prototype.borraCliente = function(dni){
    var encontrado=false;
    var posicion = 0;
    for(var i=0;i<this.clientes.length;i++){
        if (this.clientes[i].dni == dni){
            encontrado = true;
            this.clientes.splice(i,1);
        }
        else
            encontrado = false;
    }
    return encontrado;
}

Agromachine.prototype.borraMaquinaria = function(id){
    var encontrado=false;
    var posicion = 0;
    for(var i=0;i<this.maquinarias.length;i++){
        if (this.maquinarias[i].id == id){
            encontrado = true;
            this.maquinarias.splice(i,1);
        }
        else
            encontrado = false;
    }
    return encontrado;
}

Agromachine.prototype.borraEmpleado = function(dni){
    var encontrado=false;
    var posicion = 0;
    for(var i=0;i<this.empleados.length;i++){
        if (this.empleados[i].dni == dni){
            encontrado = true;
            this.empleados.splice(i,1);
        }
        else
            encontrado = false;
    }
    return encontrado;
}

Agromachine.prototype.borraProveedor = function(cif){
    var encontrado=false;
    var posicion = 0;
    for(var i=0;i<this.proveedores.length;i++){
        if (this.proveedores[i].cif == cif){
            encontrado = true;
            this.proveedores.splice(i,1);
        }
        else
            encontrado = false;
    }
    return encontrado;
}
Agromachine.prototype.anulaIncidencia = function(id){
    var encontrado=false;
    var posicion = 0;
    for(var i=0;i<this.incidencias.length;i++){
        if (this.incidencias[i].id == id){
            encontrado = true;
            this.incidencias[i].estado="Anulada";
        }
        else
            encontrado = false;
    }
    return encontrado;
}
Agromachine.prototype.borraIncidencia = function(id){
    var encontrado=false;
    var posicion = 0;
    for(var i=0;i<this.incidencias.length;i++){
        if (this.incidencias[i].id == id){
            encontrado = true;
            this.incidencias.splice(i,1);
        }
        else
            encontrado = false;
    }
    return encontrado;
}
Agromachine.prototype.borraCompra = function(id){
    var encontrado=false;
    var posicion = 0;
    for(var i=0;i<this.compras.length;i++){
        if (this.compras[i].id == id){
            encontrado = true;
            this.compras.splice(i,1);
        }
        else
            encontrado = false;
    }
    return encontrado;
}
Agromachine.prototype.borraAlquiler = function(id){
    var encontrado=false;
    var posicion = 0;
    for(var i=0;i<this.alquileres.length;i++){
        if (this.alquileres[i].id == id){
            encontrado = true;
            this.alquileres.splice(i,1);
        }
        else
            encontrado = false;
    }
    return encontrado;
}
Agromachine.prototype.obtenerCliente = function(dni){
    var encontrado=false;
    var oCliente = null;
    for(var i=0;i<this.clientes.length;i++){
        if (this.clientes[i].dni == dni){
            encontrado = true;
            oCliente = this.clientes[i];
        }
    }
    return oCliente;
}
Agromachine.prototype.obtenerMaquinaria = function(id){
    var encontrado=false;
    var oMaquinaria = null;
    for(var i=0;i<this.maquinarias.length;i++){
        if (this.maquinarias[i].id == id){
            encontrado = true;
            oMaquinaria = this.maquinarias[i];
        }
    }
    return oMaquinaria;
}
Agromachine.prototype.obtenerEmpleado = function(dni){
    var encontrado=false;
    var oEmpleado = null;
    for(var i=0;i<this.empleados.length;i++){
        if (this.empleados[i].dni == dni){
            encontrado = true;
            oEmpleado = this.empleados[i];
        }
    }
    return oEmpleado;
}
Agromachine.prototype.obtenerProveedor = function(cif){
    var encontrado=false;
    var oProveedor = null;
    for(var i=0;i<this.proveedores.length;i++){
        if (this.proveedores[i].cif == cif){
            encontrado = true;
            oProveedor = this.proveedores[i];
        }
    }
    return oProveedor;
}
