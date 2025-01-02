<?php

require_once './DB.php';

function DoSelect() {
    $response = DB();

    $data = $_POST;
    if (isset($data['sel_table'])) {
        $sel_table = $data['sel_table'];
    } else {
        $response['status'] = 400;
        $response['message'] = "Missing sel_table parameter";
        return $response;
    }

    if (isset($data['mId'])) {
        $mId = $data['mId'];
    }
    if ($response['status'] == 200) {
        $conn = $response['result'];
        if ($sel_table == "order1") {
            $sql = "SELECT  orderTime, product.pName, price, quantity, price * quantity as totoalPrice
                    FROM order1
                    JOIN contain on order1.oId = contain.oId
                    JOIN product on contain.pId = product.pId";

            if (isset($mId)) {
                $sql .= `WHERE order1.mId = $mId`;
            }
            $sql .= `;`;
            
        } else {
            $sql = "SELECT * FROM $sel_table";
        }
        
        
        $stmt = $conn -> prepare($sql);
        $result = $stmt -> execute();
        
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