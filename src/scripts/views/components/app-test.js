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
    <div class="py-8 px-2 md:gap-8 md:py-24">
        <div class="mx-auto border border-gray-300 rounded-lg md:w-3/4">
            <div data-aos="fade-right"
                class="flex flex-wrap justify-center mx-auto text-black py-6 max-w-lg md:text-lg md:py-0">
                <h1
                    class="text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:text-4xl">Tes Gizi</h1>
            </div>
            <form class="mx-4 my-2">
                <div class="flex gap-4">
                    <div class="flex items-center mb-4">
                        <input id="laki-laki" type="radio" name="gender" value="Laki-Laki"
                            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                            checked>
                        <label for="laki-laki" class="block ml-2 text-sm font-medium text-gray-900">
                            Laki-Laki
                        </label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="perempuan" type="radio" name="gender" value="Perempuan"
                            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                        <label for="perempuan" class="block ml-2 text-sm font-medium text-gray-900">
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
                        <label for="usia" class="block mb-2 text-sm font-medium text-gray-900">Tinggi (m)</label>
                        <input type="text" id="usia"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required>
                    </div>
                    <div class="mb-6">
                        <label for="usia" class="block mb-2 text-sm font-medium text-gray-900">Berat badan (Kg)</label>
                        <input type="text" id="usia"
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
              `;
  }
}

customElements.define('app-test', AppTes);
