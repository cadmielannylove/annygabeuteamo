(function () {
  emailjs.init("fvIS17Nphrm-Y2v85"); // sua public key real
})();

document.getElementById("carinho-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const userEmail = this.user_email.value;

  emailjs.send("service_hu38i0n", "template_8u1eo1o", {
    user_email: userEmail
  })
  .then(function () {
    document.getElementById("mensagem-sucesso").style.display = "block";
  })
  .catch(function (error) {
    console.error("Erro ao enviar:", error);
    alert("Erro ao enviar o carinho 😢 Verifique se está tudo certinho.");
  });
});
