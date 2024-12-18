<?php

if (isset($_GET['action'])) {
    $action = $_GET['action'];
} else {
    $action = '_no_action';
}

switch ($action) {
    case 'product_DoSelect':
        require_once './product/DoSelect.php';
        $response = product_DoSelect();
        break;
    case 'product_DoInsert':
        require_once './product/DoInsert.php';
        $response = product_DoInsert();
        break;

    default:
        $response['status'] = 404;
        $response['message'] = 'action not found';
        break;
}

echo json_encode($response);