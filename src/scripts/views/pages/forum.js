const Forum = {
  async render() {
    return `
    <app-forum></app-forum>
        `;
  },

  async afterRender() {
    const mainContainer = document.querySelector('#forum');
    const layanan = `
    <!-- Card Diskusi -->
    <div class="py-10 border-b-2">
        <p class="font-bold"><a href="#">Diskusi 1</a></p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi consequuntur aut tempora sunt. Esse quaerat rem dolore labore sint beatae, expedita inventore itaque incidunt non possimus asperiores ipsa deserunt quos?</p>
    </div>
    <div class="py-10 border-b-2">
        <p class="font-bold"><a href="#">Diskusi 1</a></p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi consequuntur aut tempora sunt. Esse quaerat rem
            dolore labore sint beatae, expedita inventore itaque incidunt non possimus asperiores ipsa deserunt quos?</p>
    </div>
    <div class="py-10 border-b-2">
        <p class="font-bold"><a href="#">Diskusi 1</a></p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi consequuntur aut tempora sunt. Esse quaerat rem
            dolore labore sint beatae, expedita inventore itaque incidunt non possimus asperiores ipsa deserunt quos?</p>
    </div>
    <div class="py-10 border-b-2">
        <p class="font-bold"><a href="#">Diskusi 1</a></p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi consequuntur aut tempora sunt. Esse quaerat rem
            dolore labore sint beatae, expedita inventore itaque incidunt non possimus asperiores ipsa deserunt quos?</p>
    </div>
      `;
    mainContainer.innerHTML = layanan;
  },
};

export default Forum;
