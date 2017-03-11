<?php

//Respuesta JSON

// Establecer conexion
$conexion = mysql_connect('localhost', 'root', '') or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db('agromachine', $conexion) or die(mysql_error());


$sql = "select * from clientes";
$resultados = mysql_query($sql, $conexion) or die(mysql_error());

//Generar XML
$respuesta="<?xml version='1.0' encoding='UTF-8'?><agromachine>";
while($fila=mysql_fetch_assoc($resultados)){
    $respuesta.="<cliente>";
    $respuesta.="<dni>".$fila['dni']."</dni>";
    $respuesta.="<nombre>".$fila['nombre']."</nombre>";
    $respuesta.="<apellidos>".$fila['apellidos']."</apellidos>";
    $respuesta.="<domicilio>".$fila['domicilio']."</domicilio>";
    $respuesta.="<provincia>".$fila['provincia']."</provincia>";
    $respuesta.="<cp>".$fila['cp']."</cp>";
    $respuesta.="<telefono>".$fila['telefono']."</telefono>";
    $respuesta.="</cliente>";
}
$respuesta.="</agromachine>";
echo $respuesta;

mysql_close($conexion);

?>