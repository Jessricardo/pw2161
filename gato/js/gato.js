var turno=false;
var ganador="na";
function actualizar(){
	if(localStorage.getItem("numero")){
	document.getElementById("titulo").innerHTML=localStorage.getItem("numero")+")";
	}else{
		localStorage.setItem("numero",1);
	}
}
function clic(ident){
	if(ganador=="na"){
	if(document.getElementById(ident).innerHTML=="&nbsp;"){
		if(turno){
			document.getElementById(ident).innerHTML="X";
		}else{
			document.getElementById(ident).innerHTML="O";
		}
		turno=!turno;
	}
	var contX=0;
	var contO=0;
	for(col=1; col<=3;col++){
		for(fila=1; fila<=3 ;fila++){
			var casilla="td"+fila+col;
			if(document.getElementById(casilla).innerHTML=="X"){
				contX++;
			}else if(document.getElementById(casilla).innerHTML=="O"){
				contO++;
			}
			if(contX==3){
				alert("Gano X");
				ganador="X";
				var suma=parseInt(localStorage.getItem("numero"))+1;
				localStorage.setItem("numero",suma);
				return;
			}else if(contO==3){
				alert("Gano O");
				ganador="O";
				var suma=parseInt(localStorage.getItem("numero"))+1;
				localStorage.setItem("numero",suma);
				return;
			}
		}
		contX=0;
		contO=0;
	}

	for(fila=1; fila<=3;fila++){
		for(col=1; col<=3 ;col++){
			var casilla="td"+fila+col;
			if(document.getElementById(casilla).innerHTML=="X"){
				contX++;
			}else if(document.getElementById(casilla).innerHTML=="O"){
				contO++;
			}
			if(contX==3){
				alert("Gano X");
				ganador="X";
				var suma=parseInt(localStorage.getItem("numero"))+1;
				localStorage.setItem("numero",suma);
				return;
			}else if(contO==3){
				alert("Gano O");
				ganador="O";
				var suma=parseInt(localStorage.getItem("numero"))+1;
				localStorage.setItem("numero",suma);
				return;
			}
		}
		contX=0;
		contO=0;
	}
	var col2=3;
	for(fila=1; fila<=3;fila++){
			var casilla="td"+fila+col2;
			if(document.getElementById(casilla).innerHTML=="X"){
				contX++;
			}else if(document.getElementById(casilla).innerHTML=="O"){
				contO++;
			}
			if(contX==3){
				alert("Gano X");
				ganador="X";
				var suma=parseInt(localStorage.getItem("numero"))+1;
				localStorage.setItem("numero",suma);
				return;
			}else if(contO==3){
				alert("Gano O");
				ganador="O";
				var suma=parseInt(localStorage.getItem("numero"))+1;
				localStorage.setItem("numero",suma);
				return;
			}
		col2--;
	}
	contX=0;
	contO=0;
	for(fila=3; fila>=1;fila--){
			var casilla="td"+fila+fila;
			if(document.getElementById(casilla).innerHTML=="X"){
				contX++;
			}else if(document.getElementById(casilla).innerHTML=="O"){
				contO++;
			}
			if(contX==3){
				alert("Gano X");
				ganador="X";
				var suma=parseInt(localStorage.getItem("numero"))+1;
				localStorage.setItem("numero",suma);
				return;
			}else if(contO==3){
				alert("Gano O");
				ganador="O";
				var suma=parseInt(localStorage.getItem("numero"))+1;
				localStorage.setItem("numero",suma);
				return;
			}
	}
	contX=0;
	contO=0;
	if(ganador=="na"){
		var contVacio=0;
		for(fila=1; fila<=3;fila++){
		for(col=1; col<=3 ;col++){
			var casilla="td"+fila+col;
			if(document.getElementById(casilla).innerHTML=="&nbsp;"){
				contVacio++;
			}
		}
	  }
	  if(contVacio==0){
	  	var suma=parseInt(localStorage.getItem("numero"))+1;
		localStorage.setItem("numero",suma);
	  	alert("Empate!");
	  }
	}
  }
	
}