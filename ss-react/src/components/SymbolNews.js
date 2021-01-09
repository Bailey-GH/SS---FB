import React from "react";
import { getNews } from "./SymbolNews_API";
import ArticleList from "./ArticleLists";
import SearchBar from "./SearchBar";
import { Container, Header } from "semantic-ui-react";


class SymbolNews extends React.Component {
    state = {
        articles: [],
        searchTopic: "",
        totalResults: "",
        loading: false,
        apiError: ""
      };
    
      searchForTopic = async topic => {
        try {
          this.setState({ loading: true });
          const response = await getNews(topic);
          this.setState({
            articles: response.articles,
            searchTopic: topic,
            totalResults: response.totalResults
          });
        } catch (error) {
          this.setState({ apiError: "Could not find any articles" });
        }
        this.setState({ loading: false });
      };
    
      render() {
        const {
          articles,
          apiError,
          loading,
          searchTopic,
          totalResults
        } = this.state;
        return (
          <Container>
            <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
              Search about a company
            </Header>
            <SearchBar searchForTopic={this.searchForTopic} />
            <p style={{ textAlign: "center" }}>
              Powered by <a href="https://newsapi.org/">NewsAPI.org</a>
            </p>
            {loading && (
              <p style={{ textAlign: "center" }}>Searching for articles...</p>
            )}
            {articles.length > 0 && (
              <Header as="h4" style={{ textAlign: "center", margin: 20 }}>
                Found {totalResults} articles on "{searchTopic}"
              </Header>
            )}
            {articles.length > 0 && <ArticleList articles={articles} />}
            {apiError && <p>Could not fetch any articles. Please try again.</p>}
          </Container>
        );
      }
    }
export default SymbolNews;
