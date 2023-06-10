class AppPanduan extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div data-aos="fade-right"
                    class="flex flex-wrap justify-center mx-auto text-black py-6 max-w-lg md:text-lg md:py-0">
                    <h1
                        class="text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:text-4xl">
                        Panduan Tes Gizi</h1>
                </div>
                <div class="flex flex-wrap justify-center gap-4">
                    <!-- Panduan 1 -->
                    <div data-aos="fade-up" class="max-w-sm p-6 text-center">
                        <img class="w-20 h-20 mb-4 mx-auto" src="../icon/device.png" alt="">
                        <p class="mb-3 font-normal text-gray-500">
                            Siapkan perangkat yang akan kamu gunakan dalam mengerjakan tes status gizi, pastikan juga
                            koneksi internetmu stabil.
                        </p>
                    </div>
                    <!-- Panduan 2 -->
                    <div data-aos="fade-up" class="max-w-sm p-6 text-center">
                        <img class="w-20 h-20 mb-4 mx-auto" src="../icon/input.png" alt="">
                        <p class="mb-3 font-normal text-gray-500">
                            Pastikan kamu mengisi data yang diminta dengan akurat, termasuk berat badan, tinggi badan,
                            usia, jenis kelamin, dan
                            informasi pola makan. Data yang akurat akan memberikan hasil yang lebih relevan dan
                            bermanfaat.
                        </p>
                    </div>
                    <!-- Panduan 3 -->
                    <div data-aos="fade-up" class="max-w-sm p-6 text-center">
                        <img class="w-20 h-20 mb-4 mx-auto" src="../icon/search.png" alt="">
                        <p class="mb-3 font-normal text-gray-500">
                            Setelah itu kamu dapat menekan "Hitung", lalu kamu dapat melihat hasil status gizi kamu.
                        </p>
                    </div>
                </div>
    `;
  }
}

customElements.define('app-panduan', AppPanduan);
