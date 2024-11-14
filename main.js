// Abre y cierra las respuestas de las preguntas frecuentes
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

  // Muestrar y oculta el menú en pantallas pequeñas
  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }