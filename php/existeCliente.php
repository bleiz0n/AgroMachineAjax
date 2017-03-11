<?php
	
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);
	
	$dni= $_POST['dni'];

	$sql="SELECT EXISTS(select 1 from clientes where dni='$dni') AS existe";
	$result=mysql_query($sql,$conexion);
    $data = mysql_fetch_row($result);

	echo $data[0];
	
	mysql_close();
	
 ?>