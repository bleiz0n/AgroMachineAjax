<?php
// Va a devolver una respuesta JSON que no se debe cachear
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$datos=$_POST['alquiler'];
echo $datos;
$oAlquiler = json_decode($datos);

// Abrir conexion con la BD
$conexion = mysql_connect('localhost', 'root', '') or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);
mysql_select_db('agromachine', $conexion) or die(mysql_error());

$sql = "UPDATE alquileres SET id='".$oAlquiler->id."', empleado='".$oAlquiler->empleado."', cliente='".$oAlquiler->cliente."', maquinaria='".$oAlquiler->maquinaria."', fecha_inicio='".$oAlquiler->fecha_inicio."',fecha_fin='".$oAlquiler->fecha_fin."' WHERE id='".$oAlquiler->id."'";
echo ($sql);
$resultados = @mysql_query($sql, $conexion) or die(mysql_error());

$mensaje='Alquiler actualizado correctamente.';

$respuesta = $mensaje;

echo json_encode($respuesta);

mysql_close($conexion);

?>