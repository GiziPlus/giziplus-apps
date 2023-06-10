const Sign = {
  async render() {
    return `
    <app-sign></app-sign>
        `;
  },

  async afterRender() {
    const mainContainer = document.querySelector('#signup');
    const signup = `
    <sign-form></sign-form>
      `;
    mainContainer.innerHTML = signup;
  },
};

export default Sign;
