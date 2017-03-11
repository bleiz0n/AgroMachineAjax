<?php
					
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);
  
	$sql="SELECT m.id,m.nombre,m.marca,m.precio,m.bateria FROM maquinarias m WHERE m.id NOT IN (select a.maquinaria from alquileres a where STR_TO_DATE(a.fecha_fin, '%d/%m/%Y') >= DATE_FORMAT(NOW(),'%Y-%m-%d')) group by m.id";
	$result=mysql_query($sql,$conexion);

	while($row=mysql_fetch_assoc($result)){
		$maquinarias[]=$row;
	}
	echo json_encode($maquinarias);
	
	mysql_close();
	
 ?>