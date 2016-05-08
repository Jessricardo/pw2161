var inicio=function(){
  var pagina;
  var resultado;
	var searchHero=function(){
      pagina=0;
    	if($("#heroSearch").val()){
			var personaje=$("#heroSearch").val();
			$.ajax({							
  				url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=7dffa05384ce326f96d112442e360428&hash=d3432ff9fcc5b40c873f4d3e75cd0c43&nameStartsWith='+personaje.replace(" ","%20"),
  				dataType: 'json',
  				success: function(resultado1){
  					console.log(resultado1);
  					if (typeof resultado1.data.results !== 'undefined' && resultado1.data.results.length > 0) {
              resultado=resultado1;
              $("table").hide("blind",700, function () {
        				$("#heroPicture").load(function () {
           					$("#heroName").text(resultado1.data.results[0].name);
                    $("#heroDescription").text(resultado1.data.results[0].description);  
                    $("table").show("blind",700,function(){
                      if(resultado1.data.results.length > 1){
                        $("#caja").show("blind",700);
                        $("#heroButton").css("margin-bottom","0");
                      }else{
                        $("#heroButton").css("margin-bottom","2%");
                        $("#caja").hide("blind",500);
                      }
                    });
        				}).attr("src", resultado1.data.results[0].thumbnail.path+"."+resultado1.data.results[0].thumbnail.extension);                
    					});
					}else{
						alert("No existe");
					}
  										
  				},
  				error:function(xhr,error,throws){
  					console.log("Ocurrió un error");
  				}
			});			
			}else{
				alert("¡Texto Vacio!");
			}
	}
  var siguienteHero=function(){
    if (typeof resultado.data.results[pagina+1] !== 'undefined'){
      pagina++;
      $("table").hide("slide", { direction: "left" }, 300,function(){
        $("#heroName").text(resultado.data.results[pagina].name);
        $("#heroDescription").text(resultado.data.results[pagina].description);  
      }).show("slide", { direction: "right" }, 300);
      $("#heroPicture").attr("src", resultado.data.results[pagina].thumbnail.path+"."+resultado.data.results[pagina].thumbnail.extension);
      
    }
  }
  var anteriorHero=function(){
    if (typeof resultado.data.results[pagina-1] !== 'undefined'){
      pagina--;
      $("table").hide("slide", { direction: "right" }, 300,function(){
        $("#heroName").text(resultado.data.results[pagina].name);
        $("#heroDescription").text(resultado.data.results[pagina].description); 
      }).show("slide", { direction: "left" }, 300);
      $("#heroPicture").attr("src", resultado.data.results[pagina].thumbnail.path+"."+resultado.data.results[pagina].thumbnail.extension);      
    }
  }
  //Codigo Cambiar Fondo
  var kkeys = [], konami = "78,73,71,71,65";
  $(document).keydown(function(e) {
    kkeys.push( e.keyCode );
    if ( kkeys.toString().indexOf( konami ) >= 0 ) {
      $(document).unbind('keydown',arguments.callee);
      $("body").toggleClass("fondo fondo2");
    }
  });
  //Eventos
	$("#heroButton").on("click",searchHero);
  $("#siguiente").on("click",siguienteHero);
  $("#anterior").on("click",anteriorHero);
}
$(document).on("ready",inicio);