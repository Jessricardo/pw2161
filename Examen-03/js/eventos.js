var iniciaApp=function(){
	var Altas=function()
	{
		$("#mainMessage").slideUp("fast");
		$("#altaAlmacenes").slideDown("slow");
		$("#frmAltaAlmacenes").on("submit",AltaAlmacenes);
	}
	var Inicio=function()
	{
		$("#altaAlmacenes").slideUp("fast");
		$("#mainMessage").slideDown("slow");
		$("#frmAltaAlmacenes").off("submit",AltaAlmacenes);
	}
	var AltaAlmacenes=function()
	{
		event.preventDefault();
		//alert($("#frmAltaUsuario").serialize());
		var datos=$("#frmAltaAlmacenes").serialize();
		var parametros="accion=guardaAlmacen&"+datos+"&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Guardar al almacen");
			},
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/funciones.php",
			data:parametros,
			success:function(response){
				if(response.respuesta){
					alert("Alta correcta");
				}else{
					alert("Error al dar alta");
				}
			},
			error:function(xhr,ajaxOptions,thrownError){
				console.log("Algo salió mal");
			}
		});
	}


	$("#btnInicio").on("click",Inicio);
	$("#btnAltas").on("click",Altas);
}
$(document).on("ready",iniciaApp);