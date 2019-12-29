<?php
//连接数据库
include 'good.php';

//接收前端数据
$goodID = isset($_REQUEST['goodID'])?$_REQUEST['goodID']:'';

$userID = isset($_REQUEST['userID'])?$_REQUEST['userID']:'';

//查询语句
$sql ="SELECT *FROM ordergood WHERE uid = '$userID' AND gid='$goodID'; ";


//查询总条数

$res = $conn ->query($sql);

if($res->num_rows){
    //不能注册
    echo 'yes';
}else{
    echo 'no';
}

//3.关闭连接
$res->close();//关闭结果集
$conn->close();//关闭数据库

?>