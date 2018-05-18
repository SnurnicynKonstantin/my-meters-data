<?php
    require_once 'config.php'; // подключаем скрипт
    require_once 'crypt.php'; // подключаем скрипт шифрования

    function __checkUser($token)
    {
        return __decode(hexToStr($token), $key);
        // подключаемся к серверу
        //$link = mysqli_connect($host, $user, $password, $database) 
        //or die("Ошибка " . mysqli_error($link));    



        // закрываем подключение
        //mysqli_close($link);
 
    }

?>
