class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div class="col-span-2 md:col-span-2">
                <h2 class="mb-6 text-sm font-semibold text-white uppercase">Tentang GiziPlus</h2>
                <p class="text-gray-500">GiziPlus merupakan platform digital kesehatan yang didedikasikan untuk memantau dan menjaga keseimbangan masyarakat.</p>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase">Navigasi</h2>
                <ul class="text-gray-500 font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:text-white">Beranda</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:text-white">Tes Gizi</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:text-white">Artikel</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:text-white">Forum</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:text-white">Tentang Kami</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase">Kontak Kami</h2>
                <ul class="text-gray-500 font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:text-white">Andira</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:text-white">Anwar</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:text-white">Ilmi</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:text-white">Reynaldi</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
        `;
  }
}

customElements.define('app-footer', AppFooter);
