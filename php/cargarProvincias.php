<?php
					
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);
  
	$sql="select nombre as pr from provincias";
	$result=mysql_query($sql,$conexion);

	while($row=mysql_fetch_assoc($result)){
		$provincias[]=$row;
	}
	echo json_encode($provincias);
	
	mysql_close();
	
 ?>