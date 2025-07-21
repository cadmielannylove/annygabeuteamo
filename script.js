// emailjs.init - Atualizado para o formato mais recente
(function(){
  emailjs.init({
    publicKey: "ZmY_l_75ZXldHmEQZ", // Sua chave pública original
  });
})();

document.getElementById("carinho-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const userEmail = document.getElementById("user_email").value;

  // ESTA É A MENSAGEM QUE SERÁ ENVIADA AGORA
  const fullMessageContent = `Oi, meu amor ❤️
Só queria tirar um tempinho do meu dia pra te lembrar do quanto você é especial pra mim.

Desde que você entrou na minha vida, tudo ficou mais leve, mais bonito e mais cheio de sentido. Você me faz sorrir até nos dias difíceis e me inspira a ser melhor a cada dia.

Obrigada por ser quem você é: carinhosa, engraçada, única e simplesmente perfeita pra mim.

Te amo mais do que palavras conseguem explicar.

Com muito amor,
Cadmiel.`; 

  emailjs.send("service_efqjpdc", "template_mjr4byb", {
    email: userEmail,
    message: fullMessageContent // A variável 'message' vai levar o seu texto
  })
    .then(function () {
      document.getElementById("mensagem-sucesso").style.display = "block";
      document.getElementById("user_email").value = "";
    })
    .catch(function (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar o carinho 🥺 Verifique se está tudo certinho. Detalhes: " + error.text);
    });
});

// 🎵 FAZ A MÚSICA TOCAR NO CLIQUE
window.addEventListener("click", () => {
  const audio = document.getElementById("molang-music");
  if (audio) {
    audio.play().catch((e) => {
      console.warn("Erro ao tentar tocar a música:", e);
    });
  }
}, { once: true });
