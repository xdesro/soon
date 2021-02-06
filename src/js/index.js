console.log('test');
const toggleDarkMode = ({ key }) => {
  if (key == 'd') document.documentElement.toggleAttribute('dark');
};
const updateMousePosition = ({ clientX, clientY }) => {
  document.documentElement.style.setProperty('--mouseX', `${clientX}px`);
  document.documentElement.style.setProperty('--mouseY', `${clientY}px`);
};

document.addEventListener('keypress', (e) => {
  toggleDarkMode(e);
});
document.addEventListener('mousemove', (e) => {
  updateMousePosition(e);
});
