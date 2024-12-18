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
    
    try {
        if (empty($pId) || empty($pName) || empty($category) || empty($price) || empty($size)) {
            $response['status'] = 400;
            $response['message'] = '所有欄位皆為必填';
        } else {
            $sql = "INSERT INTO `product` (`pId`, `pName`, `category`, `price`, `size`) VALUES (?,?,?,?,?);";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute([$pId, $pName, $category, $price, $size]);
            
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