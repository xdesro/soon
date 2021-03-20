import Highway from '@dogstudio/highway';
import gsap from 'gsap';

import Drifter from './drifter';

import TableOfContentsAnimation from './animation.tableofContents';

class ProjectTransition extends Highway.Transition {
  in({ from, to, done }) {
    from.remove();
    const results = Splitting({ target: '.project__title', by: 'lines' });
    to.querySelector('.project__title').innerHTML = results[0].lines
      .map(
        line => `
    <span class="line">
        ${line.map(word => word.outerHTML).join(' ')}
    </span>`
      )
      .join('');

    document
      .querySelectorAll('.top-nav__link')
      .forEach(navLink => navLink.classList.remove('top-nav__link--active'));
    document
      .querySelector('.top-nav__link[href="/work"]')
      .classList.add('top-nav__link--active');

    gsap
      .timeline({
        defaults: { ease: 'power4.inOut' },
        onComplete: done
      })
      .fromTo(
        '.project__featured-image-wrapper',
        {
          clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
          opacity: 0
        },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          opacity: 1,
          duration: 1
        }
      )
      .from(
        '.project__featured-image',
        {
          scale: 1.2,
          duration: 1,
          clearProps: 'all'
        },
        '<'
      )
      .from(
        '.project__title .line',
        {
          clipPath: 'polygon(0 0%, 100% 0%, 100% 0%, 0 0%)',
          opacity: 0,
          y: '40%',
          duration: 1,
          stagger: 0.1
        },
        '-=.7'
      )
      .from(
        '.project__meta > *',
        {
          opacity: 0,
          y: '.5em',
          duration: 0.3,
          stagger: 0.02
        },
        '-=.5'
      )
      .from(
        '.project__live-link',
        {
          opacity: 0,
          y: '.5em',
          duration: 0.3
        },
        '-=.3'
      )
      .fromTo(
        '.project__intro',
        {
          '--underline-scale': 0
        },
        {
          '--underline-scale': 1,
          duration: 1
        },
        '-=1'
      )
      .add(
        TableOfContentsAnimation(to.querySelector('.table-of-contents')),
        '-=1'
      )
      .from('.project__excerpt', { y: '1em', opacity: 0, duration: 0.4 }, '<')
      .from(
        '.project__intro + .rendered',
        {
          opacity: 0,
          duration: 0.8
        },
        '-=.5'
      );

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
  }
  out({ from, done }) {
    gsap.to(from, { opacity: 0, duration: 0.3, onComplete: done });
  }
}
export default ProjectTransition;
