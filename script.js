document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

function toggleMenu() {
    document.querySelector("nav").classList.toggle("menu-open");
};


// Animação suave ao clicar em links internos
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.querySelector(link.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});


