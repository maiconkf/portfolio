<?php
	//Variaveis de POST, Alterar somente se necessário
	//====================================================
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	//====================================================

	//REMETENTE --> ESTE EMAIL TEM QUE SER VALIDO DO DOMINIO
	//====================================================
	$email_remetente = "contato@maiconfurtado.com.br"; // deve ser uma conta de email do seu dominio
	//====================================================

	//Configurações do email, ajustar conforme necessidade
	//====================================================
	$email_destinatario = "contato@maiconfurtado.com.br"; // pode ser qualquer email que receberá as mensagens
	$email_reply = "$email";
	$email_assunto = "Contato via site"; // Este será o assunto da mensagem
	//====================================================

	//Monta o Corpo da Mensagem
	//====================================================
	$email_conteudo = "Nome = $name \n";
	$email_conteudo .= "Email = $email \n";
	$email_conteudo .= "Mensagem = $message \n";
	//====================================================

	//Seta os Headers (Alterar somente caso necessario)
	//====================================================
	$email_headers = implode ( "\n",array ( "From: <$email_remetente>", "Reply-To: $email_reply", "Return-Path: $email_remetente","MIME-Version: 1.0","X-Priority: 3","Content-Type: text/html; charset=UTF-8" ) );
	//====================================================

	//Enviando o email
	//====================================================
	if (mail ($email_destinatario, $email_assunto, nl2br($email_conteudo), $email_headers)){
		echo json_encode(array('status' => 'success'));
	} else{
		echo json_encode(array('status' => 'error'));
	}
	//====================================================
?>