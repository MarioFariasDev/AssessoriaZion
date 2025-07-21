// script.js

// Inicializa animações AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true,
});

// Botão de voltar ao topo
const btnTopo = document.createElement('button');
btnTopo.innerText = '⬆';
btnTopo.id = 'voltar-topo';
btnTopo.style.position = 'fixed';
btnTopo.style.bottom = '30px';
btnTopo.style.right = '30px';
btnTopo.style.padding = '10px 15px';
btnTopo.style.borderRadius = '50%';
btnTopo.style.border = 'none';
btnTopo.style.background = '#17697E';
btnTopo.style.color = 'white';
btnTopo.style.cursor = 'pointer';
btnTopo.style.display = 'none';
btnTopo.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
document.body.appendChild(btnTopo);

btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    btnTopo.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// Validação básica de formulário (exemplo: Avalie Meu Perfil)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        const nome = form.querySelector('[name="nome"]');
        const email = form.querySelector('[name="email"]');
        if (!nome.value.trim() || !email.value.trim()) {
            e.preventDefault();
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
}

// Futuras microinterações (hover em botões, cards etc)
document.querySelectorAll('button, a.card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.05)';
        el.style.transition = 'transform 0.3s';
    });
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
    });
});
