class AppTes extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="max-w-full bg-gray-100">
    <div id="panduan" class="py-8 px-6 md:gap-8 md:py-24">
        
    </div>
</section>
<section class="max-w-full">
    <div class="py-8 px-2 md:gap-8 md:pt-24 pb-10">
        <div data-aos="fade-down" class="mx-auto border border-gray-300 rounded-lg md:w-3/4">
            <div
                class="flex flex-wrap justify-center mx-auto text-black py-6 max-w-lg md:text-lg md:py-0">
                <h1
                    class="pt-4 text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:text-4xl">Tes Gizi</h1>
            </div>
            <form class="mx-4 my-2">
                <div class="flex gap-4">
                    <div class="flex items-center mb-4">
                        <input id="Laki-Laki" type="radio" name="gender" value="Laki-Laki"
                            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                            checked>
                        <label for="Laki-Laki" class="block ml-2 text-sm font-medium text-gray-900">
                            Laki-Laki
                        </label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="Perempuan" type="radio" name="gender" value="Perempuan"
                            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                        <label for="Perempuan" class="block ml-2 text-sm font-medium text-gray-900">
                            Perempuan
                        </label>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div class="mb-6">
                        <label for="usia" class="block mb-2 text-sm font-medium text-gray-900">Usia (Tahun)</label>
                        <input type="text" id="usia"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                    </div>
                    <div class="mb-6">
                        <label for="tinggi-badan" class="block mb-2 text-sm font-medium text-gray-900">Tinggi (cm)</label>
                        <input type="text" id="tinggi-badan"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required>
                    </div>
                    <div class="mb-6">
                        <label for="berat-badan" class="block mb-2 text-sm font-medium text-gray-900">Berat badan (Kg)</label>
                        <input type="text" id="berat-badan"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required>
                    </div>
                    <button type="submit"
                        class="py-2.5 px-5 mb-2 text-lg font-medium text-white focus:outline-none bg-fourth rounded-full md:col-start-2 hover:bg-third focus:z-10 focus:ring-4 focus:ring-white">Hitung</button>
                </div>
            </form>
        </div>
    </div>
</section>
<section class="max-w-full">
            <div class="pb-16 px-2">
                <div data-aos="fade-down" class="mx-auto border border-gray-300 rounded-lg md:w-3/4">
                    <div
                        class="flex flex-wrap justify-center mx-auto text-black py-6 max-w-lg md:text-lg md:py-0">
                        <h1
                            class="pt-4 text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:text-4xl">
                            Hasil</h1>
                    </div>
                    <div class="mx-4 my-2">
                        <h1 id="status-gizi" class="bg-gray-100 px-2 py-2">Status Gizi :</h1>
                        <h1 id="kebutuhan-kalori" class="px-2 py-2">Kebutuhan Kalori :</h1>
                        <h1 id="kebutuhan-protein" class="bg-gray-100 px-2 py-2">Kebutuhan Protein :</h1>
                        <h1 id="kebutuhan-lemak" class="px-2 py-2">Kebutuhan Lemak :</h1>
                    </div>
                </div>
            </div>
        </section>
              `;
  }
}

customElements.define('app-test', AppTes);
