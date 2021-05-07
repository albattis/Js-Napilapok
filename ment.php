<?php
include("config.php");

$conn = new \PDO("mysql:host=$host;dbname=$database;charset=utf8", $user, $password);

$sql = "INSERT INTO `napilapok` (`cim`, `alapitva`, `kiado`, `peldany`, `tematika`) 
VALUES ( :cim, :alapitva, :kiado, :peldany, :tematika);";

$statement=$conn->prepare($sql);
$statement->execute([
    ":cim" => $_POST["cim"],
    ":alapitva" => $_POST["alapitva"],
    ":kiado" => $_POST["kiado"],
    ":peldany" => $_POST["peldany"],
    ":tematika" => $_POST["tematika"],
]);
// $statement->debugDumpParams();
// exit();
header('Content-Type: application/json');
echo json_encode([
    "cim" => $_POST["cim"],
    "alapitva" => $_POST["alapitva"],
    "kiado" => $_POST["kiado"],
    "peldany" => $_POST["peldany"],
    "tematika" => $_POST["tematika"],
    "id" => $conn->lastInsertId(),
]);