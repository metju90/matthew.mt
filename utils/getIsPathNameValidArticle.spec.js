import getIsPathNameValidArticle from "/utils/getIsPathNameValidArticle.js";

describe(getIsPathNameValidArticle, () => {
  it("Returns false if there are no articles for a given path", () => {
    const mockedArticles = {
      articleOne: "",
      articleTwo: ""
    };
    expect(
      getIsPathNameValidArticle("non-existing-article", mockedArticles)
    ).toEqual(false);
    expect(getIsPathNameValidArticle("negative", mockedArticles)).toEqual(
      false
    );
    expect(getIsPathNameValidArticle("1", mockedArticles)).toEqual(false);
    expect(getIsPathNameValidArticle("", mockedArticles)).toEqual(false);
    expect(getIsPathNameValidArticle("xarticle-one", mockedArticles)).toEqual(
      false
    );
    expect(getIsPathNameValidArticle("article-onex", mockedArticles)).toEqual(
      false
    );
    expect(getIsPathNameValidArticle("article-xone", mockedArticles)).toEqual(
      false
    );
  });

  it("Returns true if there is an article for a given path", () => {
    const mockedArticles = {
      articleOne: "",
      articleTwo: ""
    };

    expect(getIsPathNameValidArticle("article-one", mockedArticles)).toEqual(
      true
    );
    expect(getIsPathNameValidArticle("article-two", mockedArticles)).toEqual(
      true
    );e
    );
  });
});
