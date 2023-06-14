import CONFIG from './config';

class ArticleSource {
  static async getArticleList() {
    const response = await fetch(`${CONFIG.NEWS_API_URL}health`);
    const responseJson = await response.json();

    return responseJson.data.posts;
  }
}

export {
  ArticleSource,
};
