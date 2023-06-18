import { ForumSource } from '../../global/api-endpoint';
import { creteForumItemtemplate } from '../templates/templates-creator';

const Forum = {
  async render() {
    return `
    <app-forum></app-forum>
        `;
  },

  async afterRender() {
    const forum = await ForumSource.getForumList();
    const mainContainer = document.querySelector('#forum');
    forum.forEach((forums) => {
      mainContainer.innerHTML += creteForumItemtemplate(forums);
    });

    const createForumButton = document.getElementById('create');
    createForumButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const name = document.getElementById('nama').value;
      const title = document.getElementById('judul').value;
      const description = document.getElementById('pertanyaan').value;

      const forumData = {
        name,
        title,
        description,
      };

      await ForumSource.createForumDetail(forumData);
    });
  },
};

export default Forum;
