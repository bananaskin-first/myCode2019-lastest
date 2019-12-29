<?php
//连接数据库
include 'good.php';

//接收前端数据
$uid = isset($_REQUEST['uid'])?$_REQUEST['uid']:'';



//查询语句
$sql ="SELECT *FROM lists WHERE uid = '$uid'";

//执行语句
$res = $conn ->query($sql);

$arr = $res->fetch_all(MYSQLI_ASSOC);//得到数组  [{},{},{}]

// var_dump($arr);
//查询前设置编码，防止输出乱码
$conn->set_charset('utf8');

//查询总条数


//关联数组，可以一次性返回多个数据
// $list = array(
//     'data' => $arr,
//     'total' => $res2->num_rows,
//     'page' => $page,
//     'num' => $num
// );
// echo $res2->num_rows;

//返回给前端
echo json_encode($arr,JSON_UNESCAPED_UNICODE);//把数组转成字符串，传给前端

//3.关闭连接
$res->close();//关闭结果集
$conn->close();//关闭数据库

?>