<?php
					
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);
  
	$sql="select id,maquinaria,titulo,descripcion,estado,fecha from incidencias group by id";
	$result=mysql_query($sql,$conexion);

	while($row=mysql_fetch_assoc($result)){
		$incidencias[]=$row;
	}
	echo json_encode($incidencias);
	
	mysql_close();
	
 ?>