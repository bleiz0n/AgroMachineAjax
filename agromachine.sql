-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-03-2017 a las 13:50:14
-- Versión del servidor: 5.5.39
-- Versión de PHP: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `agromachine`
--
CREATE DATABASE IF NOT EXISTS `agromachine` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `agromachine`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alquileres`
--

CREATE TABLE IF NOT EXISTS `alquileres` (
  `id` varchar(5) NOT NULL,
  `empleado` varchar(9) NOT NULL,
  `cliente` varchar(9) NOT NULL,
  `maquinaria` varchar(5) NOT NULL,
  `fecha_inicio` varchar(10) NOT NULL,
  `fecha_fin` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alquileres`
--

INSERT INTO `alquileres` (`id`, `empleado`, `cliente`, `maquinaria`, `fecha_inicio`, `fecha_fin`) VALUES
('00001', '11111111A', '00000002B', '00001', '11/01/2017', '12/02/2017'),
('00002', '11111113A', '00000004A', '00004', '28/02/2017', '27/03/2017'),
('00003', '11111113A', '00000002B', '00002', '03/03/2017', '03/04/2017');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE IF NOT EXISTS `clientes` (
  `dni` varchar(9) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(70) NOT NULL,
  `domicilio` varchar(120) NOT NULL,
  `provincia` varchar(30) NOT NULL,
  `cp` int(5) NOT NULL,
  `telefono` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`dni`, `nombre`, `apellidos`, `domicilio`, `provincia`, `cp`, `telefono`) VALUES
('00000001A', 'Juan', 'Alvarez Gomez', 'Av. Barber, 25', 'Toledo', 45003, 600000001),
('00000002B', 'Jose', 'Rodriguez Garcia', 'Calle Remedios, 5', 'Zamora', 49031, 600000002),
('00000003C', 'Luis Antonio', 'Ruiz Coto', 'Calle Felipe Sanclemente, 20', 'Coruna', 50001, 600000003),
('00000004A', 'Jorge', 'Perez Martin', 'Calle Legua, 5', 'Albacete', 54000, 600000004);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE IF NOT EXISTS `empleados` (
  `dni` varchar(9) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(70) NOT NULL,
  `rol` varchar(30) NOT NULL,
  `domicilio` varchar(120) NOT NULL,
  `provincia` varchar(30) NOT NULL,
  `cp` int(5) NOT NULL,
  `telefono` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`dni`, `nombre`, `apellidos`, `rol`, `domicilio`, `provincia`, `cp`, `telefono`) VALUES
('11111111A', 'Carlos', 'Montero Bravo', 'Marketing', 'Calle Estacion, 13', 'Valladolid', 47004, 611111111),
('11111112A', 'Antonia', 'Cabezas Lobo', 'Ventas', 'Calle Luis Vadia, 98', 'Albacete', 20044, 611111112),
('11111113A', 'Carmela', 'Linares Moreno', 'Tecnico', 'Calle Carlos III, 5', 'Huesca', 30008, 611111113);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidencias`
--

CREATE TABLE IF NOT EXISTS `incidencias` (
  `id` varchar(5) NOT NULL,
  `maquinaria` varchar(5) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `fecha` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `incidencias`
--

INSERT INTO `incidencias` (`id`, `maquinaria`, `titulo`, `descripcion`, `estado`, `fecha`) VALUES
('00001', '00002', 'Luces de freno', 'Cuando el vehiculo esta parando, no enciende las luces', 'Activa', '26/01/2017'),
('00002', '00004', 'Ruido raro en el motor', 'Suele pasar cuando lleva horas de uso', 'Activa', '26/01/2017'),
('00003', '00002', 'Fallo en la palanca', 'Casi no se puede cambiar de marcha', 'Activa', '24/01/2017');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maquinarias`
--

CREATE TABLE IF NOT EXISTS `maquinarias` (
  `id` varchar(5) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `marca` varchar(30) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `bateria` int(2) NOT NULL,
  `voltaje` decimal(6,2) NOT NULL,
  `combustible` varchar(20) NOT NULL,
  `capacidad` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `maquinarias`
--

INSERT INTO `maquinarias` (`id`, `nombre`, `marca`, `precio`, `bateria`, `voltaje`, `combustible`, `capacidad`) VALUES
('00001', 'Tractor', 'John Deere', '2100.00', 0, '0.00', 'Diesel', 100),
('00002', 'Tractor', 'Branson', '2600.00', 0, '0.00', 'Diesel', 120),
('00003', 'Cosechadora', 'John Deere', '3100.00', 2, '12.00', '', 0),
('00004', 'Empacadora', 'New Holland', '3500.00', 1, '9.20', '', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE IF NOT EXISTS `provincias` (
`id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=53 ;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`id`, `nombre`) VALUES
(1, 'Avila'),
(2, 'Alava'),
(3, 'Albacete'),
(4, 'Alicante'),
(5, 'Almeria'),
(6, 'Asturias'),
(7, 'Badajoz'),
(8, 'Baleares'),
(9, 'Barcelona'),
(10, 'Burgos'),
(11, 'Caceres'),
(12, 'Cadiz'),
(13, 'Cordoba'),
(14, 'Cantabria'),
(15, 'Castellon'),
(16, 'Ceuta'),
(17, 'Ciudad Real'),
(18, 'Coruna'),
(19, 'Cuenca'),
(20, 'Gerona'),
(21, 'Granada'),
(22, 'Guadalajara'),
(23, 'Gipuzcoa'),
(24, 'Huelva'),
(25, 'Huesca'),
(26, 'Jaen'),
(27, 'Lerida'),
(28, 'La Rioja'),
(29, 'Las Palmas'),
(30, 'Leon'),
(31, 'Lugo'),
(32, 'Malaga'),
(33, 'Madrid'),
(34, 'Melilla'),
(35, 'Murcia'),
(36, 'Navarra'),
(37, 'Orense'),
(38, 'Palencia'),
(39, 'Pontevedra'),
(40, 'Salamanca'),
(41, 'Tenerife'),
(42, 'Segovia'),
(43, 'Sevilla'),
(44, 'Soria'),
(45, 'Tarragona'),
(46, 'Teruel'),
(47, 'Toledo'),
(48, 'Valencia'),
(49, 'Valladolid'),
(50, 'Vizcaya'),
(51, 'Zamora'),
(52, 'Zaragoza');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alquileres`
--
ALTER TABLE `alquileres`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
 ADD PRIMARY KEY (`dni`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
 ADD PRIMARY KEY (`dni`);

--
-- Indices de la tabla `incidencias`
--
ALTER TABLE `incidencias`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `maquinarias`
--
ALTER TABLE `maquinarias`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `provincias`
--
ALTER TABLE `provincias`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=53;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
