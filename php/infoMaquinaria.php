<?php
	
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);
	
	$id= $_GET['id'];
	$sql="select * from maquinarias where id='$id'";
	$result=mysql_query($sql,$conexion);
	
	$maquinaria=mysql_fetch_assoc($result);
	echo json_encode($maquinaria);
	
	mysql_close();
	
 ?>