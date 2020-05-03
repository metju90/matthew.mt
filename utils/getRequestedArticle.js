/** @format */

import dashToCamelCase from "/utils/dashToCamelCase.js";

const getRequestedArticle = (requestedArticle, articles) => {
  try {
    return articles[dashToCamelCase(requestedArticle)];
  } catch (err) {
    console.error(err);
    history.pushState({}, "", "/error");
  }
  return null;
};

export default getRequestedArticle;
