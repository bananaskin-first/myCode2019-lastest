<?php

include 'conn.php';

$sql =  "SELECT *FROM userinf";

$res = $conn->query($sql);

var_dump($res);

?>