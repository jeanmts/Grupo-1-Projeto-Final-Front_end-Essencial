const validaCampos = () => {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;

  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome === "") {
    document.getElementById("mensagem-nome").innerHTML =
      "O campo Nome é obrigatório!";
    document.getElementById("mensagem-nome").style.color = "red";
    document.getElementById("nome").focus();
    return false;
  }

  if (email === "") {
    document.getElementById("mensagem-nome").innerHTML = "";
    document.getElementById("mensagem-email").innerHTML =
      "O campo email é obrigatório!";
    document.getElementById("mensagem-email").style.color = "red";
    document.getElementById("email").focus();
    return false;
  } else if (!regexEmail.test(email)) {
    document.getElementById("mensagem-nome").innerHTML = "";
    document.getElementById("mensagem-email").innerHTML = "O email incorreto !";
    document.getElementById("mensagem-email").style.color = "red";
    document.getElementById("email").focus();
    return false;
  }

  if (mensagem === "") {
    document.getElementById("mensagem-email").innerHTML = "";
    document.getElementById("mensagem-recado").innerHTML =
      "O campo mensagem é obrigatório!";
    document.getElementById("mensagem-recado").style.color = "red";
    document.getElementById("mensagem").focus();
    return false;
  }
  document.getElementById("mensagem-recado").innerHTML = "";
  // Se passou em todas as validações
  alert("Formulário enviado com sucesso!");
  return true;
};
