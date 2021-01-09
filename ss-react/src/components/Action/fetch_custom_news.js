function fetchCustomNews(source, relevance){
    //return the actual action to do
    return function(dispatch){
      fetch("https://newsapi.org/v1/articles?source="+ source + "&sortBy="+ relevance +"&apiKey=f1ab8ad1000e4aafba2e964b9047fdca")
      .then(res => {
          return res.json();
          
      })
      .then(res => {
       // console.log(res)
        dispatch({type:"FETCH_CUSTOM_NEWS", payload: res.articles});
      })
      .catch(err => {
          console.log(err);
      })

   }
}

export default fetchCustomNews;
