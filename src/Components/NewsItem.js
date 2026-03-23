import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date, source } = this.props;
    return (
      <div className="card">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ left: "40%", zIndex: "2" }}>
              {source}
              <span class="visually-hidden">unread messages</span>
            </span>
        <img
          src={
            imageurl
              ? imageurl
              : "https://th.bing.com/th?id=OIF.4VgT7x%2fQDoc9mIUw3CX4VA&rs=1&pid=ImgDetMain&o=7&rm=3"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}{" "}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
              <span class="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    );
  }
}
