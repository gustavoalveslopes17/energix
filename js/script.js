// Alternância de modo alto contraste
const toggleContrastBtn = document.createElement('button');
toggleContrastBtn.textContent = 'Alto Contraste';
toggleContrastBtn.setAttribute('aria-label', 'Ativar modo alto contraste');
toggleContrastBtn.style.position = 'fixed';
toggleContrastBtn.style.bottom = '20px';
toggleContrastBtn.style.right = '20px';
toggleContrastBtn.style.padding = '10px';
toggleContrastBtn.style.zIndex = '1000';
document.body.appendChild(toggleContrastBtn);

let highContrast = false;

toggleContrastBtn.addEventListener('click', () => {
  highContrast = !highContrast;
  document.body.classList.toggle('high-contrast', highContrast);
});

// Navegação por teclado: foco visível
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
});

// Feedback de envio de formulário
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    form.reset();
  });
}
