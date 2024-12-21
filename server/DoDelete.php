<?php

require_once './DB.php';

function DoDelete() {
    
    $data = $_POST;
    $sel_table = $_POST['sel_table'];
    unset($data['sel_table']);

    $response = DB();
    if ($response['status'] == 200) {
        $conn = $response['result'];

        $key = array_key_first($data);
        if ($key) {
            // 使用預備語句執行刪除操作
            $sql = "DELETE FROM $sel_table WHERE $key=?";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute([$data[$key]]);
            
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
