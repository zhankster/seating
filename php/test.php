<?php
require 'connection.php';

$sel= new Connection();
$ret = $sel->sel_json("select * from dine.users;");
echo $ret;
//sel_json('select * from users;');

?>