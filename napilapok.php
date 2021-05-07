<?php

include("config.php");

$conn = new \PDO("mysql:host=$host;dbname=$database;charset=utf8", $user, $password);

$sql = "SELECT * FROM napilapok";
if(!empty($_GET['orderby']))
{
    $sql .= " order by $_GET[orderby] $_GET[rendezes]";
}

$statement=$conn->prepare($sql);
$statement->execute();
$data = $statement->fetchAll(PDO::FETCH_ASSOC);
header('Content-Type: application/json');
echo json_encode($data);
