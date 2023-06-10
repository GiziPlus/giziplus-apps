class AppTim extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="flex flex-wrap justify-center px-6 w-full gap-4 bg-gray-100">
                <div class="flex justify-center text-center flex-col p-4">
                    <h3
                        class="text-xl font-bold after:block after:content-[''] after:mt-4 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125">
                        Tim Kami</h3>
                </div>
            </div>
            <div id="default-carousel" class="relative bg-gray-100" data-carousel="slide">
                <!-- Carousel wrapper -->
                <div class="relative py-40 overflow-hidden rounded-lg mx-auto md:w-3/4">
                    <!-- Item 1 -->
                    <div class="hidden duration-700 py-7 ease-in-out" data-carousel-item>
                        <div
                            class="flex flex-col p-6 shadow-lg border border-secondary-color rounded-xl w-[200px] mx-auto">
                            <img class="w-[10rem] h-[10rem] mx-auto" src="./gizi-plus-logo/png/logo-color.png"
                                alt="">
                            <div class="text-center">
                                <h2>Nama Tim</h2>
                                <p>Status</p>
                            </div>
                            <div>
                                <a href=""></a>
                            </div>
                        </div>
                    </div>
                    <!-- Item 2 -->
                    <div class="hidden duration-700 py-7 ease-in-out" data-carousel-item>
                        <div
                            class="flex flex-col p-6 shadow-lg border border-secondary-color rounded-xl w-[200px] mx-auto">
                            <img class="w-[10rem] h-[10rem]" src="./gizi-plus-logo/png/logo-color.png" alt="">
                            <div class="text-center">
                                <h2>Nama Tim</h2>
                                <p>Status</p>
                            </div>
                            <div>
                                <a href=""></a>
                            </div>
                        </div>
                    </div>
                    <!-- Item 3 -->
                    <div class="hidden duration-700 py-7 ease-in-out" data-carousel-item>
                        <div
                            class="flex flex-col p-6 shadow-lg border border-secondary-color rounded-xl w-[200px] mx-auto">
                            <img class="w-[10rem] h-[10rem]" src="./gizi-plus-logo/png/logo-color.png" alt="">
                            <div class="text-center">
                                <h2>Nama Tim</h2>
                                <p>Status</p>
                            </div>
                            <div>
                                <a href=""></a>
                            </div>
                        </div>
                    </div>
                    <!-- Item 4 -->
                    <div class="hidden duration-700 py-7 ease-in-out" data-carousel-item>
                        <div
                            class="flex flex-col p-6 shadow-lg border border-secondary-color rounded-xl w-[200px] mx-auto">
                            <img class="w-[10rem] h-[10rem]" src="./gizi-plus-logo/png/logo-color.png" alt="">
                            <div class="text-center">
                                <h2>Nama Tim</h2>
                                <p>Status</p>
                            </div>
                            <div>
                                <a href=""></a>
                            </div>
                        </div>
                    </div>
                    <!-- Slider controls -->
                    <button type="button"
                        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev>
                        <span
                            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-fourth group-hover:bg-third group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7"></path>
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button"
                        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next>
                        <span
                            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-fourth/80 group-hover:bg-fourth group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
       `;
  }
}

customElements.define('app-tim', AppTim);
