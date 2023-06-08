const Home = {
  async render() {
    return `
    <!-- Jumbotron -->
        <section id="indicators-carousel" class="relative w-full bg-gradient-to-r from-primary to-secondary"
            data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative overflow-hidden">
                <!-- Item 1 -->
                <div class="relative hidden duration-1000 ease-in-out" data-carousel-item="active">
                    <div
                        class="flex flex-wrap flex-row-reverse justify-center items-center pt-16 px-6 lg:pt-28 gap-10 lg:gap-16">
                        <img class="w-3/4 md:w-1/2 lg:w-1/4" src="./health-professional-team-animate.svg" alt=""
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
                                class="py-2.5 px-5 mt-4 mb-2 text-lg font-medium text-white focus:outline-none bg-fourth rounded-full hover:bg-third focus:z-10 focus:ring-4 focus:ring-white">Selengkapnya</button>
                        </div>
                    </div>
                </div>
                <!-- Item 2 -->
                <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                    <div
                        class="flex flex-wrap flex-row justify-center items-center pt-16 px-6 lg:pt-28 gap-10 lg:gap-16">
                        <img class="w-3/4 md:w-1/2 lg:w-1/4" src="./health-professional-team-animate.svg" alt=""
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

        <!-- Content GiziPlus -->

        <!-- Layanan -->
        <section class="max-w-full">
            <div id="layanan" class="flex flex-wrap justify-center pb-10 px-6 mx-auto max-w-screen-xl gap-4 md:py-16">
                
            </div>
        </section>
        <!-- Tes Gizi -->
        <section class="max-w-full">
            <div class="flex flex-wrap flex-row-reverse justify-center items-center py-8 px-6 md:gap-8 md:py-24">
                <img data-aos="fade-down" class="w-3/4 md:w-1/2 lg:max-w-lg" src="./health-professional-team-animate.svg" alt="">
                <div data-aos="fade-right"
                    class="flex flex-wrap justify-center text-black py-6 max-w-lg lg:justify-normal md:text-lg md:py-0">
                    <h1 class="text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:after:scale-100 lg:text-4xl">Tes Gizi</h1>
                    <p class="text-center lg:text-left">Tes ini akan memberikan pemahaman yang lebih baik tentang kebutuhan gizi individu, membantu pengguna dalam
                    mengoptimalkan pola makan mereka, dan mencapai keseimbangan gizi yang lebih baik.</p>
                    <button type="button"
                        class="py-2.5 px-5 mt-4 mb-2 text-lg font-medium text-white focus:outline-none bg-fourth rounded-full hover:bg-third focus:z-10 focus:ring-4 focus:ring-white">Coba Sekarang</button>
                </div>
            </div>
        </section>
        <!-- Artikel -->
        <section class="max-w-full bg-gray-100">
            <div class="flex flex-wrap flex-row-reverse justify-center items-center py-8 px-6 md:gap-8 md:py-24">
                <img data-aos="fade-down" class="w-3/4 md:w-1/2 lg:max-w-lg"
                    src="./health-professional-team-animate.svg" alt="">
                <div data-aos="fade-right"
                    class="flex flex-wrap justify-center text-black py-6 max-w-lg lg:justify-end md:text-lg md:py-0">
                    <h1 class="text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:after:scale-100  lg:text-4xl">Artikel</h1>
                    <p class="text-center lg:text-right">Konten-konten informatif di GiziPlus membantu pengguna memahami pentingnya gizi dan memberikan langkah-langkah praktis
                    untuk menerapkannya dalam kehidupan sehari-hari. Dengan artikel, tips, dan panduan ini, pengguna dapat membuat pilihan
                    makanan yang tepat, menyesuaikan pola makan, dan mencapai gaya hidup sehat yang berkelanjutan.</p>
                    <button type="button"
                        class="py-2.5 px-5 mt-4 mb-2 text-lg font-medium text-white focus:outline-none bg-fourth rounded-full hover:bg-third focus:z-10 focus:ring-4 focus:ring-white">Baca Sekarang</button>
                </div>
            </div>
        </section>
        <!-- Gabung -->
        <section class="max-w-full">
            <div class="flex flex-wrap justify-center items-center py-8 px-6 md:gap-8 md:py-24">
                <img data-aos="fade-down" class="w-3/4 md:w-1/2 lg:max-w-lg"
                    src="./health-professional-team-animate.svg" alt="">
                <div data-aos="fade-right"
                    class="flex flex-wrap justify-center text-black py-6 max-w-lg lg:justify-normal md:text-lg md:py-0">
                    <h1 class="text-2xl font-extrabold mb-6 text-center lg:text-4xl lg:text-left">Ayo Kita Jaga Kesehatan Bersama GiziPlus</h1>
                    <p class="text-center lg:text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                        deserunt possimus inventore laboriosam, nemo quidem labore, quasi aut exercitationem temporibus
                        facilis in odit! Mollitia et nihil amet incidunt. Vero, distinctio!</p>
                    <button type="button"
                        class="py-2.5 px-5 mt-4 mb-2 text-lg font-medium text-white focus:outline-none bg-fourth rounded-full hover:bg-third focus:z-10 focus:ring-4 focus:ring-white">Gabung Sekarang</button>
                </div>
            </div>
        </section>
      `;
  },

  async afterRender() {
    const mainContainer = document.querySelector('#layanan');
    const layanan = `
    <h1 data-aos="fade-down" class="text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:text-4xl">Layanan Kami</h1>
                <div class="flex flex-wrap justify-center gap-4">
                    <!-- layanan 1 -->
                    <div data-aos="fade-up"
                        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <img class="w-14 h-w-14 mb-2" src="./icon/checklist.png" alt="">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight">Tes
                                Gizi</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500">Menawarkan tes gizi online yang memungkinkan pengguna untuk mengukur status gizi mereka. Tes ini dapat melibatkan
                        pertanyaan-pertanyaan atau kuesioner untuk mengevaluasi asupan gizi dan memberikan laporan yang informatif.</p>
                    </div>
                    <!-- layanan 2 -->
                    <div data-aos="fade-up"
                        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <img class="w-14 h-w-14 mb-2" src="./icon/newspaper.png" alt="">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight">Artikel
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500">Menyediakan konten informatif tentang gizi, diet sehat, dan gaya hidup seimbang. Artikel, tips, dan panduan dapat
                        membantu pengguna dalam memahami pentingnya gizi dan cara mengimplementasikannya dalam kehidupan sehari-hari.</p>
                    </div>
                    <!-- layanan 3 -->
                    <div data-aos="fade-up"
                        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <img class="w-14 h-w-14 mb-2" src="./icon/chat.png" alt="">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-">Forum
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500">Memiliki fitur komunitas di mana pengguna dapat berinteraksi, berbagi pengalaman, dan memberikan dukungan satu sama lain
                        dalam perjalanan menuju hidup sehat. Diskusi, forum, dan kelompok dukungan dapat menjadi bagian dari platform ini.</p>
                    </div>
                </div>
    `;
    mainContainer.innerHTML = layanan;
  },
};

export default Home;
