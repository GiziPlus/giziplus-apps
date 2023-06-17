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
    <h1 data-aos="fade-down"></h1>
    <app-layanan></app-layanan>
    `;
    mainContainer.innerHTML = layanan;
  },
};

export default Home;
