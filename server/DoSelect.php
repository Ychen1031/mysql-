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
        try {
            // order1查詢要做資料表連接
            if ($sel_table == "order1") {
                $sql = "SELECT order1.oId, order1.mId, orderTime, product.pName, price, quantity, price * quantity as totoalPrice
                        FROM order1
                        JOIN contain on order1.oId = contain.oId
                        JOIN product on contain.pId = product.pId";
                // 如果是前台查詢要加上條件mId
                if (isset($mId)) {
                    $sql .= " WHERE order1.mId = '$mId'";
                }
                $sql .= ' ORDER BY DATE_FORMAT(order1.orderTime, "%Y-%m-%d %H:%i:%s")';
            
            } elseif ($sel_table == "order2") {
                $sql = 'SELECT order1.oId FROM order1';
            }
            // 儀表板查詢
            elseif ($sel_table == 'board') {
                $sql = "SELECT 
                        (SELECT SUM(product.price * order1.quantity)
                        FROM order1
                        JOIN contain ON order1.oId = contain.oId
                        JOIN product ON contain.pId = product.pId) as total_sales,
                        (SELECT COUNT(*) FROM order1) as order_count,
                        (SELECT COUNT(*) FROM member) as member_count,
                        (SELECT COUNT(*) FROM product) as product_count";
            } else {
                $sql = "SELECT * FROM $sel_table";
            }

            $stmt = $conn->prepare($sql);
            $result = $stmt->execute();

            if ($result) {
                $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
                $response['status'] = 200;
                $response['message'] = "查詢成功";
                $response['result'] = $rows;
            } else {
                $response['status'] = 400;
                $response['message'] = "SQL錯誤";
            }
        } catch (PDOException $e) {
            $response['status'] = 500;
            $response['message'] = "Database error: " . $e->getMessage();
        }
    }
    return $response;
}