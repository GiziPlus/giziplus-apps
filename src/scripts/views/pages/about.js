const About = {
  async render() {
    return `
    <app-tentang></app-tentang>  
      `;
  },

  async afterRender() {
    const mainContainer = document.querySelector('#tim');
    const tim = `
    <app-tim></app-tim>
    `;
    mainContainer.innerHTML = tim;
  },
};

export default About;
