<?php
					
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);
  
	$sql="select id,nombre,marca,precio,bateria from maquinarias group by id";
	$result=mysql_query($sql,$conexion);

	while($row=mysql_fetch_assoc($result)){
		$maquinarias[]=$row;
	}
	echo json_encode($maquinarias);
	
	mysql_close();
	
 ?>