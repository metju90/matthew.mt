import dashToCamelCase from "/utils/dashToCamelCase.js";

const getDoesRequestedArticleExist = (requestedArticle, articles) => {
  const camelCasedRequestedArticle = dashToCamelCase(requestedArticle);

  if (!(camelCasedRequestedArticle in articles)) {
    return false;
  }
  return true;
};

export default getDoesRequestedArticleExist;
