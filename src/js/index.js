import gsap from 'gsap';
import Highway from '@dogstudio/highway';

import SessionManager from './sessionManager';
import Drifter from './drifter';

import Fade from './transition.fade';
import WorkListTransition from './transition.work';
import WritingListTransition from './transition.writing';
import PostTransition from './transition.post';
import ProjectTransition from './transition.project';

import CaseStudyListItemAnimation from './animation.caseStudyListItem';

const sessionManager = new SessionManager();

const H = new Highway.Core({
  transitions: {
    default: Fade,
    'work-list-page': WorkListTransition,
    'writing-list-page': WritingListTransition,
    post: PostTransition,
    project: ProjectTransition
  }
});
H.on('NAVIGATE_END', ({ to, from, trigger, location }) => {
  sessionManager.mount();
});
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

const revealHandler = (entries, observer) => {
  entries.forEach(entry => {
    let anim = false;
    if (
      entry.target.classList.contains('case-study-list-item') &&
      entry.target.hasAttribute('reveal')
    ) {
      anim = CaseStudyListItemAnimation(entry.target);
      anim.pause();
      anim.eventCallback('onComplete', anim.kill);
    }
    if (entry.isIntersecting && entry.target.hasAttribute('reveal')) {
      anim && anim.play();
      entry.target.removeAttribute('reveal');
    }
  });
};

const revealObserver = new IntersectionObserver(revealHandler, {
  rootMargin: `0px 0px -200px 0px`
});
[...document.querySelectorAll('[reveal]')].forEach(el =>
  revealObserver.observe(el)
);

const handleInitialLoad = e => {
  // Drifter setup
  const items = [...document.querySelectorAll('[drifter]')].map(
    item => new Drifter(item)
  );
  const animate = () => {
    for (const item of items) {
      if (item.isVisible) {
        item.render();
      }
    }
    requestAnimationFrame(() => animate());
  };

  animate();
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
const setDOMThemeFromStorage = () => {
  localStorage.setItem(
    'darkMode',
    document.documentElement.hasAttribute('dark')
  );
};
const toggleDarkMode = ({ key }) => {
  if (key && key == 'd') document.documentElement.toggleAttribute('dark');
  setDOMThemeFromStorage();
};
const updateMousePosition = ({ clientX, clientY }) => {
  document.documentElement.style.setProperty('--mouseX', `${clientX}px`);
  document.documentElement.style.setProperty('--mouseY', `${clientY}px`);
};

document.addEventListener('DOMContentLoaded', e => {
  handleInitialLoad(e);
});
document.addEventListener('keypress', e => {
  toggleDarkMode(e);
});
document.addEventListener('mousemove', e => {
  updateMousePosition(e);
});
DOM.themeToggle.addEventListener('click', e => {
  document.documentElement.toggleAttribute('dark');
  setDOMThemeFromStorage();
});
