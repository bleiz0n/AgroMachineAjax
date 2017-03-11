<?php
					
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);
  
	$sql="select i.id,i.maquinaria,m.nombre,m.marca,i.titulo,i.descripcion,i.estado,i.fecha from incidencias i, maquinarias m where i.maquinaria=m.id and i.estado='Activa' group by i.id";
	$result=mysql_query($sql,$conexion);

	while($row=mysql_fetch_assoc($result)){
		$incidencias[]=$row;
	}
	echo json_encode($incidencias);
	
	mysql_close();
	
 ?>