class AppArtikel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="min-h-screen pt-16">
    <div>
        <h1 class="py-6 text-2xl font-extrabold text-center">Artikel Terbaru</h1>
    </div>

    <div id="artikel"></div>  
</section>
              `;
  }
}

customElements.define('app-artikel', AppArtikel);
