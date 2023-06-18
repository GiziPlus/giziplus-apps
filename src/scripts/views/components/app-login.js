class AppLogin extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="min-h-screen flex flex-col justify-center items-center px-6 pt-20 md:px-4">
    <div id="login"
      class="w-full max-w-sm p-4 bg-white border border-fourth rounded-lg shadow sm:p-6 md:p-8">
      
    </div>
  </section>
       `;
  }
}

customElements.define('app-login', AppLogin);
