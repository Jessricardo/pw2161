var iniciaApp=function()
{
	var validarEntrada=function(){
		var usuario=$("#txtUsuario").val();
		var clave=$("#txtClave").val();
		if(usuario==""){
			$("#txtUsuario").focus();
		}
		if(clave==""){
			$("#txtClave").focus();
		}
		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit",validarEntrada);
}
$(document).on("ready",iniciaApp);