<?php
return [
'driver' => env('MAIL_DRIVER','smtp'),
'host'=> env('MAIL_HOST',''),
'port' => env('MAIL_PORT','hghghj@gmail.com'),
"from"=>array(
"address" =>"",
"name" =>"Soulmate"
 ),
'encryption' => env('MAIL_ENCRYPTION','tls'),
"username"=>"",
"password"=>"DoFgr",
'sendmail' => '/usr/sbin/sendmail -bs',
'pretend' => false,
];