import { ForumSource } from '../../global/api-endpoint';
import { createForumItemtemplate } from '../templates/templates-creator';

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
      mainContainer.innerHTML += createForumItemtemplate(forums);
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

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => {
      const searchQuery = searchInput.value.trim().toLowerCase();
      const filteredForum = forum.filter((forum) => forum.title.toLowerCase().includes(searchQuery));

      mainContainer.innerHTML = '';
      filteredForum.forEach((forums) => {
        mainContainer.innerHTML += createForumItemtemplate(forums);
      });
    });
  },
};

export default Forum;
