import { ArticleSource } from '../../global/api-endpoint';
import { creteArticleItemtemplate, creteNewArticleItemtemplate } from '../templates/templates-creator';

const Article = {
  async render() {
    return `
    <app-artikel></app-artikel>
    `;
  },

  async afterRender() {
    const posts = await ArticleSource.getArticleList();
    const mainContainer = document.querySelector('#artikel');
    let displayedItems = 0;
    posts.forEach((article) => {
      if (displayedItems >= 1) {
        return; // Break the loop after the first iteration
      }

      mainContainer.innerHTML += creteNewArticleItemtemplate(article);
      displayedItems++;
    });

    const articleContainer = document.querySelector('#article');
    posts.forEach((article) => {
      articleContainer.innerHTML += creteArticleItemtemplate(article);
    });
  },
};

export default Article;
