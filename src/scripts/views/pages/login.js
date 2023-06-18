const Login = {
  async render() {
    return `
    <app-login></app-login>
      `;
  },

  async afterRender() {
    const mainContainer = document.querySelector('#login');
    const login = `
    <login-form></login-form>
    `;
    mainContainer.innerHTML = login;
  },
};

export default Login;
