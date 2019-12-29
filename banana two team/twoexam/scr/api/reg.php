<?php

//连接数据库
include 'good.php';
//前端拿到数据

$name = isset($_REQUEST['name'])?$_REQUEST['name']:'';
$password=isset($_REQUEST['password'])?$_REQUEST['password']:'';
$number1=isset($_REQUEST['phone'])?$_REQUEST['phone']:'';


//插入 -》执行语句 - 关闭连接

//注册是在数据库里插入语句


$sql = "INSERT INTO userin(name,psw,number1) VALUES ('$name','$password','$number1')";

$res = $conn->query($sql);//insert语句执行后得到的是布尔值

if($res){
    //注册成功
    echo 'yes';
}
else{
    echo 'no';
}

$conn->close();


?>