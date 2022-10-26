<?php 
// читать json файл 
$json = file_get_contents('../json/goods.json');
$json = json_decode($json, true);

// письмо
$message = '';
$message .= '<h1>заказ в магазине "Лукумбар"</h1>';
$message .= '<p>телефон: '.$_POST['ephone'].'</p>';
$message .= '<p>почта: '.$_POST['email'].'</p>';
$message .= '<p>клиент: '.$_POST['ename'].'</p>';
$message .= '<p>комментарий: '.$_POST['ecomment'].'</p>';
$message .= '<p>улица: '.$_POST['estreet'].'</p>'; 
$message .= '<p>дом: '.$_POST['ehouse'].'</p>'; 
$message .= '<p>квартира: '.$_POST['eroom'].'</p>'; 
$message .= '<p>этаж: '.$_POST['efloor'].'</p>'; 
$message .= '<p>подъезд: '.$_POST['eentrance'].'</p>';
$message .= '<p>домофон: '.$_POST['eintercom'].'</p>';  

$cart = $_POST['cart'];
$sum = 0;

foreach ($cart as $id => $key) {
     foreach ($key as $id2 => $key2) {
     $message .= $json[$id]['name'].' ';
     $message .= '(';
     $message .= $json[$id]['weight'][$id2];
     $message .= '&nbsp; гр)';
     $message .= '&nbsp; цена &nbsp;';
     $message .= $json[$id]['cost'][$id2];
     $message .= '&nbsp; кол - во : &nbsp;';
     $message .= $key2;
     $message .= '&nbsp; общая сумма = &nbsp;';
     $message .= $json[$id]['cost'][$id2]* $key2. '&nbsp; &#8381;';
     $message .= '<br> <br>';
     $sum = $sum + $key2 * $json[$id]['cost'][$id2];
     }

}
$message .='всего:' .$sum ."<br>без учёта доставки";
// print_r($message);



$to = 'alexdenuke@yandex.ru'.',';
$to .= $_POST['email'];
$spectext = '<!DOCTYPE HTML><html><head><title>заказ</title></head><body>';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$m = mail($to, 'заказ в магазине', $spectext.$message.'</body></html>', $headers);

if ($m) {echo 1;} else {echo 0;}