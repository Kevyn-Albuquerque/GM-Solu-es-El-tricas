document.addEventListener("DOMContentLoaded", function () {
    // Captura o formulário e adiciona o evento de envio
    const form = document.getElementById('formContato');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }

    // Alternar menu ao clicar no botão hamburguer
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            nav.classList.toggle("menu-open");
        });
    }

    // Fechar o menu ao clicar em um item da lista
    const menuItems = document.querySelectorAll("nav ul li a");
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            if (nav.classList.contains("menu-open")) {
                nav.classList.remove("menu-open");
            }
        });
    });

    // Animação suave ao clicar em links internos
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
