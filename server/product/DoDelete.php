<?php

require_once './DB.php';

function product_DoDelete() {
    
    $response = DB();
    if ($response['status'] == 200) {
        $conn = $response['result'];
        if (isset($_POST['id'])) {
            $id = $_POST['id'];
            // 使用預備語句執行刪除操作
            $sql = "DELETE FROM `product` WHERE pId=?";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute([$id]);
            
            if ($result) {
                $response['status'] = 200;
                $response['message'] = "刪除成功";
            } else {
                $response['status'] = 400;
                $response['message'] = "刪除失敗，SQL錯誤";
            }
        } else {
            $response['status'] = 400;
            $response['message'] = "未提供id參數";
        }
    }
    return $response;
}
