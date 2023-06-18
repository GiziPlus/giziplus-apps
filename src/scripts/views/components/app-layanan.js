class AppLayanan extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="flex flex-wrap justify-center gap-4">
                    <!-- layanan 1 -->
                    <div data-aos="fade-up"
                        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <img class="w-14 h-w-14 mb-2" src="./icon/checklist.png" alt="Tes
                                Gizi">
                        <a href="#/test/">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight">Tes
                                Gizi</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500">Menawarkan tes gizi online yang memungkinkan pengguna untuk mengukur status gizi mereka. Tes ini dapat melibatkan
                        pertanyaan-pertanyaan atau kuesioner untuk mengevaluasi asupan gizi dan memberikan laporan yang informatif.</p>
                    </div>
                    <!-- layanan 2 -->
                    <div data-aos="fade-up"
                        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <img class="w-14 h-w-14 mb-2" src="./icon/newspaper.png" alt="Artikel">
                        <a href="#/article/">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight">Artikel
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500">Menyediakan konten informatif tentang gizi, diet sehat, dan gaya hidup seimbang. Artikel, tips, dan panduan dapat
                        membantu pengguna dalam memahami pentingnya gizi dan cara mengimplementasikannya dalam kehidupan sehari-hari.</p>
                    </div>
                    <!-- layanan 3 -->
                    <div data-aos="fade-up"
                        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <img class="w-14 h-w-14 mb-2" src="./icon/chat.png" alt="Forum">
                        <a href="#/forum/">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-">Forum
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500">Memiliki fitur komunitas di mana pengguna dapat berinteraksi, berbagi pengalaman, dan memberikan dukungan satu sama lain
                        dalam perjalanan menuju hidup sehat. Diskusi, forum, dan kelompok dukungan dapat menjadi bagian dari platform ini.</p>
                    </div>
                </div>
            `;
  }
}

customElements.define('app-layanan', AppLayanan);
