class HomeContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- Layanan -->
    <section class="max-w-full">
            <div id="judulLayanan" data-aos="fade-down"
                class="flex flex-wrap justify-center pt-10 md:pb-4 mx-auto text-black max-w-lg md:text-lg">
                <h1
                    class="pt-4 text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:text-4xl">Layanan Kami</h1>
            </div>
        <div id="layanan" class="flex flex-wrap justify-center pb-10 px-6 lg:px-32 mx-auto max-w-screen-xl gap-4 md:pb-16">
            
        </div>
    </section>
    <!-- Tes Gizi -->
    <section class="max-w-full">
        <div class="flex flex-wrap flex-row justify-center items-center py-8 px-6 md:gap-8 md:py-24">
            <img data-aos="fade-down" class="w-3/4 md:w-1/2 lg:max-w-lg" src="./exams-animate.svg" alt="Tes Gizi">
            <div data-aos="fade-right"
                class="flex flex-wrap justify-center text-black py-6 max-w-lg lg:justify-normal md:text-lg md:py-0">
                <h1 class="text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:after:scale-100 lg:text-4xl">Tes Gizi</h1>
                <p class="text-center lg:text-left">Tes ini akan memberikan pemahaman yang lebih baik tentang kebutuhan gizi individu, membantu pengguna dalam
                mengoptimalkan pola makan mereka, dan mencapai keseimbangan gizi yang lebih baik.</p>
                <button type="button"
                    class="py-2.5 px-5 mt-4 mb-2 text-lg font-medium text-white focus:outline-none bg-fourth rounded-full hover:bg-third focus:z-10 focus:ring-4 focus:ring-white"><a href="#/test/">Coba Sekarang</a></button>
            </div>
        </div>
    </section>
    <!-- Artikel -->
    <section class="max-w-full bg-gray-100">
        <div class="flex flex-wrap flex-row-reverse justify-center items-center py-8 px-6 md:gap-8 md:py-24">
            <img data-aos="fade-down" class="w-3/4 md:w-1/2 lg:max-w-lg"
                src="./online-article-animate.svg" alt="Artikel">
            <div data-aos="fade-right"
                class="flex flex-wrap justify-center text-black py-6 max-w-lg lg:justify-end md:text-lg md:py-0">
                <h1 class="text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:after:scale-100  lg:text-4xl">Artikel</h1>
                <p class="text-center lg:text-right">Konten-konten informatif di GiziPlus membantu pengguna memahami pentingnya gizi dan memberikan langkah-langkah praktis
                untuk menerapkannya dalam kehidupan sehari-hari. Dengan artikel, tips, dan panduan ini, pengguna dapat membuat pilihan
                makanan yang tepat, menyesuaikan pola makan, dan mencapai gaya hidup sehat yang berkelanjutan.</p>
                <button type="button"
                    class="py-2.5 px-5 mt-4 mb-2 text-lg font-medium text-white focus:outline-none bg-fourth rounded-full hover:bg-third focus:z-10 focus:ring-4 focus:ring-white"><a href="#/article/">Baca Sekarang</a></button>
            </div>
        </div>
    </section>
    <!-- Forum Diskusi -->
    <section class="max-w-full">
        <div class="flex flex-wrap justify-center items-center py-8 px-6 md:gap-20 md:py-24">
            <img data-aos="fade-down" class="w-3/4 md:w-1/2 lg:max-w-lg"
                src="./group-discussion-animate.svg" alt="Forum Diskusi GiziPlus">
            <div data-aos="fade-right"
                class="flex flex-wrap justify-center text-black py-6 max-w-lg lg:justify-normal md:text-lg md:py-0">
                <h1 class="text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:after:scale-100 lg:text-4xl">Forum Diskusi</h1>
                <p class="text-center lg:text-left">Forum diskusi ini memungkinkan interaksi dengan komunitas yang peduli terhadap kesehatan dan gizi, serta memberikan ruang untuk bertanya, berdiskusi, dan mencari solusi terkait masalah gizi dan gaya hidup sehat. Bergabunglah dengan kami untuk membangun komunitas yang saling mendukung dan menginspirasi dalam mencapai tujuan hidup sehat dan menjaga kualitas gizi.</p>
                <button type="button"
                    class="py-2.5 px-5 mt-4 mb-2 text-lg font-medium text-white focus:outline-none bg-fourth rounded-full hover:bg-third focus:z-10 focus:ring-4 focus:ring-white"><a href="#/forum/">Coba Sekarang</a></button>
            </div>
        </div>
    </section>
    <!-- Gabung -->
    <section class="max-w-full">
        <div class="flex flex-wrap flex-row-reverse justify-center items-center py-8 px-6 md:gap-8 md:py-24">
            <img data-aos="fade-down" class="w-3/4 md:w-1/2 lg:max-w-lg"
                src="./team-spirit-animate.svg" alt="Gabung GiziPlus">
            <div data-aos="fade-right" data-aos-delay="1000"
                class="flex flex-wrap justify-center text-black py-6 max-w-lg lg:justify-normal md:text-lg md:py-0">
                <h1 class="text-2xl font-extrabold mb-6 text-center lg:text-4xl lg:text-left">Ayo Kita Jaga Kesehatan Bersama GiziPlus</h1>
                <p class="text-center lg:text-left">Rasakan manfaatnya dan raih gaya hidup sehat yang lebih baik. Bergabunglah dengan kami sekarang dan nikmati manfaat gizi yang lengkap dan berkualitas tinggi dari GiziPlus.</p>
                <button type="button"
                    class="py-2.5 px-5 mt-4 mb-2 text-lg font-medium text-white focus:outline-none bg-fourth rounded-full hover:bg-third focus:z-10 focus:ring-4 focus:ring-white"><a href="#/login/">Gabung Sekarang</a></button>
            </div>
        </div>
    </section>
            `;
  }
}

customElements.define('home-content', HomeContent);
