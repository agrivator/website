const btn = document.querySelector('button.nav-menu-button');
const menu = document.querySelector('.nav-menu');

btn.addEventListener('click', () => {
  const isMenuOpen = menu.clientHeight === 0;
  if (isMenuOpen) {
    menu.style.height = menu.scrollHeight + 'px';
  } else {
    menu.style.height = '0';
  }
});
