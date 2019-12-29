

<?php

//连接数据库

include 'good.php';
//接受前端数据
$uid = isset($_REQUEST['uid'])?$_REQUEST['uid']:'';//三目运算


//isset 验证是否为空




//查询语句
$sql = "SELECT * FROM lists WHERE uid= '$uid';";

//执行语句
$res = $conn ->query($sql);

$arr = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($arr,JSON_UNESCAPED_UNICODE);//把数组转成字符串，传给前端

//转码
// $conn ->set_charset('utf8');

$res ->close();

$conn ->close();

?>