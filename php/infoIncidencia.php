<?php
	
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);
	
	$id= $_GET['id'];
	$sql="select * from incidencias where id='$id'";
	$result=mysql_query($sql,$conexion);
	
	$incidencia=mysql_fetch_assoc($result);
	echo json_encode($incidencia);
	
	mysql_close();
	
 ?>