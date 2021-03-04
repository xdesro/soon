import Highway from '@dogstudio/highway';
import gsap from 'gsap';

// Fade
class Fade extends Highway.Transition {
  in({ from, to, done }) {
    window.scrollTo(0, 0);

    from.remove();
    [...document.querySelectorAll('[reveal]')].forEach((el) =>
      el.removeAttribute('reveal')
    );
    gsap.from(to, { duration: 0.3, opacity: 0, onComplete: done });
  }

  out({ from, done }) {
    gsap.to(from, { opacity: 0, duration: 0.3, onComplete: done });
  }
}

export default Fade;
