const handleInitialLoad = (e) => {
  if (localStorage.getItem('darkMode') == 'true') {
    document.documentElement.setAttribute('dark', true);
  }
  fetch('/functions/spotify')
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const toggleDarkMode = ({ key }) => {
  if (key == 'd') document.documentElement.toggleAttribute('dark');
  localStorage.setItem(
    'darkMode',
    document.documentElement.hasAttribute('dark')
  );
};
const updateMousePosition = ({ clientX, clientY }) => {
  document.documentElement.style.setProperty('--mouseX', `${clientX}px`);
  document.documentElement.style.setProperty('--mouseY', `${clientY}px`);
};

document.addEventListener('DOMContentLoaded', (e) => {
  handleInitialLoad(e);
});

document.addEventListener('keypress', (e) => {
  toggleDarkMode(e);
});
document.addEventListener('mousemove', (e) => {
  updateMousePosition(e);
});
