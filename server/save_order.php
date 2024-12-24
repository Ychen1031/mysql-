<?php
require_once 'DB.php';

function save_order() {
    // 連接資料庫
    $db_response = DB();
    if ($db_response['status'] !== 200) {
        die("Connection failed: " . $db_response['message']);
    }
    $conn = $db_response['result'];

    // 獲取 POST 數據
    $oid = $_POST['oid'];
    $mid = $_POST['mid'];
    $pid = $_POST['pid'];
    $quantity = $_POST['quantity'];

    // 準備和綁定
    $stmt = $conn->prepare("INSERT INTO order2 (oid, mid, pid, quantity) VALUES (?, ?, ?, ?)");
    $stmt->bindParam(1, $oid);
    $stmt->bindParam(2, $mid);
    $stmt->bindParam(3, $pid);
    $stmt->bindParam(4, $quantity);

    // 執行語句
    if ($stmt->execute()) {
        $response = "New record created successfully";
    } else {
        $response = "Error: " . $stmt->errorInfo()[2];
    }

    // 關閉連接
    $conn = null;

    return $response;
}