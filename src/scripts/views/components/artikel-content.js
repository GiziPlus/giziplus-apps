class ArtikelContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
<div class="flex flex-wrap justify-center mx-auto text-black py-6 max-w-lg md:text-lg md:pt-24">
<h1 class="text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:text-4xl">
Daftar Artikel</h1>
              `;
  }
}

customElements.define('article-content', ArtikelContent);
