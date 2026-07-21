import { Slideshow } from '@theme/slideshow';

/**
 * Slideshow variant that auto-tags arbitrary direct children of its
 * <slideshow-slides> as slides — so any block (group columns, product
 * cards, etc.) can be a slide without each block needing slideshow-aware
 * markup.
 *
 * Children are wrapped in <slideshow-slide ref="slides[]"> on connect,
 * which is what the parent Slideshow class expects in its `refs.slides`.
 *
 * @extends {Slideshow}
 */
export class AutoSlideshow extends Slideshow {
  connectedCallback() {
    this.#wrapChildrenAsSlides();
    super.connectedCallback();
  }

  #wrapChildrenAsSlides() {
    const scroller = this.querySelector(':scope > slideshow-container > slideshow-slides');
    if (!scroller) return;

    const children = Array.from(scroller.children);
    // Non-rendering elements (inline styles from contrast-override, etc.)
    // must not become slides.
    const skippedTags = ['slideshow-slide', 'style', 'script', 'link', 'template'];
    let index = 0;
    children.forEach((child) => {
      if (skippedTags.includes(child.tagName.toLowerCase())) return;

      const slide = document.createElement('slideshow-slide');
      slide.setAttribute('ref', 'slides[]');
      slide.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
      slide.setAttribute('slide-id', `auto-slide-${index}`);
      slide.style.setProperty('--slideshow-timeline', `--slide-${index}`);

      child.replaceWith(slide);
      slide.appendChild(child);
      index += 1;
    });
  }
}

if (!customElements.get('slideshow-auto-component')) {
  customElements.define('slideshow-auto-component', AutoSlideshow);
}
