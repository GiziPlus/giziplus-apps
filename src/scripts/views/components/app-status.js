class AppStatus extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="max-w-full">
      <div id="status" class="flex flex-wrap flex-row-reverse justify-center items-center pt-20 py-8 px-2 md:gap-8 md:py-24">
          <img data-aos="flip-left" data-aos-delay="50" class="w-3/4 md:w-1/2 lg:max-w-lg" src="exams-animate.svg" alt="Tes Gizi" width="400">
          <div data-aos="flip-right" data-aos-delay="50" class="flex flex-wrap justify-center text-black py-6 max-w-lg lg:justify-normal md:text-lg md:py-0">
                <h1 class="text-3xl font-extrabold text-left after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:after:scale-100 lg:text-4xl">Tes Status Gizi</h1>
                <p class="text-sm text-center lg:text-left leading-relaxed lg:text-xl">Tes Status Gizi pada GiziPlus adalah sebuah alat atau
                  metode yang digunakan untuk mengevaluasi status gizi seseorang
                  berdasarkan informasi tentang berat badan, tinggi badan, usia, jenis kelamin, dan pola makan.
                  Tes ini bertujuan untuk
                  memberikan gambaran mengenai kualitas nutrisi yang diterima oleh individu dan memperoleh
                  informasi tentang status gizi
                  mereka.</p>
            </div>
          <div data-aos="fade-right" class="max-w-lg">
              <h1 class="text-3xl pb-2 font-extrabold lg:text-4xl"></h1>
              
          </div>
      </div>
  </section>
              `;
  }
}

customElements.define('app-status', AppStatus);
