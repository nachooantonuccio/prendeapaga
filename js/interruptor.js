var estadoLuz = "apagada";

function prenderLuz(){
	if(estadoLuz == "apagada"){
		document.body.style.backgroundColor = "white";
		document.getElementById("blender").classList.add("active");
		estadoLuz = "prendida";
	}
}

function apagarLuz(){
	if(estadoLuz == "prendida"){
		document.body.style.backgroundColor = "black";
		document.getElementById("blender").classList.remove("active");
		estadoLuz = "apagada";
	}
}