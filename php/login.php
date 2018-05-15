<?php
require_once 'connection.php'; // подключаем скрипт
 
// подключаемся к серверу
$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));
 
// выполняем операции с базой данных
$query = sprintf("SELECT * FROM users WHERE name IN ('%s')  AND password IN ('%s')", 1, 1234);
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 

$myObj->status = false;

if($result->fetch_row()[0] == 1)
{
    $myObj->status = true;
}

echo json_encode($myObj);
     
// закрываем подключение
mysqli_close($link);
?>
