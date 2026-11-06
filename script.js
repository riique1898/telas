const views = [...document.querySelectorAll('.view')];
const navItems = [...document.querySelectorAll('.nav-item[data-view]')];
const toast = document.querySelector('#toast');
const authForm = document.querySelector('#login-form');
const authTitle = document.querySelector('#auth-title');
const authSubtitle = document.querySelector('#auth-subtitle');
const authPrompt = document.querySelector('#auth-prompt');
const authToggle = document.querySelector('#auth-toggle');
const authSubmit = document.querySelector('#auth-submit');
const nameField = document.querySelector('#name-field');
const passwordInput = authForm.querySelector('input[type="password"]');
let isSignup = false;

function showView(id) {
  views.forEach(view => { view.hidden = view.id !== id; });
  navItems.forEach(item => item.classList.toggle('active', item.dataset.view === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('click', event => {
  const target = event.target.closest('[data-view]');
  if (target) showView(target.dataset.view);
});

authToggle.addEventListener('click', () => {
  isSignup = !isSignup;
  nameField.hidden = !isSignup;
  nameField.style.display = isSignup ? '' : 'none';
  nameField.querySelector('input').required = isSignup;
  passwordInput.autocomplete = isSignup ? 'new-password' : 'current-password';
  authTitle.textContent = isSignup ? 'Crie sua conta' : 'Vamos começar?';
  authSubtitle.textContent = isSignup
    ? 'Organize sua rotina de estudos em poucos passos.'
    : 'Entre para acessar sua rotina e continuar de onde parou.';
  authPrompt.textContent = isSignup ? 'Já tem uma conta?' : 'Ainda não tem uma conta?';
  authToggle.textContent = isSignup ? 'Entrar' : 'Criar conta';
  authSubmit.firstChild.textContent = isSignup ? 'Cadastrar ' : 'Entrar ';
  authForm.reset();
});

authForm.addEventListener('submit', event => {
  event.preventDefault();
  showView('home');
  toast.textContent = isSignup
    ? 'Demonstração: cadastro concluído ✦'
    : 'Demonstração: acesso liberado ✦';
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2600);
});

document.querySelectorAll('.toggle-row input').forEach(toggle => {
  toggle.addEventListener('change', () => {
    toast.textContent = toggle.checked ? 'Preferência ativada ✦' : 'Preferência desativada';
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 1800);
  });
});
