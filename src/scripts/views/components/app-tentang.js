class AppTentang extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- Tentang Kami -->
        <section class="pt-16">
            <div class="flex flex-col justify-center px-6 py-6 m-6 bg-gray-100 md:flex-row-reverse md:mx-16 md:py-24">
                <img class="object-cover w-[10rem] h-[10rem] mx-auto my-auto"
                    src="./gizi-plus-logo/png/logo-color.png" alt="" />
                <div class="py-6 my-auto text-center md:pr-6 md:text-left">
                    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Tentang Kami</h3>
                        <p class="mb-3 font-normal text-gray-700">Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Obcaecati praesentium accusamus consequuntur accusantium soluta, enim
                            dolorum, eveniet
                            sit provident aliquid unde laborum eos nisi explicabo iste hic. Autem, assumenda provident!
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
                    <p>Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Obcaecati praesentium accusamus consequuntur accusantium soluta, enim dolorum,
                        eveniet
                        sit provident aliquid unde laborum eos nisi explicabo iste hic. Autem, assumenda
                        provident!Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Obcaecati praesentium accusamus consequuntur accusantium soluta, enim dolorum,
                        eveniet
                        sit provident aliquid unde laborum eos nisi explicabo iste hic. Autem, assumenda provident!</p>
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
