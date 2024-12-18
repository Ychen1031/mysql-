<?php

require_once './DB.php';

function member_DoSelect() {
    $mId = $_POST['mId'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    $response = DB();
    $conn = $response['result'];
    
    $sql = "INSERT INTO `member` (`mId`, `name`, `phone`, `email`, `password`) VALUES (?,?,?,?,?);";
    $stmt = $conn->prepare($sql);
    $result = $stmt->execute([$mId, $name, $phone, $email, $password]);
    
    if ($result) {
        $count = $stmt->rowcount();
        if ($count<1) {
            $response['status'] = 204;
            $response['message'] = '新增失敗';
        } else {
            $response['status'] = 200;
            $response['message'] = '新增成功';
        }
    } else {
        $response['status'] = 400;
        $response['message'] = 'SQL錯誤';
    }
    
    return ($response);
}