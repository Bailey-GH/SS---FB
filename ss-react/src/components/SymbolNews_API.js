export const getNews = async topic => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${topic}&apiKey=f1ab8ad1000e4aafba2e964b9047fdca`
    );
    const json = await response.json();
    return json;
  };

export default getNews;
