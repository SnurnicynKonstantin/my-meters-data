<?php
    $data = file_get_contents("php://input");
    $data = json_decode($data);

    $me = 'ks_on_v@mail.ru';
    $yan = '50-16-16@mail.ru';

    $subject = 'Your Pizza Order';

    $headers .= "MIME-Version: 1.to0\r\n";
    $headers .= "Content-Type: text/html; charset=utf-8\r\n";

    $orderTable = "";
    $orderSum = 0;
    foreach ($data -> basket as &$item) {
        $orderTable .= "<tr><td>" . $item -> name . "</td><td>" . $item ->price . "</td><td>" . $item -> counter . "</td></tr>";
        $orderSum += $item ->price * $item -> counter;
    }

    $message = '<h1>Новый заказ с сайта youpizza55.ru</h1>';
    $message .= '<html><body>';
    $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
    $message .= "<tr><th><strong>Название</strong></th><th><strong>Цена</strong></th><th><strong>Количество</strong></th></tr>";
    $message .= $orderTable;
    $message .= '</table>';
    $message .= '<div><strong>Сумма заказа: ';
    $message .= $orderSum;
    $message .= '</strong></div>';
    $message .= '<br><br><br>';
    $message .= '<h1>Данные клиента</h1>';
    $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
    $message .= '<tr><td>Имя клиента</td><td>';
    $message .= $data -> name;
    $message .= '</td></tr>';
    $message .= '<tr><td>Телефон</td><td>';
    $message .= $data -> telephone;
    $message .= '</td></tr>';
    $message .= '<tr><td>Адреc</td><td>';
    $message .= $data -> adres;
    $message .= '</td></tr>';
    $message .= '<tr><td>Коментарий</td><td>';
    $message .= $data -> comment;
    $message .= '</td></tr>';
    $message .= '</table>';
    $message .= '</body></html>';

    mail($me, $subject, $message, $headers);
    mail($yan, $subject, $message, $headers);




    echo $orderSum;
?>