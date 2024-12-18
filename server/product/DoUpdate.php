<?php

require_once './DB.php';

function product_DoUpdate() {

    $pId = $_POST['pId'];
    $pName = $_POST['pName'];
    $category = $_POST['category'];
    $price = $_POST['price'];
    $size = $_POST['size'];
    
    try {
        $response = DB();
        $conn = $response['result'];
        $sql = "UPDATE `product` SET `pId`= ?, `pName`= ?, `category`=?, `price`=?, `size`=? WHERE `pId` = ?";
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute([$pId, $pName, $category, $price, $size, $pId]);
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