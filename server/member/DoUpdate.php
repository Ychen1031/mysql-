<?php

require_once './DB.php';

function member_DoUpdate() {
    $mId = $_POST['mId'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    try {
        $response = DB();
        $conn = $response['result'];
        $sql = "UPDATE `member` SET `name`= ?, `phone`= ?, `email`= ?, `password`= ? WHERE `mId` = ?";
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute([$name, $phone, $email, $password, $mId]);
        
        if ($result) {
            $count = $stmt->rowCount();
            if ($count < 1) {
                $response['status'] = 204;
                $response['message'] = '更新失敗';
            } else {
                $response['status'] = 200;
                $response['message'] = '更新成功';
            }
        } else {
            $response['status'] = 400;
            $response['message'] = 'SQL錯誤';
        }
    } catch (PDOException $e) {
        $response['status'] = 500;
        $response['message'] = '資料庫錯誤: ' . $e->getMessage();
    }
    
    return ($response);
}
