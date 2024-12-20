<?php

require_once './DB.php';

function DoSelect() {
    $response = DB();

    $sel_table = $_POST['sel_table'];

    if ($response['status'] == 200) {
        $conn = $response['result'];
        if (isset($_POST['id'])) {
            $id = $_POST['id'];
            $sql = "SELECT * FROM $sel_table WHERE id=?";
            $stmt = $conn -> prepare($sql);
            $result = $stmt -> execute([$id]);
        } else {
            $sql = "SELECT * FROM $sel_table";
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