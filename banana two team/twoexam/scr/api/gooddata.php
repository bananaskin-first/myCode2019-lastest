<?php

//连接数据库

include 'good.php';
//接受前端数据
$name = isset($_REQUEST['name'])?$_REQUEST['name']:'';//三目运算


//isset 验证是否为空




//查询语句
$sql = "SELECT *FROM userin WHERE name='$name'";

//执行语句
$res = $conn ->query($sql);

if($res->num_rows){
    //不能注册
    echo 'no';
}else{
    echo 'yes';
}


//转码
// $conn ->set_charset('utf8');

$res ->close();

$conn ->close();

?>