<?php
// Va a devolver una respuesta JSON que no se debe cachear
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$datos=$_POST['incidencia'];
echo $datos;
$oIncidencia = json_decode($datos);

// Abrir conexion con la BD
$conexion = mysql_connect('localhost', 'root', '') or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);
mysql_select_db('agromachine', $conexion) or die(mysql_error());

$sql = "UPDATE  incidencias SET maquinaria='".$oIncidencia->maquinaria."', titulo='".$oIncidencia->titulo."', descripcion='".$oIncidencia->descripcion."', estado='".$oIncidencia->estado."', fecha='".$oIncidencia->fecha."' WHERE id='".$oIncidencia->id."'";
echo ($sql);
$resultados = @mysql_query($sql, $conexion) or die(mysql_error());

$mensaje='Incidencia actualizada correctamente.';

$respuesta = $mensaje;

echo json_encode($respuesta);

mysql_close($conexion);

?>