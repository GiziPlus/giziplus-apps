class AppTentang extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- Tentang Kami -->
        <section class="pt-16">
            <div class="flex flex-col justify-center px-6 py-6 m-6 bg-gray-100 lg:flex-row-reverse md:mx-16 md:py-24">
                <img class="md:px-8 w-1/2 lg:w-1/4 mx-auto my-auto"
                    src="./gizi-plus-logo/png/logo-no-background.png" alt="Logo GiziPlus" />
                <div class="py-6 md:px-8 my-auto text-center md:pr-6 md:text-left">
                    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Tentang Kami</h3>
                        <p class="mb-3 font-normal text-gray-700">Kami adalah tim teknologi yang bersemangat yang membentuk aplikasi GiziPlus untuk mengatasi masalah kurang gizi di Indonesia, terutama di daerah pedesaan dan terpencil. Dengan memberikan akses kepada masyarakat untuk memilih makanan yang sehat, GiziPlus bertujuan untuk meningkatkan kualitas gizi dan mempromosikan gaya hidup sehat di Indonesia. Kami berkomitmen untuk terus mengembangkan aplikasi ini agar memberikan dampak positif yang signifikan bagi masyarakat.
                        </p>
                </div>
            </div>
        </section>

        <!-- Tentang Aplikasi -->
        <section>
            <div class="flex flex-wrap justify-center pb-10 px-6 mx-auto max-w-screen-xl gap-4 md:pb-24 md:mx-16 md:pt-24 text-center">
                <div class="flex justify-center text-center flex-col p-4">
                    <h3
                        class="text-4xl font-bold after:block after:content-[''] after:mt-4 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125">
                        Tentang Aplikasi</h3>
                </div>

                <div class="flex">
                    <p>Aplikasi GiziPlus dibentuk untuk mengatasi masalah kurang gizi di Indonesia, terutama di daerah pedesaan dan terpencil. Dengan tujuan mencegah gizi buruk, aplikasi ini memberikan akses kepada masyarakat untuk memilih makanan yang baik bagi kesehatan tubuh. GiziPlus ingin menjadi gaya hidup sehat yang diadopsi oleh masyarakat luas, membawa perubahan positif dan meningkatkan kualitas gizi di Indonesia.</p>
                </div>
            </div>
        </section>

        <!-- Tim Kami -->
        <section id="tim">
            
        </section>
       `;
  }
}

customElements.define('app-tentang', AppTentang);
