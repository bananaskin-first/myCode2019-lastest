<?php
//连接数据库
include 'good.php';

//接收前端数据
$goodID = isset($_REQUEST['goodID'])?$_REQUEST['goodID']:'';

$userID = isset($_REQUEST['userID'])?$_REQUEST['userID']:'';

//查询语句


//gengxin
$sql ="DELETE FROM ordergood WHERE uid='$userID' AND gid='$goodID'";

//执行语句

$res = $conn->query($sql);//insert语句执行后得到的是布尔值

if($res){
    //删除层高
    echo 'yes';
}
else{
    echo 'no';
}
//查询总条数


//关联数组，可以一次性返回多个数据
// $list = array(
//     'data' => $arr,
//     'total' => $res2->num_rows,
//     'page' => $page,
//     'num' => $num
// );
// echo $res2->num_rows;

//返回给前端串，传给前端

//3.关闭连接
$res->close();//关闭结果集
$conn->close();//关闭数据库

?>