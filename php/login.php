<?php
    require_once 'config.php'; // подключаем скрипт
    require_once 'crypt.php'; // подключаем скрипт шифрования

    $r_name = $_GET["name"]; 
    $r_password = $_GET["password"]; 

    // подключаемся к серверу
    $link = mysqli_connect($host, $user, $password, $database) 
        or die("Ошибка " . mysqli_error($link));
 
    // выполняем операции с базой данных
    $query = sprintf("SELECT * FROM users WHERE name IN ('%s')  AND password IN ('%s')", $r_name, $r_password);
    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 

    $response->status = false;

    if($result->fetch_row()[0] == 1)
    {
        $response->status = true;
        $response->token = strToHex(__encode($r_name . ":::" . $r_password, $key));

        $arr = explode(':::', __decode(hexToStr($exp1), $key));
        $response->dencode = $arr[1];
    }

    echo json_encode($response);
     
    // закрываем подключение
    mysqli_close($link);
?>
