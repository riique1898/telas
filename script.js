const views = [...document.querySelectorAll('.view')];
const navItems = [...document.querySelectorAll('.nav-item[data-view]')];
const toast = document.querySelector('#toast');

function showView(id) {
  views.forEach(view => { view.hidden = view.id !== id; });
  navItems.forEach(item => item.classList.toggle('active', item.dataset.view === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('click', event => {
  const target = event.target.closest('[data-view]');
  if (target) showView(target.dataset.view);
});

document.querySelector('#login-form').addEventListener('submit', event => {
  event.preventDefault();
  showView('home');
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
