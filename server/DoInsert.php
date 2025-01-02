<?php

require_once './DB.php';

function DoInsert() {
    $data = $_POST;
    
    $sel_table = $_POST['sel_table'];
    unset($data['sel_table']);
    
    try {
        $response = DB();
        $conn = $response['result'];
        $emptyFields = array_filter($data, function($value) { return empty($value); });
        if (!empty($emptyFields)) {
            $response['status'] = 400;
            $response['message'] = '所有欄位皆為必填';
        } else {
            $columns = implode(", ", array_keys($data));
            $valuesArray = array_values($data); // 取得資料值
            $placeholders = implode(", ", array_fill(0, count($data), "?"));
            $sql = "INSERT INTO $sel_table ($columns) VALUES ($placeholders);";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute($valuesArray);
            
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