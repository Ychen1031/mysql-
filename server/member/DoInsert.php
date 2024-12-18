<?php

require_once './DB.php';

function member_DoInsert() {
    $mId = $_POST['mId'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    $response = DB();
    $conn = $response['result'];
    try {
        if (empty($mId) || empty($name) || empty($phone) || empty($email) || empty($password)) {
            $response['status'] = 400;
            $response['message'] = '所有欄位皆為必填';
        } else {
            $sql = "INSERT INTO `member` (`mId`, `name`, `phone`, `email`, `password`) VALUES (?,?,?,?,?);";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute([$mId, $name, $phone, $email, $password]);
            
            if ($result) {
            $response['status'] = 200;
            $response['message'] = '新增成功';
            } else {
            $response['status'] = 404;
            $response['message'] = '新增失敗';
            }
        }
    } catch (PDOException $e) {
        $response['status'] = 500;
        $response['message'] = '資料庫錯誤: '. $e->getMessage();
    }

    return ($response);
}