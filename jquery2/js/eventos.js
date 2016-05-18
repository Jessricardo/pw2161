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
					$('#myModal').modal('show');
				}else{
					$('#myModal').modal('show');
				}
			},
			error:function(xhr,ajaxOptions,thrownError){
				console.log("Algo salió mal");
			}
		});
	}

	$("#frmValidaEntrada").on("submit",validarEntrada);
	$("#btnAltas").on("click",Altas);
	$("#frmAltaUsuarios").on("submit",AltaUsuario);
}
$(document).on("ready",iniciaApp);