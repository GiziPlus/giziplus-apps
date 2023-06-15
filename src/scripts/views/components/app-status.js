class AppStatus extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="max-w-full">
      <div id="status"
          class="flex flex-wrap flex-row-reverse justify-center items-center pt-20 py-8 px-2 md:gap-8 md:py-24">
          <img class="w-3/4 md:w-1/2 lg:max-w-lg" src="health-professional-team-animate.svg" alt="Tes Gizi" width="400">
          <div class="max-w-lg">
              <h1 class="text-3xl font-extrabold lg:text-4xl">Tes Status Gizi</h1>
              <p class="text-sm leading-relaxed lg:text-xl">Tes Status Gizi pada GiziPlus adalah sebuah alat atau
                  metode yang digunakan untuk mengevaluasi status gizi seseorang
                  berdasarkan informasi tentang berat badan, tinggi badan, usia, jenis kelamin, dan pola makan.
                  Tes ini bertujuan untuk
                  memberikan gambaran mengenai kualitas nutrisi yang diterima oleh individu dan memperoleh
                  informasi tentang status gizi
                  mereka.</p>
          </div>
      </div>
  </section>
              `;
  }
}

customElements.define('app-status', AppStatus);
