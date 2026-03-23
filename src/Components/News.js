import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: "us",
    pageSize : 5,
    category : "general"
  }
    static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category : PropTypes.string
  }




  articles = [];

  constructor() {
    super();
    console.log("Hello I am a constructor from news");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }








  async componentDidMount() {
    console.log("cdm");
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category${this.props.category}&apiKey=8596dc3d317641b3a83b0d2af3990264&pageSize=${this.props.pageSize}`;
      this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ 
      loading : false,
        articles: parsedData.articles,
        totalresults : parsedData.totalResults,

    });
  }



  handlePreviousClick=async ()=>{
    console.log("Previous");

        let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category${this.props.category}&apiKey=8596dc3d317641b3a83b0d2af3990264&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loadig : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ 
      loading : false, 
    articles: parsedData.articles,
     page :  this.state.page-1, 
    });
  }


  handleNextClick=async ()=>{
    console.log("Next");

    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
     let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8596dc3d317641b3a83b0d2af3990264&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ 
      loading : false,
    articles: parsedData.articles,
     page :  this.state.page+1, 
    });
}


  }

  render() {
    console.log("render");
    return (
      <div className="container my-5">
        <h1 className="text-center">NewsMonkey - Top Headlines </h1>
        {this.state.loading && <Loader/>}
        <div class="row my-4">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div class="col md-4 ms-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : " "}
                  description={
                    element.description ? element.description.slice(0, 60) : " "
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
          <div class="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" class="btn btn-secondary" onClick={this.handlePreviousClick}>
              ← Previous
            </button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/10)} type="button" class="btn btn-secondary" onClick={this.handleNextClick}>
              Next →
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
