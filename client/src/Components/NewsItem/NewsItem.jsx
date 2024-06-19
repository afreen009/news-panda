import React, { Component } from "react";
import '../NewsItem/NewsItem.scss';

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="newsItem__divSec">
        <div className="newsItem__card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="news__img">
            <a href="#">
              <img className="newsItem__img rounded-t-lg" src={imageUrl} alt="" />
            </a>
          </div>

          <div className="p-5">
              <h5 className="newsItem__h5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
            <p className="newsItem__para mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <p className="newsItem__para1 mb-3  text-xs font-normal text-gray-700 dark:text-gray-400">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </p>
            <button className="newsItem__readMore">
              <a
                href={newsUrl}
                className="newsItem__readMoreLink inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </a>
            </button>

          </div>
        </div>
      </div>
    );
  }
}
