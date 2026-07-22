/**
 * Preset price bands for the collection filter sidebar.
 *
 * Shopify's price facet is a single numeric range (filter.v.price.gte / .lte), so only
 * one band can be active at a time — hence radios rather than the checkboxes the
 * multi-select list facets use.
 *
 * The radios are presentation only: they are not named after the facet params and so are
 * never serialised. On change we copy the chosen band's bounds into the two hidden
 * gte/lte inputs (the ones the facets form does serialise) and ask the form to refresh.
 */
class PriceBandsComponent extends HTMLElement {
  connectedCallback() {
    this.addEventListener('change', this.#onChange);
  }

  disconnectedCallback() {
    this.removeEventListener('change', this.#onChange);
  }

  #onChange = (event) => {
    const radio = event.target;
    if (!(radio instanceof HTMLInputElement) || radio.type !== 'radio') return;

    this.#apply(radio.dataset.gte, radio.dataset.lte);

    // Same entry point the stock checkbox facets use.
    const form = this.closest('facets-form-component');
    if (form && typeof form.updateFilters === 'function') form.updateFilters();
  };

  /**
   * An empty bound means "unbounded on that side" — the input is disabled so the form
   * omits it entirely rather than submitting an empty value.
   * @param {string | undefined} gte
   * @param {string | undefined} lte
   */
  #apply(gte, lte) {
    this.#set(this.querySelector('input[data-price-gte]'), gte);
    this.#set(this.querySelector('input[data-price-lte]'), lte);
  }

  /**
   * @param {Element | null} input
   * @param {string | undefined} value
   */
  #set(input, value) {
    if (!(input instanceof HTMLInputElement)) return;
    const next = value ?? '';
    input.value = next;
    input.disabled = next === '';
  }
}

if (!customElements.get('price-bands-component')) {
  customElements.define('price-bands-component', PriceBandsComponent);
}
