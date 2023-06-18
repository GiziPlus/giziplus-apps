class AppForum extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="max-w-full">
    <div class="mx-auto py-20 px-6 md:text-lg">
        <h1 class="text-center text-3xl font-extrabold mb-2 lg:text-4xl">Selamat Datang di Forum Diskusi GiziPlus</h1>
        <div class="m-auto lg:w-3/4">
            <!-- Search -->
            <div class="flex py-2 gap-2">
                <input class="w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" type="text" placeholder="Cari Diskusi">
                <button class="bg-fourth text-white rounded-md hover:bg-third px-2">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd"
                            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z">
                        </path>
                    </svg>
                </button>
            </div>
            <!-- Diskusi Baru -->
            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="w-full py-2 bg-fourth text-white rounded-md hover:bg-third">Buat Diskusi Baru</button>
            <div id="authentication-modal" tabindex="-1" aria-hidden="true"
                class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button"
                            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Buat Diskusi Baru</h3>
                            <form class="space-y-6" action="#">
                                <div>
                                    <label for="nama" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                                    <input type="text" name="nama" id="nama"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Ketik Nama">
                                </div>
                                <div>
                                    <label for="judul" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Judul Pertanyaan</label>
                                    <input type="text" name="judul" id="judul"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Ketik Judul">
                                </div>
                                <div>
                                    <label for="pertanyaan" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Uraian Pertanyaan</label>
                                    <input type="text" name="pertanyaan" id="pertanyaan" placeholder="Ketik Pertanyaanmu"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required>
                                </div>
                                <button type="submit" id="create" action="../pages/forum.js"
                                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buat Diskusi</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div id="forum"></div>
        </div>
    </div>
</section>
              `;
  }
}

customElements.define('app-forum', AppForum);
