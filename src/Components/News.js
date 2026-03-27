import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> {
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(false);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);
  
  
  // articles = [];

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     totalResults: 0
  //   };
  //   document.title = `${props.category.toUpperCase()}- NewsMonkey`;
  // }

 
  const updateNews=async()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category${props.category}&page=${page}&apiKey=8596dc3d317641b3a83b0d2af3990264&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
       props.setProgress(30);
    let parsedData = await data.json();
       props.setProgress(70);
    console.log(parsedData);
    setLoading(false);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  }


  useEffect(() => {
     document.title = `${props.category.toUpperCase()}- NewsMonkey`;
    updateNews();
  }, []);



  const fetchMoreData =async () => {


    setPage(page+1);
     
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category${props.category}&page=${page+1}&apiKey=${props.apikey}&pageSize=${props.pageSize}`;
       setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };




  // const handlePreviousClick = async () => {
  //   setPage(page-1);
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //   setPage(page+1);
  //   updateNews();
  // };


    console.log("render");
    return (
      <>
        <h1 className="text-center" style={{marginTop : "120px"}}>
          NewsMonkey - Top Headlines {props.category}
        </h1>
        {loading && <Loader />}
        <div className="container">
                  <div class="row my-4">
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Loader />}
          >
            <div className="container">
            {articles.map((element) => {
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




News.defaultProps = {
    country: "us",
    pageSize: 5,
    category: "general",
  };
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };






export default News;
