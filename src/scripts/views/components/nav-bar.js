class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <nav class="bg-gradient-to-r from-primary to-secondary w-full fixed z-50">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between shadow-none mx-auto p-4">
                <a href="#" class="flex items-center">
                    <img class="h-8 mr-3" src="./gizi-plus-logo/png/gizi-plus-low-resolution-logo-white-on-transparent-background.png" alt="">
                </a>
                <button id="hamburgerMenu" data-collapse-toggle="navigationDrawer" type="button"
                    class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-fourth focus:outline-none focus:ring-2 focus:ring-white"
                    aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto"  id="navigationDrawer">
                    <ul
                        class="font-medium gap-2 flex text-center flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:gap-4">
                        <li>
                            <a href="/"
                                class="relative text-white transition-all w-min-content before:w-0 before:h-1/6 before:rounded-lg before:absolute before:-bottom-1 before:right-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-white">Beranda</a>
                        </li>
                        <li>
                            <a href="#/test"
                                class="relative text-white transition-all w-min-content before:w-0 before:rounded-lg before:h-1/6 before:absolute before:-bottom-1 before:right-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-white">Tes Gizi</a>
                        </li>
                        <li>
                            <a href="#/article"
                                class="relative text-white transition-all w-min-content before:w-0 before:rounded-lg before:h-1/6 before:absolute before:-bottom-1 before:right-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-white">Artikel</a>
                        </li>
                        <li>
                            <a href="#/forum"
                                class="relative text-white transition-all w-min-content before:w-0 before:rounded-lg before:h-1/6 before:absolute before:-bottom-1 before:right-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-white">Forum</a>
                        </li>
                        <li>
                            <a href="#/about"
                                class="relative text-white transition-all w-min-content before:w-0 before:rounded-lg before:h-1/6 before:absolute before:-bottom-1 before:right-0 before:bg-white before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-white">Tentang Kami</a>
                        </li>
                        <li>
                            <a href="#/login"
                                class="bg-white text-fourth py-1 px-5 rounded-md hover:bg-gray-200">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;
  }
}

customElements.define('nav-bar', NavBar);
