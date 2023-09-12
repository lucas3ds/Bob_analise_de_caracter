// Selecione elementos HTML
const input = document.getElementById("balao");
const conversa = document.getElementById("Conversa");

// Função para criar e exibir uma resposta de Bob
function exibirRespostaBob(texto) {
  const resposta = document.createElement("div");
  resposta.className = "resposta-bob";
  resposta.innerText = texto;

  // Remover a resposta anterior (se houver)
  const respostasAnteriores = document.querySelectorAll(".resposta-bob");
  for (const respostaAnterior of respostasAnteriores) {
    respostaAnterior.remove();
  }

  conversa.appendChild(resposta);
}

// Evento de escuta para o input
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const userInput = input.value;

    if (userInput.toUpperCase() === userInput && userInput !== "") {
      exibirRespostaBob("-Bob: Uau, relaxa!");
    } else if (userInput.endsWith("?")) {
      exibirRespostaBob("-Bob: Claro.");
    } else if (userInput === "") {
      exibirRespostaBob("-Bob: Tudo bem. Seja desse jeito!");
    } else {
      exibirRespostaBob("-Bob: Tanto faz.");
    }

    input.value = ""; // Limpar o input após a resposta de Bob
  }
});
