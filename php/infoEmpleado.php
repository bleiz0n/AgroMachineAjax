<?php
	
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);
	
	$dni= $_GET['dni'];
	$sql="select * from empleados where dni='$dni'";
	$result=mysql_query($sql,$conexion);
	
	$empleado=mysql_fetch_assoc($result);
	echo json_encode($empleado);
	
	mysql_close();
	
 ?>