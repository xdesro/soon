import Highway from '@dogstudio/highway';
import gsap from 'gsap';
import TopNav from './transition.nav';

import TableOfContentsAnimation from './animation.tableofContents';

const navManager = new TopNav();
class PostTransition extends Highway.Transition {
  in({ from, to, done }) {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

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
    navManager.setActiveLink('writing');
    navManager.setNavText();

    gsap
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
      .from(
        '.post__intro + .rendered',
        {
          opacity: 0,
          duration: 0.8
        },
        '-=.5'
      );
  }
  out({ from, done }) {
    gsap.to(from, { opacity: 0, duration: 0.3, onComplete: done });
  }
}
export default PostTransition;
