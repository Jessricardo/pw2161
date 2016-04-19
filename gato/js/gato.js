var contX=0;
var contO=0;
var turno=false;
function clic(ident){
	if(document.getElementById(ident).innerHTML=="&nbsp;"){
		if(turno){
			document.getElementById(ident).innerHTML="X";
		}else{
			document.getElementById(ident).innerHTML="O";
		}
		turno=!turno;
	}
	
	for(col=1; col<=3;col++){
		for(fila=1; fila<=3 ;fila++){
			var casilla="td"+col+fila;
			if(document.getElementById(casilla).innerHTML=="X"){
				contX++;
			}else if(document.getElementById(casilla).innerHTML=="O"){
				contO++;
			}
		}
	}
	for(fila=1; fila<=3;fila++){
		for(col=1; col<=3 ;col++){
			var casilla="td"+col+fila;
			if(document.getElementById(casilla).innerHTML=="X"){
				contX++;
			}else if(document.getElementById(casilla).innerHTML=="O"){
				contO++;
			}
		}
	}
	if(contX==3){
		alert("Gano X");
	}else if(contO==3){
		alert("Gano O");
	}
}