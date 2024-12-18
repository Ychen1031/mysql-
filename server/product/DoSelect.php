<?php

require_once './DB.php';

function product_DoSelect() {
    $response = DB();
    if ($response['status'] == 200) {
        $conn = $response['result'];
        if (isset($_POST['id'])) {
            $id = $_POST['id'];
            $sql = "SELECT * FROM `product` WHERE id=?";
            $stmt = $conn -> prepare($sql);
            $result = $stmt -> execute([$id]);
        } else {
            $sql = "SELECT * FROM `product`";
            $stmt = $conn -> prepare($sql);
            $result = $stmt -> execute();
        }
        if ($result) {
            $rows = $stmt -> fetchAll(PDO::FETCH_ASSOC);
            $response['status'] = 200;
            $response['message'] = "查詢成功";
            $response['result'] = $rows;
        } else {
            $response['status'] = 400;
            $response['message'] = "SQL錯誤";
        }
    }
    return $response;
}