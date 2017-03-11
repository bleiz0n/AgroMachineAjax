<?php
	
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);

	$sql="SELECT max(id) FROM maquinarias";
	$result=mysql_query($sql,$conexion);
	$maquinaria=mysql_result($result,0);
    echo $maquinaria;
	
	mysql_close();
	
 ?>