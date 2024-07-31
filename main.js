function setupAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  function toggleFaq(e) {
    console.log(e.currentTarget);
    e.currentTarget.classList.toggle('open');
  }

  faqItems.forEach((item) => {
    item.addEventListener('click', toggleFaq);
  });
}

window.addEventListener('DOMContentLoaded', setupAccordion);
