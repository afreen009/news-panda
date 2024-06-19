import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import imageWoman from "../../assets/imageWoman.jpg";
import PropTypes from "prop-types";
import './../News/News';
import InfiniteScroll from "react-infinite-scroll-component";
import './../News/News.scss';
import Loading from '../Loading/Loading';

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  PropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("this is the props");
    console.log(this.props);
    this.state = {
      articles: [],
      loading: false,
      page: 0,
      totalResults: 0,
    };
  }

  // async updateNews() {
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d00b1087302a4403a3cb3fec207ccbf8&pageSize=${this.props.pageSize}&page=${this.state.page}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();

  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   });
  // }

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  async componentDidMount() {
    this.fetchMoreData();
  }

  fetchMoreData = async () => {
    setTimeout(async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
        this.props.category
      }&apiKey=d00b1087302a4403a3cb3fec207ccbf8&pageSize=${
        this.props.pageSize
      }&page=${this.state.page + 1}`;

      let data = await fetch(url);
      
      let parsedData = await data.json();
      console.log(parsedData.totalResults);

      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        loading: false,
      });
    }, 700);
  };

  render() {
    return (
     this.state.articles ?<>
      <section className="news__sec">
        <h1 className="news__title text-2xl text-center pt-10 font-bold ">
          News Top Headlines
        </h1>
        {this.state.loading && <p>Loading.....</p>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<p>Loading.....</p>}
        >
          
            {this.state.articles.map((element) => {
              return (
                <div className="news__innersec grid grid-cols-3 gap-8 p-14" key={element.imageUrl}>
                  <div className="news__innersecDiv">
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={
                        element.urlToImage ? element.urlToImage : imageWoman
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                </div>
              );
            })}
          
        </InfiniteScroll>
      </section>
     </>
     :<Loading/>
    );
  }
}
// }
