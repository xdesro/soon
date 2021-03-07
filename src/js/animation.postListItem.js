import gsap from 'gsap';

const PostListItemAnimation = postListItem => {
  const el = {
    article: postListItem.querySelector('.writing-list-item__article'),
    category: postListItem.querySelector('.writing-list-item__category'),
    title: postListItem.querySelector('.writing-list-item__title'),
    tags: postListItem.querySelectorAll('.writing-list-item__tags li'),
    date: postListItem.querySelector('.writing-list-item__date'),
    link: postListItem.querySelector('.writing-list-item__link')
  };
  const tl = gsap
    .timeline({
      defaults: { ease: 'power4.inOut' }
    })
    .fromTo(
      postListItem,
      { '--underline-scale': 0 },
      { '--underline-scale': 1, duration: 0.3 }
    )
    .fromTo(el.article, { opacity: 0 }, { opacity: 1, duration: 0.3 }, '-=.2');
  return tl;
};

export default PostListItemAnimation;
