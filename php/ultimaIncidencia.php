<?php
	
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);

	$sql="SELECT max(id) FROM incidencias";
	$result=mysql_query($sql,$conexion);
	$incidencia=mysql_result($result,0);
    echo $incidencia;
	
	mysql_close();
	
 ?>