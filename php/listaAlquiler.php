<?php
	
	$conexion=mysql_connect('localhost', 'root', '');
	mysql_select_db('agromachine',$conexion);

	$sql="select * from alquileres order by id";
	$result=mysql_query($sql,$conexion);

    while($row=mysql_fetch_array($result)){
        $clientes[]=$row;
    }
	echo json_encode($clientes);
	
	mysql_close();
	
 ?>