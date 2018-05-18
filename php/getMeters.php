<?php
    require_once 'config.php'; // подключаем скрипт
    require_once 'crypt.php'; // подключаем скрипт шифрования

    $token = $_GET["token"]; 

    $response->status = false;

    $meters = array();

    if($token)
    {
        // подключаемся к серверу
        $link = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($link));
        $user_data = explode(':::', __decode(hexToStr($token), $key));
        $query = sprintf("SELECT * FROM meters WHERE user_id = (SELECT id FROM users WHERE street_id = ('%s')  AND room = ('%s')  AND password = ('%s'))", $user_data[0], $user_data[1], $user_data[2]);
        $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

        while($meter = $result->fetch_row()) {
            $array = array(
                "id" => $meter[0],
                "hot_w" => $meter[2],
                "hot_d" => $meter[3],
                "cold_w" => $meter[4],
                "cold_d" => $meter[5],
                "gas" => $meter[6],
                "gas_d" => $meter[7]
            );
            array_push($meters, $array);
        }
        
        if (!empty($meters)) {
            $response->status = true;
        }
        $response->meters = $meters;
    } 

    echo json_encode($response);
     
    // закрываем подключение
    mysqli_close($link);

?>
