<?php

//连接数据库

include 'good.php';




//排序
$sql = "SELECT *FROM lists ORDER BY price desc";

//执行语句
$res = $conn ->query($sql);

//转码
// $conn ->set_charset('utf8');
$arr = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($arr,JSON_UNESCAPED_UNICODE);//把数组转成字符串，传给前端
$res ->close();

$conn ->close();

?>