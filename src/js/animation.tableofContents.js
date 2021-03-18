import gsap from 'gsap';

const TableOfContentsAnimation = tableOfContents => {
  const el = {
    listItems: tableOfContents.querySelectorAll(
      '.table-of-contents__list-item'
    ),
    links: tableOfContents.querySelectorAll('.table-of-contents__link')
  };
  const tl = gsap
    .timeline({
      defaults: { ease: 'power4.inOut' }
    })
    .fromTo(
      tableOfContents,
      {
        '--label-opacity': 0,
        '--label-position': '1rem'
      },
      {
        '--label-opacity': 1,
        '--label-position': '0',
        duration: 0.3
      }
    )
    .fromTo(
      el.listItems,
      { '--overline-scale': 0 },
      { '--overline-scale': 1, duration: 0.3, stagger: 0.2 },
      '-=.3'
    )
    .fromTo(
      el.links,
      {
        y: '1rem',
        opacity: 0
      },
      { y: 0, opacity: 1, duration: 0.3, stagger: 0.2 },
      '-=.2'
    );
  return tl;
};

export default TableOfContentsAnimation;
