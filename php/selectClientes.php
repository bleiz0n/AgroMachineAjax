<?php
					
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);
  
	$sql="select dni,nombre,apellidos,provincia,telefono from clientes group by dni";
	$result=mysql_query($sql,$conexion);

	while($row=mysql_fetch_assoc($result)){
		$clientes[]=$row;
	}
	echo json_encode($clientes);
	
	mysql_close();
	
 ?>