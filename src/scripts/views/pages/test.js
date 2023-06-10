const Test = {
  async render() {
    return `
    <app-status></app-status>
    <app-test></app-test>
        `;
  },

  async afterRender() {
    const mainContainer = document.querySelector('#panduan');
    const panduan = `
    <app-panduan></app-panduan>
    `;
    mainContainer.innerHTML = panduan;
  },
};

export default Test;
