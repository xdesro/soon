import Highway from '@dogstudio/highway';
import gsap from 'gsap';
import TopNav from './transition.nav';

const navManager = new TopNav();
// Fade
class Fade extends Highway.Transition {
  in({ from, to, done }) {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    from.remove();
    to.parentElement.parentElement.querySelector('.bottom-nav') &&
      to.parentElement.parentElement
        .querySelector('.bottom-nav')
        .classList.remove('bottom-nav--hidden');

    [...document.querySelectorAll('[reveal]')].forEach(el =>
      el.removeAttribute('reveal')
    );

    navManager.setActiveLink();
    navManager.setNavText('home');

    gsap.from(to, { duration: 0.3, opacity: 0, onComplete: done });
  }

  out({ from, done }) {
    gsap.to(from, { opacity: 0, duration: 0.3, onComplete: done });
  }
}

export default Fade;
