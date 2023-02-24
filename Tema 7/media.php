<?php
header("Content-type: application/json; charset=utf-8");
$input = json_decode(file_get_contents("php://input"), true);
$output = array("media" => 0, "html" => "");

$output["html"] .= "<h1>".$input['titulo']."</h1>";
$output["html"] .= "<ul>";
foreach ($input["numeros"] as $value) {
  $output["media"] += $value;
  $output["html"] .= "<li>".$value."</li>";
}
//Añadimos a output los atributos añadidos al objeto de maximo y minimo
$output["html"] .= "<h3>Número máximo:".$input["maximo"]."</h3>";
$output["html"] .= "<h3>Número mínimo:".$input["minimo"]."</h3>";
$output["media"] /= count($input["numeros"]);
$output["html"] .= "</ul>";
echo json_encode($output);
?>