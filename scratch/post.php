<?php

//$json_url = "https://ziptasticapi.com/35986";
$json = file_get_contents(('php://input'));
$json_un = $json;
$json=str_replace('},',"}]",$json);
$data = json_decode($json, true);

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

$d = json_encode($age);

//echo $d;
echo $json_un;

// echo "<pre>";
// print_r($data);
// print($data[table_id]);
// echo "</pre>";
?>

