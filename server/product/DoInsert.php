<?php

require_once './DB.php';

function product_DoInsert() {
    $pId = $_POST['pId'];
    $pName = $_POST['pName'];
    $category = $_POST['category'];
    $price = $_POST['price'];
    $size = $_POST['size'];
    
    $response = DB();
    $conn = $response['result'];
    
    $sql = "INSERT INTO `product` (`pId`, `pName`, `category`, `price`, `size`) VALUES (?,?,?,?,?);";
    $stmt = $conn->prepare($sql);
    $result = $stmt->execute([$pId, $pName, $category, $price, $size]);
    
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