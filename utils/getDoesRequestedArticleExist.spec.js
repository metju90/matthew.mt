import getDoesRequestedArticleExist from "/utils/getDoesRequestedArticleExist.js";

describe(getDoesRequestedArticleExist, () => {
  it("Returns false if there are no articles for a given path", () => {
    const mockedArticles = {
      articleOne: "",
      articleTwo: "",
    };
    expect(
      getDoesRequestedArticleExist("non-existing-article", mockedArticles)
    ).toEqual(false);
    expect(getDoesRequestedArticleExist("negative", mockedArticles)).toEqual(
      false
    );
    expect(getDoesRequestedArticleExist("1", mockedArticles)).toEqual(false);
    expect(getDoesRequestedArticleExist("", mockedArticles)).toEqual(false);
    expect(
      getDoesRequestedArticleExist("xarticle-one", mockedArticles)
    ).toEqual(false);
    expect(
      getDoesRequestedArticleExist("article-onex", mockedArticles)
    ).toEqual(false);
    expect(
      getDoesRequestedArticleExist("article-xone", mockedArticles)
    ).toEqual(false);
  });

  it("Returns true if there is an article for a given path", () => {
    const mockedArticles = {
      articleOne: "",
      articleTwo: "",
    };

    expect(getDoesRequestedArticleExist("article-one", mockedArticles)).toEqual(
      true
    );
    expect(getDoesRequestedArticleExist("article-two", mockedArticles)).toEqual(
      true
    );
  });
});
