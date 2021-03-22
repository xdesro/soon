import Highway from '@dogstudio/highway';
import gsap from 'gsap';

import CaseStudyListItemAnimation from './animation.caseStudyListItem';

const ease = 'power4.inOut';
class WorkListTransition extends Highway.Transition {
  in({ from, to, done }) {
    window.scrollTo(0, 0);

    from.remove();
    Splitting();
    const caseStudies = to.querySelectorAll('.case-study-list-item');
    const caseStudiesReveal = gsap.timeline({ ease });

    document
      .querySelectorAll('.top-nav__link')
      .forEach(navLink => navLink.classList.remove('top-nav__link--active'));
    document
      .querySelector('.top-nav__link[href="/work"]')
      .classList.add('top-nav__link--active');

    gsap.from('.page-title .char', {
      y: '100%',
      clipPath: 'polygon(0 100%, 140% 100%, 140% 100%, 0 100%)',
      stagger: {
        each: 0.05
      },
      opacity: 0,
      duration: 1.4,
      ease,
      onComplete: done
    });
    caseStudies.forEach(caseStudy => {
      caseStudiesReveal.add(CaseStudyListItemAnimation(caseStudy), '-=.7');
    });
    caseStudiesReveal.seek(0);
    caseStudiesReveal.play();
  }
  out({ from, done }) {
    gsap.to('.page-title .char', {
      y: '-100%',
      clipPath: 'polygon(0 100%, 140% 100%, 140% 100%, 0 100%)',
      stagger: {
        each: 0.1
      },
      opacity: 0,
      duration: 1.2,
      ease,
      onComplete: done
    });
    gsap.to('.case-study-list-item', {
      opacity: 0,
      y: '30%',
      delay: 0.5,
      ease,
      duration: 0.3,
      stagger: {
        each: 0.1,
        from: 'start'
      },
      onComplete: done
    });
  }
}
export default WorkListTransition;
