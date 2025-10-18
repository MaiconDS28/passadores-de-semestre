document.getElementById('cadastroForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = {
    nome: this.nome.value,
    email: this.email.value,
    cpf: this.cpf.value,
    telefone: this.telefone.value,
    nascimento: this.nascimento.value,
    endereco: this.endereco.value,
    cep: this.cep.value,
    cidade: this.cidade.value,
    estado: this.estado.value
  };

  fetch("https://script.google.com/macros/s/AKfycbzfuT-TDu8tqt_NOenZIQYEzrXlxIQnO7PrNd0rHcQqoC_dqhjZQuwoe9sti9IxqxGT/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.resultado === "duplicado") {
      alert("⚠️ Este e-mail já está cadastrado.");
    } else if (data.resultado === "sucesso") {
      alert("✅ Cadastro enviado com sucesso!");
      document.getElementById('cadastroForm').reset();
    } else {
      alert("❌ Ocorreu um erro inesperado.");
    }
  })
  .catch(err => {
    alert("Erro de conexão: " + err);
  });
});