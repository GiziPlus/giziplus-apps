class LoginForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Masuk ke GiziPlus
        </h5>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Masukan
            email</label>
          <input type="email" name="email" id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fourth focus:border-fourth block w-full p-2.5"
            placeholder="mascuy@email.com" required />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Masukan password</label>
          <input type="password" name="password" id="password" placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-fourth focus:border-fourth block w-full p-2.5"
            required />
        </div>
        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value=""
                class="w-4 h-4 text-fourth border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required />
            </div>
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900">Ingat Saya</label>
          </div>
          <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lupa Password?</a>
        </div>
        <button type="submit"
          class="w-full text-white bg-fourth hover:bg-third focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Masuk
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Belum daftar?
          <a href="#/sign" class="text-blue-700 hover:underline dark:text-blue-500">Buat Akun</a>
        </div>
      </form>
       `;
  }
}

customElements.define('login-form', LoginForm);
