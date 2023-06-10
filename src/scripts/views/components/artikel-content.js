class ArtikelContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="lg:px-32 md:px-16 mt-2 flex flex-col items-center">
    <div class="grid md:grid-cols-2 mb-6 max-w-full bg-white">
        <a href="#">
            <img class="object-cover max-h-56 w-3/4 mx-auto sm:min-w-[300px]" src="./gizi-plus-logo/png/logo-white.png" alt="" />
        </a>
        <div class="px-6">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Judul Artikel</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium accusamus consequuntur accusantium soluta, enim dolorum, eveniet sit provident aliquid unde laborum eos nisi explicabo iste hic. Autem, assumenda provident!</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fourth rounded-lg hover:bg-third focus:ring-4 focus:outline-none focus:ring-blue-300">
                Lanjut Baca
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</div>

    <div>
        <h1 class="py-6 text-2xl font-extrabold text-center">Daftar Artikel</h1>
    </div>
              `;
  }
}

customElements.define('article-content', ArtikelContent);
