const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

function toggleMenu() {
    navMenu.classList.toggle('active');
}

burger.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !burger.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const offset = 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[placeholder="Ваше имя"]').value.trim();
    const email = form.querySelector('input[placeholder="Email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();
    if (!name || !email || !message) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        alert('Введите корректный email.');
        return;
    }
    alert('Спасибо! Сообщение отправлено (демо).');
    form.reset();
});
