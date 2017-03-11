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

$sql = "insert into alquileres values ('".$oAlquiler->id."','".$oAlquiler->empleado."','".$oAlquiler->cliente."','".$oAlquiler->maquinaria."','".$oAlquiler->fecha_inicio."','".$oAlquiler->fecha_fin."')";

$resultados = @mysql_query($sql, $conexion) or die(mysql_error());

$mensaje='Alta de alquiler realizada';

$respuesta = $mensaje;

echo json_encode($respuesta);

mysql_close($conexion);

?>