<?php

//连接数据库
include 'good.php';
//前端拿到数据

$img = isset($_REQUEST['img'])?$_REQUEST['img']:'';
$title=isset($_REQUEST['title'])?$_REQUEST['title']:'';
$price=isset($_REQUEST['price'])?$_REQUEST['price']:'';
$num = isset($_REQUEST['num'])?$_REQUEST['num']:'';
$UID=isset($_REQUEST['UID'])?$_REQUEST['UID']:'';
$gid=isset($_REQUEST['gid'])?$_REQUEST['gid']:'';
$sid=isset($_REQUEST['sid'])?$_REQUEST['sid']:'';
$sname=isset($_REQUEST['sname'])?$_REQUEST['sname']:'';


//插入 -》执行语句 - 关闭连接

//注册是在数据库里插入语句


$sql = "INSERT INTO ordergood(img,title,price,num,uid,gid,sid,sname) VALUES ('$img','$title','$price','$num','$UID','$gid','$sid','$sname')";

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