<?php
	
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);
	
	$id= $_GET['id'];
	$sql="select * from alquileres where id='$id'";
	$result=mysql_query($sql,$conexion);
	
	$alquiler=mysql_fetch_assoc($result);
	echo json_encode($alquiler);
	
	mysql_close();
	
 ?>