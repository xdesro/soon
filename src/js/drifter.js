import { mapRange, lerp } from './client-utils';

let windowSize;
const getWindowSize = () =>
  (windowSize = { width: window.innerWidth, height: window.innerHeight });
getWindowSize();
window.addEventListener('resize', getWindowSize);

let distanceScrolled;
const getDistanceScrolled = () =>
  (distanceScrolled = window.pageYOffset || document.documentElement.scrollTop);
getDistanceScrolled();
window.addEventListener('scroll', getDistanceScrolled);

class Drifter {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.image =
      this.DOM.el.querySelector('picture') || this.DOM.el.querySelector('img');

    this.renderedStyles = {
      innerTranslationY: {
        previous: 0,
        current: 0,
        ease: 0.1,
        maxValue: parseInt(
          getComputedStyle(this.DOM.image).getPropertyValue('--overflow'),
          10
        ),
        setValue: () => {
          const maxValue = this.renderedStyles.innerTranslationY.maxValue;
          const minValue = -1 * maxValue;
          return Math.max(
            Math.min(
              mapRange(
                this.props.top - distanceScrolled,
                windowSize.height,
                -1 * this.props.height,
                minValue,
                maxValue
              ),
              maxValue
            ),
            minValue
          );
        }
      }
    };

    this.update();
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => (this.isVisible = entry.intersectionRatio > 0));
    });
    this.observer.observe(this.DOM.el);
    this.initEvents();
  }
  update() {
    this.getSize();
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].current = this.renderedStyles[
        key
      ].previous = this.renderedStyles[key].setValue();
    }
    this.layout();
  }

  getSize() {
    const rect = this.DOM.el.getBoundingClientRect();
    this.props = {
      height: rect.height,
      top: distanceScrolled + rect.top
    };
  }
  initEvents() {
    window.addEventListener('resize', () => this.resize());
  }
  resize() {
    this.update();
  }
  render() {
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].current = this.renderedStyles[key].setValue();
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].ease
      );
    }
    this.layout();
  }
  layout() {
    this.DOM.image.parentElement.style.setProperty(
      '--drift',
      `translate3d(0,${this.renderedStyles.innerTranslationY.previous}px,0)`
    );
  }
}

export default Drifter;
