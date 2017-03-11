<?php
	
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);

	$sql="SELECT max(id) FROM alquileres";
	$result=mysql_query($sql,$conexion);
	$alquiler=mysql_result($result,0);
    echo $alquiler;
	
	mysql_close();
	
 ?>