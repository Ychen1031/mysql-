<?php

if (isset($_GET['action'])) {
    $action = $_GET['action'];
} else {
    $action = '_no_action';
}

switch ($action) {
    case 'DoSelect':
        require_once './product/DoSelect.php';
        $response = DoSelect();
        break;
    default:
        $response['status'] = 404;
        $response['message'] = 'action not found';
        break;
}

echo json_encode($response);