import React from "react"
import "./contents.css"
import video from "../utils/video.mp4"
import { Link } from "gatsby"
import service_data from "../data/service-data"

const Services = ({
  title = "helooo",
  content = ["one", "two", "three", "four", "five", "six", "seven"],
}) => {
  const getServiceByName = name => {
    return service_data.filter(service => service.name === name)[0]
  }

  return (
    <div
      className="hoover"
      style={{
        borderRadius: "12px",
        width: "80%",
        padding: "14px 4px",
      }}
    >
      <div style={{}}>
        <a href="" className="titleaa">
          {title}
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {content.map(a => (
          <Link
            className="data"
            style={{ textDecoration: "none", fontSize: "18px", margin: "7px" }}
            to="/ourservices"
            state={{ service: getServiceByName(a) }}
          >
            {a}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Services
