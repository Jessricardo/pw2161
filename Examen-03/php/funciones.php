<?php
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}

function guardaAlmacen()
{
	$id=GetSQLValueString($_POST["txtIdAlmacen"],"int");
	$nombre=GetSQLValueString($_POST["txtNombreAlmacen"],"text");
	$dir1=GetSQLValueString($_POST["txtDireccion1Almacen"],"text");
	$dir2=GetSQLValueString($_POST["txtDireccion2Almacen"],"text");
	$cp=GetSQLValueString($_POST["txtCPAlmacen"],"text");
	$localidad=GetSQLValueString($_POST["txtLocalidadAlmacen"],"text");
	$provincia=GetSQLValueString($_POST["txtProvinciaAlmacen"],"text");

	$respuesta=false;
	//Conecto al servidor de BD
	//Servidor, usuario, clave
	$conexion =mysql_connect("localhost","root","");
	//Seleccionar la BD
	mysql_select_db("examenPW");
	$guarda = sprintf("insert into almacenes values (%d,%s,%s,%s,%s,%s,%s)",$id,$nombre,$dir1,$dir2,$cp,$localidad,$provincia);
	mysql_query($guarda);
	if(mysql_affected_rows()>0){
		$respuesta=true;
	}
	$salidaJSON = array('respuesta' => $respuesta);
	//Devolvemos el resultado al JS
	print json_encode($salidaJSON);
}

$accion = $_POST["accion"];
//Menu principal
switch ($accion) {
	case 'guardaAlmacen':
		guardaAlmacen();
	break;
	default:
		# code...
	break;
}
?>