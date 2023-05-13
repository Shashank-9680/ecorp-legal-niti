import { Link } from "gatsby";
import React from "react";

const SingleService = ({ service }) => {
  return (
    <div className="blog-post-item">
      <div className="blog-post-thumb">
        <Link to="/service-details">
          <img src={service.img} alt="img" />
        </Link>
      </div>
      <div className="blog-post-content">
        <div className="blog-post-meta">
          <ul className="list-wrap">
            <li>
              <i className="far fa-user"></i>
              <Link to="/service">{service.user}</Link>
            </li>
            <li>
              <i className="far fa-calendar-alt"></i>
              {service.date}
            </li>
            <li>
              <i className="far fa-comments"></i>
              <a href="#">{service.comments} Comments</a>
            </li>
          </ul>
        </div>
        <h2 className="title">
          <Link to="/service-details">{service.title}</Link>
        </h2>
        <p>{service.desc}</p>
      </div>
    </div>
  )
}

export default SingleService
