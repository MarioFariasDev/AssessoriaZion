// ======= INICIALIZAÇÃO AOS (Animações de scroll) =======
AOS.init({
    duration: 1000,
    once: true,
});

// ======= BOTÃO VOLTAR AO TOPO =======
const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ======= ENVIO DO FORMULÁRIO COM EMAILJS =======
const form = document.getElementById("form-contato");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Validação básica (pode ser expandida)
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Envio via EmailJS
    let emailjs;
    emailjs.send("service_c92h247", "_ejs-test-email-service_", {
        from_name: nome,
        from_email: email,
        message: mensagem
    }, "Ej9ynU6yPirYA8duf")
        .then(() => {
            alert("Mensagem enviada com sucesso! 🚀");
            form.reset();
        })
        .catch((error) => {
            console.error("Erro ao enviar:", error);
            alert("Houve um erro ao enviar a mensagem. Tente novamente mais tarde.");
        });
});

// ======= RESERVADO: FUTURAS MICROINTERAÇÕES =======
// Exemplo: feedback visual nos botões, notificações dinâmicas, etc.
// Você pode adicionar classes CSS aqui e ativar elementos conforme necessário.
