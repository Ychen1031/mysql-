<?php

require_once './DB.php';

function DoUpdate() {

    $data = $_POST;
    $sel_table = $data['sel_table'];
    unset($data['sel_table']);
    
    try {
        $response = DB();
        $conn = $response['result'];

        $emptyFields = array_filter($data, function($value) { return empty($value); });
        if (!empty($emptyFields)) {
            $response['status'] = 400;
            $response['message'] = '所有欄位皆為必填';
        } else {
            $setClause = implode(", ", array_map(function($key) {
                return "`$key` = ?";
            }, array_keys($data)));

            $key = array_key_first($data);
            $valuesArray = array_values($data); // 取得資料值
            $firstValue = reset($valuesArray); // 取得第一筆資料
            $valuesArray[] = $firstValue; // 將第一筆資料加到陣列最後
            
            $sql = "UPDATE $sel_table SET $setClause WHERE $key = ?";
            $stmt = $conn->prepare($sql);

            $result = $stmt->execute($valuesArray);
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
        }
    } catch (PDOException $e) {
        $response['status'] = 500;
        $response['message'] = '資料庫錯誤: ' . $e->getMessage();
    }
    
    return ($response);
}