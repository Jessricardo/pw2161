//jquery(etiquetas,clases,id)
//$ alias(un sobrenombre)
//$ == jquery
//Main


var inicio=function()
{
	//Preparar los eventos
	//de todos mis objetos
	var clicBoton=function()
	{
		alert("Clic del botón");
		$(".anuncioWeb").html("Clic del Botón");
	}
	$("#miBoton").on("click",clicBoton);
	var clicBoton2=function()
	{
		$.ajax({
			beforeSend:function(){
				console.log("Espere...");
			},
  			url: 'https://randomuser.me/api/',
  			dataType: 'json',
  			success: function(data){
  			console.log(data);
  			//alert(data.results[0].name.first+" "+data.results[0].name.last);
  			$("#fotoPersona").fadeOut();
  			$("#fotoPersona").fadeIn();
  			$("#fotoPersona").attr("src",data.results[0].picture.large);
  			$("#txtNombreUser").slideDown("slow");
  			$("#txtNombreUser").html(data.results[0].name.first);
  			$("#txtApellidoUser").html(data.results[0].name.last);
  			},
  			error:function(xhr,error,throws){
  				console.log("Ocurrió un error");
  			}
		});
     
	}
	var teclaUnInput=function(tecla)
	{
		if(tecla.which == 13){
			//Que se posicione en otroInput
			$("#otroInput").focus();
		}
	}
	$("#miBoton").off("click",clicBoton);
	$("#miBoton").on("click",clicBoton2);
	$("#unInput").on("keypress",teclaUnInput);
}
$(document).on("ready",inicio);