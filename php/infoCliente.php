<?php
	
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);
	
	$dni= $_GET['dni'];
	$sql="select * from clientes where dni='$dni'";
	$result=mysql_query($sql,$conexion);
	
	$cliente=mysql_fetch_assoc($result);
	echo json_encode($cliente);
	
	mysql_close();
	
 ?>