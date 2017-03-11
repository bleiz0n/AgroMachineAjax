<?php

//Respuesta JSON

// Establecer conexion
$conexion = mysql_connect('localhost', 'root', '') or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db('agromachine', $conexion) or die(mysql_error());


$sql = "select * from maquinarias";
$resultados = mysql_query($sql, $conexion) or die(mysql_error());

//Generar XML
$respuesta="<?xml version='1.0' encoding='UTF-8'?><agromachine>";
while($fila=mysql_fetch_assoc($resultados)){
    $respuesta.="<maquinaria>";
    $respuesta.="<id>".$fila['id']."</id>";
    $respuesta.="<nombre>".$fila['nombre']."</nombre>";
    $respuesta.="<marca>".$fila['marca']."</marca>";
    $respuesta.="<precio>".$fila['precio']."e</precio>";
    $respuesta.="<bateria>".$fila['bateria']."</bateria>";
    $respuesta.="<voltaje>".$fila['voltaje']."v</voltaje>";
    $respuesta.="<combustible>".$fila['combustible']."</combustible>";
    $respuesta.="<capacidad>".$fila['capacidad']."L</capacidad>";
    $respuesta.="</maquinaria>";
}
$respuesta.="</agromachine>";
echo $respuesta;

mysql_close($conexion);

?>