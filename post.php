<?php

require './scripts/form.php';
$pdo = new PDO('sqlite:requests.sqlite');

if(!empty($_POST['fullname']) &&
   !empty($_POST['email']) &&
   !empty($_POST['mobile']) &&
   !empty($_POST['company']) &&
   !empty($_POST['role'])
   ) {
	
    $stmt = $pdo->prepare("
        INSERT INTO request 
        (fullname, email, mobile, company, role) VALUES 
        (?, ?, ?, ?, ?)
    ");
    
    $stmt->execute(array(
        $_POST['fullname'],
        $_POST['email'],
        $_POST['mobile'],
        $_POST['company'],
        $_POST['role']
    ));
	
    if(empty($errors)) {
        sendEmails();
     } else {
     
        http_response_code( 406 ); 
        echo json_encode( [ 'type' => 'fail', 'message' => $errors ] );
     }
}

?>