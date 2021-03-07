import gsap from 'gsap';

const CaseStudyListItemAnimation = caseStudy => {
  const el = {
    titleChars: caseStudy.querySelectorAll(
      '.case-study-list-item__title .char'
    ),
    article: caseStudy.querySelector('.case-study-list-item__article'),
    meta: caseStudy.querySelectorAll('.case-study-list-item__meta *')
  };
  const tl = gsap
    .timeline({
      defaults: { ease: 'power4.inOut' }
    })
    .fromTo(
      caseStudy,
      { '--underline-scale': 0 },
      { '--underline-scale': 1, duration: 0.3 }
    )
    .fromTo(
      el.article,
      { '--counter-opacity': 0, '--counter-y': '-10px' },
      {
        '--counter-opacity': 1,
        '--counter-y': 0,
        duration: 0.2,
        position: '-.3'
      },
      '-=.3'
    )
    .fromTo(
      el.titleChars,
      { y: '-20%', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.02
      }
    )
    .fromTo(
      el.meta,
      { y: '100%', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.05
      },
      '-=.5'
    );
  return tl;
};
export default CaseStudyListItemAnimation;
