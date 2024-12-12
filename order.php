<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "訂購單";

// 建立連接
$conn = new mysqli($servername, $username, $password, $dbname);

// 檢查連接
if ($conn->connect_error) {
    die("連接失敗: " . $conn->connect_error);
}

// 獲取表單資料
$name = $_POST['name'];
$drink = $_POST['drink'];
$size = $_POST['size'];
$sugar = $_POST['sugar'];
$ice = $_POST['ice'];

// 根據飲料名稱設定價錢
$prices = [
    "珍珠奶茶" => 50,
    "紅茶" => 30,
    "綠茶" => 30,
    "烏龍茶" => 35,
    "四季春" => 35,
    "冬瓜茶" => 40,
    "檸檬紅茶" => 45,
    "檸檬綠茶" => 45,
    "蜂蜜綠茶" => 50,
    "芒果綠茶" => 55
];
$price = $prices[$drink];

// 插入資料到資料庫
$sql = "INSERT INTO orders (name, drink, size, sugar, ice, price) VALUES ('$name', '$drink', '$size', '$sugar', '$ice', '$price')";

if ($conn->query($sql) === TRUE) {
    $message = "訂單提交成功";
} else {
    $message = "錯誤: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="zh-tw">
<head>
    <meta charset="UTF-8">
    <title>訂單狀態</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;
        }
        h1 {
            color: #333;
        }
        p {
            color: #555;
        }
        button {
            padding: 10px 20px;
            background-color: #4CAF50;
            border: none;
            border-radius: 4px;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1><?php echo $message; ?></h1>
        <p>感謝您的訂購！</p>
        <button onclick="window.location.href='order.html'">重新載入此頁</button>
    </div>
</body>
</html>