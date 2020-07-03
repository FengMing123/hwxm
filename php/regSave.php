<?php
    header("content-type:text/html;charset=utf-8");
    // 一、获取前端发送来的数据（用户名和密码）
    $name = $_POST['username'];
    $pass = $_POST['userpass'];
    // die($pass);

    // 二、连接数据库进行处理（增？？）
    // 1、连接数据库
    $conn = mysqli_connect("localhost","root","123456","biao");
    if(!$conn){
        die("连接失败".mysqli_connect_error());
    }
    // 2、执行sql语句
    
    $res = mysqli_query($conn,"insert into hwbg (number,password) value ('$name','$pass')");    

    // 3、关闭数据库
    mysqli_close($conn);

    // 三、响应(就是使用echo)
    if($res){
        echo '{
            "status" : 200,
            "msg" : "注册成功"
        }'; //注册成功
    }else{
        echo '{
            "status" : -4,
            "msg" : "注册失败"
        }';//注册失败
    }


?>