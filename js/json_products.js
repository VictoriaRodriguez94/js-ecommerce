window.onload = function(){
	  $.get( "php/json.php",
	  function(data, status){
		//var objeto = JSON.parse(data);
		var objeto = data;
		var productos = "";
		Object.values(objeto).forEach(val=>{
			productos += '<div class="col-4 card-perry"><div style="height:350px"><img src="'+ val.image +'" class="imagen-producto u-full-width"></div><div class="info-card"><h4>'+ val.titulo +'</h4><p>Premium</p><p class="precio">'+ val.precio +'</p><a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="'+ val.id +'">Agregar Al Carrito</a></div></div></div>';
		});
		$("#contenedor_productos").html(productos);
	// La respuesta del llamado es el contenido JSON generado por el archivo PHP
	  });
}