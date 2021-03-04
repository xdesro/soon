import Highway from '@dogstudio/highway';
import gsap from 'gsap';

class WritingListTransition extends Highway.Transition {
  in({ from, to, done }) {
    console.log('going to work page!');
    from.remove();
    Splitting();
    document
      .querySelectorAll('.top-nav__link')
      .forEach((navLink) => navLink.classList.remove('top-nav__link--active'));
    document
      .querySelector('.top-nav__link[href="/writing"]')
      .classList.add('top-nav__link--active');
    gsap.from('.page-title .char', {
      // x: to.offsetWidth,
      y: '100%',
      clipPath: 'polygon(0 0%, 140% 0%, 140% 0%, 0 0%)',
      stagger: {
        each: 0.1
      },
      opacity: 0,
      duration: 1,
      ease: 'power4.inOut'
    });
    gsap.from('.writing-list-item', {
      opacity: 0,
      y: '30%',
      delay: 0.3,
      ease: 'power4.inOut',
      duration: 0.3,
      stagger: {
        each: 0.1,
        from: 'start'
      },
      onComplete: done
    });
  }
  out({ from, done }) {
    gsap.to('.page-title .char', {
      // x: to.offsetWidth,
      y: '-100%',
      clipPath: 'polygon(0 100%, 140% 100%, 140% 100%, 0 100%)',
      stagger: {
        each: 0.05
      },
      opacity: 0,
      duration: 1,
      ease: 'power4.inOut',
      onComplete: done
    });
    gsap.to('.writing-list-item', {
      opacity: 0,
      y: '30%',
      delay: 0.3,
      ease: 'power4.inOut',
      duration: 0.3,
      stagger: {
        each: 0.1,
        from: 'start'
      }
    });
  }
}
export default WritingListTransition;
