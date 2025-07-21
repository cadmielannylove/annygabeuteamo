// emailjs.init - Atualizado para o formato mais recente
(function(){
  emailjs.init({
    publicKey: "ZmY_l_75ZXldHmEQZ", // Sua chave pública original
  });
})();

document.getElementById("carinho-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const userEmail = document.getElementById("user_email").value;

  emailjs.send("service_efqjpdc", "template_mjr4byb", {
    email: userEmail // corrigido para bater com o template
  })
    .then(function () {
      document.getElementById("mensagem-sucesso").style.display = "block";
      // Opcional: Limpar o campo de email após o envio
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
