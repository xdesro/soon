Splitting();

const DOM = {
  spotifyWidget: document.querySelector('.spotify-widget'),
  caseStudies: {
    get chars() {
      return [...document.querySelectorAll('.case-study-list-item__title')];
    }
  }
};
const handleInitialLoad = (e) => {
  if (localStorage.getItem('darkMode') == 'true') {
    document.documentElement.setAttribute('dark', true);
  }
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
