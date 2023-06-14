class AppArtikel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="min-h-screen pt-16">
    <div class="flex flex-wrap justify-center mx-auto text-black py-6 max-w-lg md:text-lg md:pt-24">
    <h1 class="text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:text-4xl">
    Artikel Terbaru</h1>
    </div>

    <div id="artikel"></div>

    <div id="article" class="lg:px-32 px-6 mt-2 mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 md:pb-24">
    
    </div>
</section>
              `;
  }
}

customElements.define('app-artikel', AppArtikel);
