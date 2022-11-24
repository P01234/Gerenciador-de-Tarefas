<?php
$servidor = "localhost";
$usuarioServidor="id19907022_tarefas2023";
$senhaServidor="6_a8rdj{-F[G322P"; 
$nomeBD= "id19907022_tarefas2022";

$conectar = mysqli_connect($servidor,$usuarioServidor,$senhaServidor,$nomeBD) or die("error a conectar");
$selecionarBD = mysqli_select_db($conectar,$nomeBD) or die (mysqli_error($conectar));


?>
