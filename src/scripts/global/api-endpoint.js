import CONFIG from './config';

class ArticleSource {
  static async getArticleList() {
    const response = await fetch(`${CONFIG.NEWS_API_URL}health`);
    const responseJson = await response.json();

    return responseJson.data.posts;
  }
}

class ForumSource {
  static async getForumList() {
    const response = await fetch(`${CONFIG.FORUM_API_URL}`);
    const responseJson = await response.json();

    return responseJson.tours;
  }

  static async getForumDetail() {
    const response = await fetch(`${CONFIG.FORUM_API_URL}:id`);
    const responseJson = await response.json();

    return responseJson.tours;
  }

  static async updateForumDetail() {
    const response = await fetch(`${CONFIG.FORUM_API_URL}:id`);
    const responseJson = await response.json();

    return responseJson.tours;
  }

  static async createForumDetail() {
    const response = await fetch(`${CONFIG.FORUM_API_URL}create`);
    const responseJson = await response.json();

    return responseJson.tours;
  }

  static async deleteForumDetail() {
    const response = await fetch(`${CONFIG.FORUM_API_URL}:id`);
    const responseJson = await response.json();

    return responseJson.tours;
  }
}

export {
  ArticleSource,
  ForumSource,
};
