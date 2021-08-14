import dashToCamelCase from "/utils/dashToCamelCase.js";

const getRequestedArticle = (requestedArticle, articles) => {
  try {
    const article = articles[dashToCamelCase(requestedArticle)];
    if (article.redirectUrl) {
      window.location.replace(article.redirectUrl);
      return;
    }
    return article;
  } catch (err) {
    console.error(err);
    history.pushState({}, "", "/error");
  }
  return null;
};

export default getRequestedArticle;
