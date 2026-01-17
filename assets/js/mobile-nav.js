document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.masthead-mobile__toggle');
  const drawer = document.querySelector('#mobile-drawer');
  const backdrop = document.querySelector('.mobile-backdrop');

  if (!toggle || !drawer) return;

  function closeMenu() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    const isOpen = drawer.classList.toggle('open');
    backdrop.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  backdrop.addEventListener('click', closeMenu);
});
