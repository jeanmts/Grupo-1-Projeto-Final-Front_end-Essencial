// Função de validação
const validaCampos = () => {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  const msgNome = document.getElementById("mensagem-nome");
  const msgEmail = document.getElementById("mensagem-email");
  const msgRecado = document.getElementById("mensagem-recado");

  // limpa mensagens anteriores
  msgNome.textContent = "";
  msgEmail.textContent = "";
  msgRecado.textContent = "";

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome === "") {
    msgNome.textContent = "⚠️ O campo Nome é obrigatório!";
    msgNome.style.color = "red";
    document.getElementById("nome").focus();
    return false;
  }

  if (email === "") {
    msgEmail.textContent = "⚠️ O campo Email é obrigatório!";
    msgEmail.style.color = "red";
    document.getElementById("email").focus();
    return false;
  } else if (!regexEmail.test(email)) {
    msgEmail.textContent = "⚠️ O email informado está incorreto!";
    msgEmail.style.color = "red";
    document.getElementById("email").focus();
    return false;
  }

  if (mensagem === "") {
    msgRecado.textContent = "⚠️ O campo Mensagem é obrigatório!";
    msgRecado.style.color = "red";
    document.getElementById("mensagem").focus();
    return false;
  }

  // Se passou em tudo, chama a função que envia
  formularioApi(nome, email, mensagem);
  return true;
};

// Função que envia para a API do MockAPI
const formularioApi = (nome, email, mensagem) => {
  fetch("https://68e04d1c93207c4b47942b9a.mockapi.io/contato", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, mensagem }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Erro ao enviar o formulário");
      return response.json();
    })
    .then((dados) => {
      console.log("✅ Enviado com sucesso:", dados);
      alert("Mensagem enviada com sucesso!");
      document.querySelector(".form").reset(); // limpa o formulário
    })
    .catch((erro) => {
      console.error("❌ Erro:", erro);
      alert("Erro ao enviar o formulário. Tente novamente.");
    });
};
