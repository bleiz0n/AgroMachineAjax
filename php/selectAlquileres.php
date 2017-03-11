<?php
					
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);
  
	$sql="select a.id, a.empleado, c.dni, c.nombre, c.apellidos, m.id as idM, m.nombre as nombreM, m.marca, a.fecha_inicio from alquileres a, clientes c, maquinarias m where c.dni=a.cliente and m.id=a.maquinaria group by a.id";
	$result=mysql_query($sql,$conexion);

	while($row=mysql_fetch_assoc($result)){
		$alquileres[]=$row;
	}
	echo json_encode($alquileres);
	
	mysql_close();
	
 ?>