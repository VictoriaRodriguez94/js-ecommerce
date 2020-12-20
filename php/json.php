<?php

$data = [
	["titulo"=>"VASO TERMICO","image"=>"imagenes/otros/vasotermico.jpg","precio"=>"$450","id"=>1],
	["titulo"=>"BUZO NAZA","image"=>"imagenes/otros/naza.jpg","precio"=>"$800","id"=>2],
	["titulo"=>"REMERA ESTOY MUY EBRIA!","image"=>"imagenes/remeras/rem7.jpg","precio"=>"$350","id"=>3],
	["titulo"=>"YERBERA","image"=>"imagenes/otros/yerbera.jpg","precio"=>"$420","id"=>4],
	["titulo"=>"VASO TERMICO","image"=>"imagenes/otros/otros.jpg","precio"=>"$445","id"=>5],
	["titulo"=>"REMERA","image"=>"imagenes/remeras/rem9.jpg","precio"=>"$350","id"=>6],
	["titulo"=>"ALMOHADON","image"=>"imagenes/almohadones/almohadon3.jpg","precio"=>"$240","id"=>7],
	["titulo"=>"MOUSE PAD","image"=>"imagenes/mouse/mouse6.jpg","precio"=>"$320","id"=>8],
	["titulo"=>"MOUSE PAD","image"=>"imagenes/otros/Mous2.jpg","precio"=>"$410","id"=>9],
	["titulo"=>"TAZA TERMICA","image"=>"imagenes/tazas/Taza3.jpg","precio"=>"$690","id"=>10],
	["titulo"=>"BUZO OCEANICO","image"=>"imagenes/buzos/buzo6.jpg","precio"=>"$390","id"=>11],
	["titulo"=>"TAZA MAGICA","image"=>"imagenes/otros/tazamagica.jpg","precio"=>"$750","id"=>12]
];
header('Content-Type: application/json');
echo json_encode($data);

?>