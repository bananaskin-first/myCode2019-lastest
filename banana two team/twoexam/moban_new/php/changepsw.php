<?php
//连接数据库
include 'conn.php';

//接收前端数据
$name = isset($_REQUEST['reName'])?$_REQUEST['reName']:'';
$psword = isset($_REQUEST['rePassword'])?$_REQUEST['rePassword']:'';

//修改密码
$sql = "UPDATE userinf set psw='$psword' WHERE name='$name'";

//执行语句

$res = $conn->query($sql);

echo 'yes';



?>