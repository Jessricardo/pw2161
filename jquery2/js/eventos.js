var iniciaApp=function()
{
	var validarEntrada=function(){
		//
		event.preventDefault();
		var usuario=$("#txtUsuario").val();
		var clave=$("#txtClave").val();
		if(usuario==""){
			$("#txtUsuario").focus();
		}
		if(clave==""){
			$("#txtClave").focus();
		}
		//2.- Verificar usuario y contraseña
		var parametros = "accion=validaEntrada"+
						 "&usuario="+usuario+
						 "&clave="+clave+
						 "&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Validar al usuario");
			},
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/funciones.php",
			data:parametros,
			success:function(response){
				if(response.respuesta){
					$("#datosUsuario").slideUp("slow");
					$("header").slideDown("slow");
					$("nav").slideDown("slow");
				}else{
					alert("Usuario/contraseña incorrecto(s)");
				}
			},
			error:function(xhr,ajaxOptions,thrownError){
				console.log("Algo salió mal");
			}
		});
		console.log("Se disparó el submit");
	}

	var Altas=function()
	{
		$("#altaUsuarios").slideDown("slow");
		$("#altaUsuarios h2").html("Alta Usuarios");
		//Apaga funcion de baja usuario y activa la de alta
		$("#frmAltaUsuarios").off("submit",BajaUsuario);
		$("#frmAltaUsuarios").on("submit",AltaUsuario);
	}
	var Bajas =function(){
		$("#altaUsuarios").slideDown("slow");
		$("#altaUsuarios h2").html("Baja Usuarios");
		//Apaga funcion de altausuario y activa la de baja
		$("#frmAltaUsuarios").off("submit",AltaUsuario);
		$("#frmAltaUsuarios").on("submit",BajaUsuario);
	}
	var AltaUsuario=function()
	{
		event.preventDefault();
		//alert($("#frmAltaUsuario").serialize());
		var datos=$("#frmAltaUsuarios").serialize();
		var parametros="accion=guardaUsuario&"+datos+"&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Guardar al usuario");
			},
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/funciones.php",
			data:parametros,
			success:function(response){
				if(response.respuesta){
					alert("Bien");
				}else{
					alert("Mal");
				}
			},
			error:function(xhr,ajaxOptions,thrownError){
				console.log("Algo salió mal");
			}
		});
	}
	var BajaUsuario=function()
	{
		event.preventDefault();
		//alert($("#frmAltaUsuario").serialize());
		var datos="txtNombreUsuario="+$("#txtNombreUsuario").val();
		var parametros="accion=bajaUsuario&"+datos+"&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Baja al usuario");
			},
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/funciones.php",
			data:parametros,
			success:function(response){
				if(response.respuesta){
					alert("Bien");
				}else{
					alert("Mal");
				}
			},
			error:function(xhr,ajaxOptions,thrownError){
				console.log("Algo salió mal");
			}
		});
	}
	var Consultas = function()
	{
		var parametros = "accion=consultas"+
						 "&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Consultas usuarios");
			},
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/funciones.php",
			data:parametros,
			success:function(response){
				if(response.respuesta){
					$("#tablaConsultas").html(response.tabla);
					$("#consultasUsuarios").slideDown("slow");
				}else{
					alert("Mal");
				}
			},
			error:function(xhr,ajaxOptions,thrownError){
				console.log("Algo salió mal");
			}
		});
	}
	var BajaDinamica=function()
	{
		var usuario="txtNombreUsuario="+$(this).attr("id");
		var parametros = "accion=bajaUsuario&"+usuario+
						 "&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Consultas usuarios");
			},
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/funciones.php",
			data:parametros,
			success:function(response){
				if(response.respuesta){
					Consultas();
				}else{
					alert("Mal");
				}
			},
			error:function(xhr,ajaxOptions,thrownError){
				console.log("Algo salió mal");
			}
		});

	}

	//Eventos
	$("#frmValidaEntrada").on("submit",validarEntrada);
	$("#btnAltas").on("click",Altas);
	$("#frmAltaUsuarios").on("submit",AltaUsuario);
	$("#btnBajas").on("click",Bajas);
	$("#btnConsultas").on("click",Consultas);
	//Eventos dinámicos
	$("#tablaConsultas").on("click","button",BajaDinamica);
	//Otra forma
	//$("#tablaConsultas > input").on("click",BajaDinamica);

}
$(document).on("ready",iniciaApp);