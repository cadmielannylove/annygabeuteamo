
(function() {
  emailjs.init("fvIS17Nphrm-Y2v85"); // sua public key
})();

document.getElementById("carinho-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("user_email").value;

  emailjs.send("service_hu38i0n", "template_8u1eo1o", {
    user_email: email
  }).then(() => {
    document.getElementById("mensagem-sucesso").style.display = "block";
  });
});
