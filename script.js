(function () {
  emailjs.init("fvIS17Nphrm-Y2v85"); // Seu User ID
})();

const form = document.getElementById("form-contato");
const statusMsg = document.getElementById("mensagem-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userEmail = form.user_email.value;

  emailjs
    .send("service_hu38i0n", "template_8u1eo1o", {
      user_email: userEmail,
    })
    .then(() => {
      statusMsg.textContent = "Carinho enviado com sucesso! 💖";
      statusMsg.style.display = "block";
      form.reset();
    })
    .catch((err) => {
      statusMsg.textContent = "Erro: " + JSON.stringify(err);
      statusMsg.style.display = "block";
    });

  setTimeout(() => {
    statusMsg.style.display = "none";
  }, 5000);
});
