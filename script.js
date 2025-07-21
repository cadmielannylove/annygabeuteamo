emailjs.init("ZmY_l_75ZXldHmEQZ"); // public key

document.getElementById("carinho-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const userEmail = document.getElementById("user_email").value;

  emailjs.send("service_efqjpdc", "template_mjr4byb", {
    email: userEmail // corrigido para bater com o template
  })
    .then(function () {
      document.getElementById("mensagem-sucesso").style.display = "block";
    })
    .catch(function (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar o carinho 🥺 Verifique se está tudo certinho.");
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
