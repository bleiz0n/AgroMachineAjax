<?php

//Respuesta JSON

// Establecer conexion
$conexion = mysql_connect('localhost', 'root', '') or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db('agromachine', $conexion) or die(mysql_error());

$sql = "SELECT i.id,i.maquinaria,m.nombre,m.marca,m.bateria,i.titulo,i.descripcion,i.estado,i.fecha FROM incidencias i, maquinarias m where i.maquinaria=m.id";
$resultados = mysql_query($sql, $conexion) or die(mysql_error());

//Generar XML
$respuesta="<?xml version='1.0' encoding='UTF-8'?><agromachine>";
while($fila=mysql_fetch_assoc($resultados)){
    $respuesta.="<incidencia>";
    $respuesta.="<id>".$fila['id']."</id>";
    $respuesta.="<maquinaria>".$fila['maquinaria']."</maquinaria>";
    $respuesta.="<nombre>".$fila['nombre']."</nombre>";
    $respuesta.="<marca>".$fila['marca']."</marca>";
    $respuesta.="<bateria>".$fila['bateria']."</bateria>";
    $respuesta.="<titulo>".$fila['titulo']."</titulo>";
    $respuesta.="<descripcion>".$fila['descripcion']."</descripcion>";
    $respuesta.="<estado>".$fila['estado']."</estado>";
    $respuesta.="<fecha>".$fila['fecha']."</fecha>";
    $respuesta.="</incidencia>";
}
$respuesta.="</agromachine>";
echo $respuesta;

mysql_close($conexion);

?>