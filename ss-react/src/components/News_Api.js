const News_Api = async () => {
    const response = await fetch("https://newsapi.org/v1/sources?");
    const data = await response.json();
    return data;
} 


export default News_Api;
