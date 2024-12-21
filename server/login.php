<?php

require_once './DB.php';

function login() {

    $response = DB();

    if ($response['status'] == 200) {
        $conn = $response['result'];
        $mId = $_POST['mId'];
        $password = $_POST['password'];

        $sql = "SELECT * FROM member WHERE mId = ? AND password = ?";
        $stmt = $conn -> prepare($sql);
        $result = $stmt -> execute([$mId, $password]);

        if ($stmt->rowCount() > 0) {
            // Login successful
            $response['status'] = 200;
            $response['message'] = '有此帳號';
        } else {
            $response['status'] = 500;
            $response['message'] = "帳號或密碼有誤";
        }

        }
    return $response;
}