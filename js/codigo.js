
window.addEventListener("load",inicio,false);

function inicio(){
	asignamosEventos();


		function git(){
			var nuevaVentana = window.open('https://github.com/bleiz0n/AgroMachineAjax');
		}
		function uml(){
			$("#uml").dialog({
				title: 'Diagrama E/R',
				autoOpen: true,
				modal:true,
				close: function () {$(this).dialog("close"); $(this).remove();},
				hide: "blind",
				show: "scale",
				height:"auto",
				width:"auto",
				resizable:false
			});
		}
		function doc(){
			$("#doc").dialog({
				title: 'Especificaciones',
				autoOpen: true,
				modal:true,
				width: "800px",
				close: function () {$(this).dialog("close"); $(this).remove();},
				hide: "blind",
				show: "scale",
				height:"auto",
				resizable:true
			});
			document.getElementById("documento").setAttribute("src","http://docs.google.com/gview?url=http://belizon.hol.es/AgroMachineAjax/Documentos/Materia_Entrega.pdf&embedded=true");
		}
		function web(){
			var nuevaVentana = window.open('http://belizon.hol.es/AgroMachineAjax');
		}
		function download(){
			var nuevaVentana = window.open('http://belizon.hol.es/AgroMachineAjax/agromachine.sql');
		}
		
	
    function ocultarFormularios(){
         document.getElementById("capaAltaTipoElectrica").style.display="none";
         document.getElementById("capaAltaTipoCombustible").style.display="none";
         document.getElementById("capaBajaTipoElectrica").style.display="none";
         document.getElementById("capaBajaTipoCombustible").style.display="none";
         document.getElementById("capaModificaTipoElectrica").style.display="none";
         document.getElementById("capaModificaTipoCombustible").style.display="none";

    }
	
    /* ------------- CLIENTES ------------- */
    /* Método listar los clientes */
    function listarCliente(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionListados.html #mClientes", function(){
                $.getScript('js/listadoClientes.js',function(){
                    creaDialogoListadoCliente();
                });
            });
        });
    }

	function altaCliente(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionClientes.html #altaCliente", function(){
                $.getScript('js/altaCliente.js',function(){
                    creaDialogoAltaCliente();
                });
            });
        });
	}

	function bajaCliente(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionClientes.html #bajaCliente", function(){
                $.getScript('js/bajaCliente.js',function(){
                    creaDialogoBajaCliente();
                });
            });
        });
    }

	function modificaCliente(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionClientes.html #modificaCliente", function(){
                $.getScript('js/modificaCliente.js',function(){
                    creaDialogoModificaCliente();
                });
            });
        });
	}

    /* ------------- MAQUINARIAS ------------- */
    /* Método listar maquinarias */
    function listarMaquinaria(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionListados.html #filtraMaquinarias", function(){
                $.getScript('js/listadoMaquinarias.js',function(){
                    creaDialogoFiltroMaquinaria();
                });
            });
        });
    }
    function altaMaquinaria(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionMaquinarias.html #altaMaquinaria", function(){
                $.getScript('js/altaMaquinaria.js',function(){
                    creaDialogoAltaMaquinaria();
                });
            });
        });
    }

    function bajaMaquinaria(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionMaquinarias.html #bajaMaquinaria", function(){
                $.getScript('js/bajaMaquinaria.js',function(){
                    creaDialogoBajaMaquinaria();
                });
            });
        });
    }

    function modificaMaquinaria(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionMaquinarias.html #modificaMaquinaria", function(){
                $.getScript('js/modificaMaquinaria.js',function(){
                    creaDialogoModificaMaquinaria();
                });
            });
        });
    }
	
	/* ------------- EMPLEADOS -------------- */
    /* Método listar los empleados */
    function listarEmpleado(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionListados.html #mEmpleados", function(){
                $.getScript('js/listadoEmpleados.js',function(){
                    creaDialogoListadoEmpleado();
                });
            });
        });
    }

    function altaEmpleado(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionEmpleados.html #altaEmpleado", function(){
                $.getScript('js/altaEmpleado.js',function(){
                    creaDialogoAltaEmpleado();
                });
            });
        });
    }

    function bajaEmpleado(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionEmpleados.html #bajaEmpleado", function(){
                $.getScript('js/bajaEmpleado.js',function(){
                    creaDialogoBajaEmpleado();
                });
            });
        });
    }

    function modificaEmpleado(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionEmpleados.html #modificaEmpleado", function(){
                $.getScript('js/modificaEmpleado.js',function(){
                    creaDialogoModificaEmpleado();
                });
            });
        });
    }

	/* ------------- ALQUILERES -------------- */
    function listarAlquiler(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionListados.html #mAlquileres", function(){
                $.getScript('js/listadoAlquileres.js',function(){
                    creaDialogoListadoAlquiler();
                });
            });
        });
    }

    function altaAlquiler(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionAlquileres.html #altaAlquiler", function(){
                $.getScript('js/altaAlquiler.js',function(){
                    creaDialogoAltaAlquiler();
                });
            });
        });
    }

    function bajaAlquiler(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionAlquileres.html #bajaAlquiler", function(){
                $.getScript('js/bajaAlquiler.js',function(){
                    creaDialogoBajaAlquiler();
                });
            });
        });
    }

    function modificaAlquiler(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionAlquileres.html #modificaAlquiler", function(){
                $.getScript('js/modificaAlquiler.js',function(){
                    creaDialogoModificaAlquiler();
                });
            });
        });
    }
	/* ------------- INCIDENCIAS -------------- */

    function listarIncidencia(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionListados.html #mIncidencias", function(){
                $.getScript('js/listadoIncidencias.js',function(){
                    creaDialogoListadoIncidencia();
                });
            });
        });
    }

    function altaIncidencia(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionIncidencias.html #altaIncidencia", function(){
                $.getScript('js/altaIncidencia.js',function(){
                    creaDialogoAltaIncidencia();
                });
            });
        });
    }

    function bajaIncidencia(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionIncidencias.html #bajaIncidencia", function(){
                $.getScript('js/bajaIncidencia.js',function(){
                    creaDialogoBajaIncidencia();
                });
            });
        });
    }

    function modificaIncidencia(){
        $(document).ready(function () {
            $('#formularios').load("formularios/gestionIncidencias.html #modificaIncidencia", function(){
                $.getScript('js/modificaIncidencia.js',function(){
                    creaDialogoModificaIncidencia();
                });
            });
        });
    }

    function imprime(){
        window.print();
    }


    function asignamosEventos(){
        //Asignamos los eventos a la capa gestion
        var capaGestion = document.getElementsByTagName("div")[2].getElementsByTagName("div");
        var gestionMaquinaria = document.getElementById("gestionMaquinarias");
        var capaBotones = document.getElementsByClassName("capaBotones");

        //Añadimos evento mouseOver y mouseOverOut a las capas principales

        document.getElementById("gestionClientes").addEventListener("mouseover", function() { capaBotones[0].style.display="block"; });
        document.getElementById("gestionClientes").addEventListener("mouseout", function() { capaBotones[0].style.display="none"; });

        document.getElementById("gestionMaquinarias").addEventListener("mouseover", function() { capaBotones[1].style.display="block"; });
        document.getElementById("gestionMaquinarias").addEventListener("mouseout", function() { capaBotones[1].style.display="none"; });

        document.getElementById("gestionEmpleados").addEventListener("mouseover", function() { capaBotones[2].style.display="block"; });
        document.getElementById("gestionEmpleados").addEventListener("mouseout", function() { capaBotones[2].style.display="none"; });

        document.getElementById("gestionAlquileres").addEventListener("mouseover", function() { capaBotones[3].style.display="block"; });
        document.getElementById("gestionAlquileres").addEventListener("mouseout", function() { capaBotones[3].style.display="none"; });

        document.getElementById("gestionIncidencias").addEventListener("mouseover", function() { capaBotones[4].style.display="block"; });
        document.getElementById("gestionIncidencias").addEventListener("mouseout", function() { capaBotones[4].style.display="none"; });

        document.getElementById("gestionDocumentos").addEventListener("mouseover", function() { capaBotones[5].style.display="block"; });
        document.getElementById("gestionDocumentos").addEventListener("mouseout", function() { capaBotones[5].style.display="none"; });

        //Añadimos eventos a la capa Cliente
        var btnGestionClientes = document.getElementById("gestionClientes").getElementsByTagName("button");
        btnGestionClientes[0].addEventListener("click",altaCliente,false);
        btnGestionClientes[1].addEventListener("click",bajaCliente,false);
        btnGestionClientes[2].addEventListener("click",modificaCliente,false);
        btnGestionClientes[3].addEventListener("click",listarCliente,false);

        //Añadimos eventos a la capa Maquinaria
        var btnGestionMaquinarias = document.getElementById("gestionMaquinarias").getElementsByTagName("button");
        btnGestionMaquinarias[0].addEventListener("click",altaMaquinaria,false);
        btnGestionMaquinarias[1].addEventListener("click",bajaMaquinaria,false);
        btnGestionMaquinarias[2].addEventListener("click",modificaMaquinaria,false);
        btnGestionMaquinarias[3].addEventListener("click",listarMaquinaria,false);

        //Añadimos eventos a la capa Empleado
        var btnGestionEmpleados = document.getElementById("gestionEmpleados").getElementsByTagName("button");
        btnGestionEmpleados[0].addEventListener("click",altaEmpleado,false);
        btnGestionEmpleados[1].addEventListener("click",bajaEmpleado,false);
        btnGestionEmpleados[2].addEventListener("click",modificaEmpleado,false);
        btnGestionEmpleados[3].addEventListener("click",listarEmpleado,false);

        //Añadimos eventos a la capa Alquiler
        var btnGestionAlquileres = document.getElementById("gestionAlquileres").getElementsByTagName("button");
        btnGestionAlquileres[0].addEventListener("click",altaAlquiler,false);
        btnGestionAlquileres[1].addEventListener("click",bajaAlquiler,false);
        btnGestionAlquileres[2].addEventListener("click",modificaAlquiler,false);
        btnGestionAlquileres[3].addEventListener("click",listarAlquiler,false);

        //Añadimos eventos a la capa Incidencia
        var btnGestionIncidencias = document.getElementById("gestionIncidencias").getElementsByTagName("button");
        btnGestionIncidencias[0].addEventListener("click",altaIncidencia,false);
        btnGestionIncidencias[1].addEventListener("click",bajaIncidencia,false);
        btnGestionIncidencias[2].addEventListener("click",modificaIncidencia,false);
        btnGestionIncidencias[3].addEventListener("click",listarIncidencia,false);


        //Añadimos eventos a la capa Documento
        var btnGestionDocumentos = document.getElementById("gestionDocumentos").getElementsByTagName("button");
        btnGestionDocumentos[0].addEventListener("click",git,false);
        btnGestionDocumentos[1].addEventListener("click",uml,false);
        btnGestionDocumentos[2].addEventListener("click",doc,false);
        btnGestionDocumentos[3].addEventListener("click",web,false);
        btnGestionDocumentos[4].addEventListener("click",download,false);

    }
   

}