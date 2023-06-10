const Home = {
  async render() {
    return `
        <app-hero></app-hero>
        <home-content></home-content>
      `;
  },

  async afterRender() {
    const mainContainer = document.querySelector('#layanan');
    const layanan = `
    <h1 data-aos="fade-down" class="text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:text-4xl">Layanan Kami</h1>
    <app-layanan></app-layanan>
    `;
    mainContainer.innerHTML = layanan;
  },
};

export default Home;
