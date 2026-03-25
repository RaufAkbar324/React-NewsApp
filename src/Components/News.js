import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [];

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.props.category.toUpperCase()}- NewsMonkey`;
  }

  async componentDidMount() {
    this.updateNews();
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category${this.props.category}&page=${this.state.page}&apiKey=8596dc3d317641b3a83b0d2af3990264&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalresults: parsedData.totalResults,
    });
  }




  fetchMoreData =async () => {

    this.setState({page : this.state.page+1});
     
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category${this.props.category}&page=${this.state.page}&apiKey=8596dc3d317641b3a83b0d2af3990264&pageSize=${this.props.pageSize}`;
   
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
    
      articles: this.state.articles.concat(parsedData.articles),
      totalresults: parsedData.totalResults,
    });

  };




  handlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    console.log("render");
    return (
      <>
        <h1 className="text-center">
          NewsMonkey - Top Headlines {this.props.category}
        </h1>
        {this.state.loading && <Loader />}
        <div className="container">
                  <div class="row my-4">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Loader />}
          >
            <div className="container">
            {this.state.articles.map((element) => {
              return (
                <div class="col md-4 ms-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : " "}
                    description={
                      element.description
                        ? element.description.slice(0, 60)
                        : " "
                    }
                    imageurl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
            </div>
          </InfiniteScroll>

         </div>
        </div>
      </>
    );
  }
}

export default News;
