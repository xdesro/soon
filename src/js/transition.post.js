import Highway from '@dogstudio/highway';
import gsap from 'gsap';

import TableOfContentsAnimation from './animation.tableofContents';

class PostTransition extends Highway.Transition {
  in({ from, to, done }) {
    from.remove();
    const results = Splitting({ target: '.post__title', by: 'lines' });
    to.querySelector('.post__title').innerHTML = results[0].lines
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
      .querySelector('.top-nav__link[href="/writing"]')
      .classList.add('top-nav__link--active');

    const tl = gsap
      .timeline({
        defaults: { ease: 'power4.inOut' },
        onComplete: done
      })
      .from('.post__title .line', {
        clipPath: 'polygon(0 0%, 100% 0%, 100% 0%, 0 0%)',
        opacity: 0,
        y: '40%',
        duration: 1,
        stagger: 0.1
      })
      .from(
        '.post__intro .post__tags li',
        {
          opacity: 0,
          y: '.5em',
          duration: 0.2,
          stagger: 0.02
        },
        '-=.5'
      )
      .from(
        '.post__intro',
        {
          '--underline-scale': 0,
          duration: 1
        },
        '-=1'
      )
      .add(
        TableOfContentsAnimation(to.querySelector('.table-of-contents')),
        '-=1'
      )
      .fromTo(
        '.post__intro + .rendered',
        {
          opacity: 0
        },
        { opacity: 1, duration: 0.5 },
        '-=.5'
      );
  }
  out({ from, done }) {
    gsap.to(from, { opacity: 0, duration: 0.3, onComplete: done });
  }
}
export default PostTransition;
