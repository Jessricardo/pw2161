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
		if(usuario=="pw" && clave=="1234")
		{
			$("#datosUsuario").slideUp(700,function(){
				$("nav").slideDown(700);
			});
			
		}
		else{
			alert("Usuario y/o contraseña incorrecta");
		}
		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit",validarEntrada);
}
$(document).on("ready",iniciaApp);