<?php
// Va a devolver una respuesta JSON que no se debe cachear
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$datos=$_POST['cliente'];
echo $datos;
$oCliente = json_decode($datos);

// Abrir conexion con la BD
$conexion = mysql_connect('localhost', 'root', '') or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);
mysql_select_db('agromachine', $conexion) or die(mysql_error());

$sql = "UPDATE  clientes SET nombre='".$oCliente->nombre."', apellidos='".$oCliente->apellidos."', domicilio='".$oCliente->direccion."', provincia='".$oCliente->provincia."', cp='".$oCliente->cp."',telefono='".$oCliente->telefono."' WHERE dni='".$oCliente->dni."'";
echo ($sql);
$resultados = @mysql_query($sql, $conexion) or die(mysql_error());

$mensaje='Cliente actualizado correctamente.';

$respuesta = $mensaje;

echo json_encode($respuesta);

mysql_close($conexion);

?>