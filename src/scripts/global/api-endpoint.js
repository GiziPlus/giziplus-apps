import CONFIG from './config';

class ArticleSource {
  static async getArticleList() {
    const response = await fetch(`${CONFIG.ARTICLE_API_URL}health`);
    const responseJson = await response.json();

    return responseJson.data.posts;
  }
}

class ForumSource {
  static async getForumList() {
    const response = await fetch(`${CONFIG.FORUM_API_URL}`);
    const responseJson = await response.json();

    return responseJson.data.tours;
  }

  static async getForumDetail() {
    const response = await fetch(`${CONFIG.FORUM_API_URL}:id`);
    const responseJson = await response.json();

    return responseJson.data.tours;
  }

  static async updateForumDetail() {
    const response = await fetch(`${CONFIG.FORUM_API_URL}:id`);
    const responseJson = await response.json();

    return responseJson.data.tours;
  }

  static async createForumDetail(forumData) {
    const response = await fetch(`${CONFIG.FORUM_API_URL}create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(forumData),
    });

    if (response.ok) {
      console.log('Data berhasil dikirim ke API');
      window.location.reload();
    } else {
      console.error('Terjadi kesalahan dalam permintaan ke API');
    }
    const responseJson = await response.json();

    return responseJson.data;
  }

  static async deleteForumDetail() {
    const response = await fetch(`${CONFIG.FORUM_API_URL}:id`);
    const responseJson = await response.json();

    return responseJson.data.tours;
  }
}

export {
  ArticleSource,
  ForumSource,
};
