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

    case 'product_DoDelete':
        require_once './product/DoDelete.php';
        $response = product_DoDelete();
        break;

    case 'product_DoUpdate':
        require_once './product/DoUpdate.php';
        $response = product_DoUpdate();
        break;

    case 'member_DoSelect':
        require_once './member/DoSelect.php';
        $response = member_DoSelect();
        break;
    
    case 'member_DoInsert':
        require_once './member/DoInsert.php';
        $response = member_DoInsert();
        break;
    
    case 'member_DoUpdate':
        require_once './member/DoUpdate.php';
        $response = member_DoUpdate();
        break;
    
    case 'member_DoDelete':
        require_once './member/DoDelete.php';
        $response = member_DoDelete();
        break;
    
    

    default:
        $response['status'] = 404;
        $response['message'] = 'action not found';
        break;
}

echo json_encode($response);