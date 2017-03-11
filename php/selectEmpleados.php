<?php
					
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);
  
	$sql="select dni,nombre,apellidos,rol,provincia,telefono from empleados group by dni";
	$result=mysql_query($sql,$conexion);

	while($row=mysql_fetch_assoc($result)){
		$empleados[]=$row;
	}
	echo json_encode($empleados);
	
	mysql_close();
	
 ?>