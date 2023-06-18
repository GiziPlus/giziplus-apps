const DrawerInitiator = {
  init({ content }) {
    content.addEventListener('click', (event) => {
      this._closeDrawer(event);
    });
  },
};

export default DrawerInitiator;
