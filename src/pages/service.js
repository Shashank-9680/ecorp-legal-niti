import React from "react"
import Layout from "../layout/layout"
import Content from "../components/contents"
import data from "../data/services"
import "./service.css"
import { Seo } from "../components/seo"

// import Video from "../utils/video.mp4"
import Video from "../utils/2.mp4"

const Service = () => {
  return (
    <Layout>
      <section className=" banner-paddinga ">
        <div className="video-container">
          <video className="video" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
            {/* Add additional source elements for other video formats */}
          </video>
          <h2 className="heading">Services</h2>
        </div>
      </section>
      {/* <section className=" banner-padding "  > */}
      {/* <div className="banner__background-wrap banner__content"> */}

      <div
        className="wrap"
        style={{
          display: "flex",
          // margin:"80px",
          fontSize: "35px",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          // gap: '8% 8%',
          // marginTop:"250px"
        }}
      >
        {data.map((a, b) => {
          {
            /* console.log(a[0], a[1]) */
          }
          return (
            <div style={{ flexBasis: "29%" }}>
              <Content title={a[0][0]} content={a[0].slice(1)} />
              {/* {console.log(a[0][0])} */}
              <Content title={a[1][0]} content={a[1].slice(1)} />
            </div>
          )
        })}

        {/* <div className="row">
</div> */}
      </div>
    </Layout>
  )
}

export default Service

export const Head = () => <Seo title="Service Details" />
