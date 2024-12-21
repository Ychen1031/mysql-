<?php

if (isset($_GET['action'])) {
    $action = $_GET['action'];
} else {
    $action = '_no_action';
}

switch ($action) {
    case 'DoSelect':
        require_once './DoSelect.php';
        $response = DoSelect();
        break;
    
    case 'DoInsert':
        require_once './DoInsert.php';
        $response = DoInsert();
        break;

    case 'DoDelete':
        require_once './DoDelete.php';
        $response = DoDelete();
        break;

    case 'DoUpdate':
        require_once './DoUpdate.php';
        $response = DoUpdate();
        break;
    
    case 'login':
        require_once './login.php';
        $response = login();
        break;
        
    default:
        $response['status'] = 404;
        $response['message'] = 'action not found';
        break;
}

echo json_encode($response);

