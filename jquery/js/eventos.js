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
		alert("Boton 2");
		
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