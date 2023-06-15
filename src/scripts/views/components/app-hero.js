class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- Jumbotron -->
    <section id="indicators-carousel" class="relative w-full bg-gradient-to-r from-primary to-secondary"
    data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative overflow-hidden">
        <!-- Item 1 -->
        <div class="relative hidden duration-1000 ease-in-out" data-carousel-item="active">
            <div
                class="flex flex-wrap flex-row-reverse justify-center items-center pt-16 px-6 lg:pt-28 gap-10 lg:gap-16">
                <img class="w-3/4 md:w-1/2 lg:w-1/4" src="./health-professional-team-animate.svg" alt="Jumbotron 1"
                    width="400">
                <div class="text-white max-w-lg">
                    <p class="text-sm leading-relaxed lg:text-xl">Selamat datang di, <span
                            class="block text-3xl font-extrabold lg:text-4xl">GiziPlus</span> Lebih Lebih dari
                        sekedar aplikasi
                        gizi, ini adalah gaya hidup sehat anda. Temukan berbagai macam artikel mengenai
                        kebutuhan
                        gizi anda dan temukan juga tes untuk mengetahui kebutuhan kadar gizi anda hanya di
                        GiziPlus.</p>
                    <button type="button"
                        class="py-2.5 px-5 mt-4 mb-2 text-lg font-medium text-white focus:outline-none bg-fourth rounded-full hover:bg-third focus:z-10 focus:ring-4 focus:ring-white"><a href="#layanan">Selengkapnya</a></button>
                </div>
            </div>
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
            <div
                class="flex flex-wrap flex-row justify-center items-center pt-16 px-6 lg:pt-28 gap-10 lg:gap-16">
                <img class="w-3/4 md:w-1/2 lg:w-1/4" src="./health-professional-team-animate.svg" alt="Jumbotron 2"
                    width="400">
                <div class="text-white max-w-lg">
                    <h1 class="text-3xl font-extrabold lg:text-4xl">Ayo Kita Jaga Kesehatan Kita Bersama</h1>
                    <p class="text-sm leading-relaxed lg:text-xl">Rasakan manfaatnya dan raih gaya hidup sehat
                        yang lebih baik. Bergabunglah dengan kami sekarang dan nikmati manfaat gizi
                        yang lengkap dan berkualitas tinggi dari GiziPlus.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 -bottom-4 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
            data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
            data-carousel-slide-to="1"></button>
    </div>

</section>
<svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stop-color="#5b86e5"></stop>
                    <stop offset="100%" stop-color="#36d1dc"></stop>
                </linearGradient>
            </defs>
            <path
                d="M 0,400 C 0,400 0,200 0,200 C 51.00570692194404,182.58928571428572 102.01141384388808,165.17857142857142 165,151 C 227.98858615611192,136.82142857142858 302.96005154639175,125.87500000000003 361,155 C 419.03994845360825,184.12499999999997 460.14837997054497,253.3214285714285 515,272 C 569.851620029455,290.6785714285715 638.4464285714286,258.8392857142857 713,226 C 787.5535714285714,193.16071428571428 868.0659057437407,159.32142857142858 933,177 C 997.9340942562593,194.67857142857142 1047.2899484536083,263.875 1106,258 C 1164.7100515463917,252.125 1232.7743004418262,171.17857142857144 1290,149 C 1347.2256995581738,126.82142857142856 1393.612849779087,163.41071428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
                stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1"
                class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)">
            </path>
        </svg>
          `;
  }
}

customElements.define('app-hero', AppHero);
