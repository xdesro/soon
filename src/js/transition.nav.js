class TopNav {
  constructor() {
    this.DOM = {
      nav: document.querySelector('.top-nav'),
      brand: document.querySelector('.top-nav__brand'),
      brandExtension: document.querySelector('.top-nav__brand-extension'),
      links: [...document.querySelectorAll('.top-nav__link')]
    };
    this.links = {
      home: '.top-nav__brand',
      work: '.top-nav__link[href="/work"]',
      writing: '.top-nav__link[href="/writing"]'
    };
    this.navText = {
      home: '(you are already here)',
      elsewhere: '(go home)'
    };
  }
  setActiveLink(location) {
    const linkActiveClass = 'top-nav__link--active';
    const activeLink = this.links[location];
    this.DOM.links.forEach(link => link.classList.remove(linkActiveClass));
    if (activeLink)
      this.DOM.nav.querySelector(activeLink).classList.add(linkActiveClass);
  }
  setNavText(location) {
    switch (location) {
      case 'home':
        this.DOM.brandExtension.textContent = this.navText['home'];
        break;
      default:
        this.DOM.brandExtension.textContent = this.navText['elsewhere'];
    }
  }
}
export default TopNav;
