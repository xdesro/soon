let visited = [];
if (sessionStorage.getItem('visited')) {
  visited = JSON.parse(sessionStorage.getItem('visited'));
  if (visited.indexOf(window.location.pathname) > -1) {
    const transitioningElements = [...document.querySelectorAll('[reveal]')];
    transitioningElements.forEach((el) => el.removeAttribute('reveal'));
  } else {
    visited.push(window.location.pathname);
  }
} else {
  visited = [window.location.pathname];
}
sessionStorage.setItem('visited', JSON.stringify(visited));

Splitting();

const DOM = {
  themeToggle: document.querySelector('.theme-toggle'),
  spotifyWidget: document.querySelector('.spotify-widget'),
  caseStudies: {
    get chars() {
      return [...document.querySelectorAll('.case-study-list-item__title')];
    }
  }
};
if (localStorage.getItem('darkMode') == 'true') {
  document.documentElement.setAttribute('dark', true);
}
const revealHandler = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.removeAttribute('reveal');
    }
  });
};

const revealObserver = new IntersectionObserver(revealHandler, {
  rootMargin: `0px 0px -200px 0px`
});
[...document.querySelectorAll('[reveal]')].forEach((el) =>
  revealObserver.observe(el)
);

const handleInitialLoad = (e) => {
  DOM.themeToggle.textContent = document.documentElement.hasAttribute('dark')
    ? `☀️`
    : `🌙`;
  // fetch('/.netlify/functions/spotify')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const track = spotifyWidget.querySelector('.spotify-widget__track');
  //     const artists = spotifyWidget.querySelector('.spotify-widget__artists');

  //     track.setAttribute('href', data.url);
  //     track.textContent = data.name;
  //     const artistTemplate = (artist) =>
  //       `<a href="${artist.url}">${artist.name}</a>`;
  //     artists.innerHTML = `${data.artists
  //       .map((artist) => artistTemplate(artist))
  //       .join(', ')}`;
  //   }).catch()
};
const toggleDarkMode = ({ key }) => {
  if (key && key == 'd') document.documentElement.toggleAttribute('dark');
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
DOM.themeToggle.addEventListener('click', (e) => {
  document.documentElement.toggleAttribute('dark');
  localStorage.setItem(
    'darkMode',
    document.documentElement.hasAttribute('dark')
  );
  DOM.themeToggle.textContent = document.documentElement.hasAttribute('dark')
    ? `☀️`
    : `🌙`;
});
