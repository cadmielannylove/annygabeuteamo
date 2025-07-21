  emailjs.init("fvIS17Nphrm-Y2v85");
})();

document.getElementById("carinho-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const userEmail = event.target.user_email.value;

  emailjs.send("service_hu38i0n", "template_8u1eo1o", {
    user_email: userEmail,
  })
  .then(function () {
    const msg = document.getElementById("mensagem");
    msg.textContent = "Carinho enviado com sucesso! 💌";
    msg.style.display = "block";
    setTimeout(() => msg.style.display = "none", 3000);
    event.target.reset();
  }, function (error) {
    const msg = document.getElementById("mensagem");
    msg.textContent = "Erro ao enviar carinho 😢";
    msg.style.display = "block";
    setTimeout(() => msg.style.display = "none", 3000);
  });
});

// 🌧️ CHUVA DE PIU
setInterval(() => {
  const piu = document.createElement("img");
  piu.src = "piu.png"; // imagem do piupiu
  piu.className = "piu";
  piu.style.left = Math.random() * 100 + "vw";
  piu.style.animationDuration = 3 + Math.random() * 3 + "s"; // varia o tempo de queda
  document.body.appendChild(piu);
  setTimeout(() => piu.remove(), 6000); // remove depois de cair
}, 2000);
