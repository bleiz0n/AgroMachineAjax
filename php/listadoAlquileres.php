<?php

//Respuesta JSON

// Establecer conexion
$conexion = mysql_connect('localhost', 'root', '') or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db('agromachine', $conexion) or die(mysql_error());

$sql = "select a.id, e.nombre as empleado, c.dni as cliente, c.nombre, c.apellidos, a.maquinaria, m.nombre as nombreM, m.marca,m.precio, a.fecha_inicio, a.fecha_fin from alquileres a, empleados e, clientes c, maquinarias m where e.dni=a.empleado and c.dni=a.cliente and m.id=a.maquinaria group by a.id";
$resultados = mysql_query($sql, $conexion) or die(mysql_error());

//Generar XML
$respuesta="<?xml version='1.0' encoding='UTF-8'?><agromachine>";
while($fila=mysql_fetch_assoc($resultados)){
    $respuesta.="<alquiler>";
    $respuesta.="<id>".$fila['id']."</id>";
    $respuesta.="<empleado>".$fila['empleado']."</empleado>";
    $respuesta.="<cliente>".$fila['cliente']."</cliente>";
    $respuesta.="<nombre>".$fila['nombre']."</nombre>";
    $respuesta.="<apellidos>".$fila['apellidos']."</apellidos>";
    $respuesta.="<maquinaria>".$fila['maquinaria']."</maquinaria>";
    $respuesta.="<nombreM>".$fila['nombreM']."</nombreM>";
    $respuesta.="<marca>".$fila['marca']."</marca>";
    $respuesta.="<precio>".$fila['precio']."</precio>";
    $respuesta.="<fecha_inicio>".$fila['fecha_inicio']."</fecha_inicio>";
    $respuesta.="<fecha_fin>".$fila['fecha_fin']."</fecha_fin>";
    $respuesta.="</alquiler>";
}
$respuesta.="</agromachine>";
echo $respuesta;

mysql_close($conexion);

?>