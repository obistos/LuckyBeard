<?php
         
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function sendEmails() {
    $myemail = "obedr@vendatech.co.za"; //Configure your server email address
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        if (empty($_POST["fullname"]) || 
            empty($_POST["email"]) || 
            empty($_POST["mobile"]) || 
            empty($_POST["company"]) || 
            empty($_POST["role"])) {
            http_response_code(403);
            echo "Failed.";
        } else {
            $fullname = test_input($_POST["fullname"]);
            $email = test_input($_POST["email"]);
            $mobile = test_input($_POST["mobile"]);
            $company = test_input($_POST["company"]);
            $role = test_input($_POST["role"]);
    
            $to = $myemail.','.$email;
            $email_subject = "Request form";
            
            $htmlContent = ' 
            <html> 
            <head> 
                <title>Request for a demo</title> 
                <style>tr td { padding: 5px; } </style>
            </head> 
            <body> 
                <h2>A request for a demo has been sent.</h2> 
                <p>Please see the details below:</p>
                <table cellspacing="0" style="border: 1px dashed #ddd; max-width: 650px;"> 
                    <tr> 
                        <td>Name:</td><td>'.$fullname.'</td> 
                    </tr> 
                    <tr> 
                        <td>Email Address:</td><td>'.$email.'</td> 
                    </tr> 
                    <tr> 
                        <td>Number of guests:</td><td>'.$mobile.'</td> 
                    </tr> 
                    <tr> 
                        <td>Attendance:</td><td>'.$company.'</td> 
                    </tr> 
                    <tr> 
                        <td>Comments:</td><td>'.$role.'</td> 
                    </tr> 
                </table> 
            </body> 
            </html>';
            
            $headers = "MIME-Version: 1.0" . "\r\n"; 
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
        
            $headers .= "From: $myemail\n";
            $headers .= "BCC: obistos@gmail.com\n";
            $headers .= "Reply-To: $email";
        
            mail($to,$email_subject,$htmlContent,$headers);
        

            http_response_code( 200 );
            echo json_encode( [ 'type' => 'success', 'message' => 'Thank you. Your request has been received!' ] );
        }
    } else {
        http_response_code(403);
        echo "Failed.";
    }
}

?>