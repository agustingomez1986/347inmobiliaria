<?php
header("Access-Control-Allow-Origin: *");
require("class.phpmailer.php");
require("class.smtp.php");

function console_log($output, $with_script_tags = true) {
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . 
');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
}

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if ($_POST) {
    http_response_code(200);

    $name = $_POST['contactName'];
    $email = $_POST['contactEmail'];
    $phone = $_POST['contactPhoneNumber'];
    $message = $_POST['contactMessage'];
    $propId = $_POST['contactPropId'];

    $smtpHost = "c1681797.ferozo.com";  // Dominio alternativo brindado en el email de alta 
    $smtpUsuario = "contacto@347inmobiliaria.com";  // Mi cuenta de correo
    $smtpClave = "Dominik06";  // Mi contraseña

    //$mailTo = "agustingomez1986@hotmail.com";
    $mailTo = "contacto@347inmobiliaria.com";

    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->Port = 465; 
    $mail->SMTPSecure = 'ssl';
    $mail->IsHTML(true); 
    $mail->CharSet = "utf-8";

    $mail->Host = $smtpHost; 
    $mail->Username = $smtpUsuario; 
    $mail->Password = $smtpClave;

    $mail->From = $email; // Email desde donde envío el correo.
    $mail->FromName = $name;
    $mail->AddAddress($mailTo); // Esta es la dirección a donde enviamos los datos del formulario
    $mail->Subject = "{$name} te envió un mensaje";
    $mensajeHtml = nl2br($message);
    $mail->Body = "
                <h1>DATOS:</h1>
                <h3>Nombre: <h5>{$name}</h5></h3><br />
                <h3>E-mail: <h5>{$email}</h5></h3><br />
                <h3>Teléfono: <h5>{$phone}</h5></h3><br />
                <h3>Propiedad: <h5>código {$propId}</h5></h3><br />
                <h3>Mensaje: <h5>{$mensajeHtml}</h5></h3><br />
                "; // Texto del email en formato HTML
    $mail->AltBody = "{$message}"; // Texto sin formato HTML

    $estadoEnvio = $mail->Send();

    // if($estadoEnvio){
    //     echo "El correo fue enviado correctamente.";
    // } else {
    //     echo "Ocurrió un error inesperado.";
    // }

    echo json_encode(array(
		"sent" => true
	));
} else {
    echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}

?>