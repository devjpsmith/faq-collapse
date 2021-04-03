const buttons = document.querySelectorAll('button.faq-toggle');


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('active');
    })
});