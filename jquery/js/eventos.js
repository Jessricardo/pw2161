//jquery(etiquetas,clases,id)
//$ alias(un sobrenombre)
//$ == jquery
//Main
$(document).on("ready",inicio);

var inicio=function()
{
	//Preparar los eventos
	//de todos mis objetos
	$("#miBoton").on("click",clicBoton);
	var clicBoton=function()
	{
		alert("Clic del botón");
		$(".anuncioWeb").html("Clic del Botón");
	}
}