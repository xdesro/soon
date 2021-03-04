import gsap from 'gsap';

const caseStudyListItemAnimation = (caseStudy) => {
  const caseStudyTimeline = gsap.timeline({
    defaults: { ease: 'power4.inOut' }
  });
  caseStudyTimeline.fromTo(
    caseStudy,
    { '--underline-scale': 0 },
    { '--underline-scale': 1, duration: 0.3 }
  );
  caseStudyTimeline.fromTo(
    caseStudy.querySelector('.case-study-list-item__article'),
    {
      '--counter-opacity': 0,
      '--counter-y': '-10px'
    },
    {
      '--counter-opacity': 1,
      '--counter-y': 0,
      duration: 0.2,
      position: '-.3'
    }
  );
  caseStudyTimeline.fromTo(
    caseStudy.querySelectorAll('.char'),
    {
      y: '-100%',
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
      position: '-.6',
      stagger: 0.02
    }
  );
  caseStudyTimeline.fromTo(
    caseStudy.querySelectorAll('.case-study-list-item__meta *'),
    {
      y: '100%',
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.2,
      position: '-.8',
      stagger: 0.05
    }
  );
  return caseStudyTimeline;
};
export default caseStudyListItemAnimation;
