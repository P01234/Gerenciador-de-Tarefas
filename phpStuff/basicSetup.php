<?php
    require_once("conexao.php");
    $userName =$_POST["nome"];
    $email=$_POST["email"];
    $password=$_POST["senha"];

    mysqli_query($conectar,"INSERT INTO tb_usuario
        (nome,
        email,
        senha)
        VALUES
        ('$userName',
        '$email',
        '$password')")or die(mysqli_error($conectar));
?>