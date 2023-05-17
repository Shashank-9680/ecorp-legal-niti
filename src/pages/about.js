import React from "react"
import { Seo } from "../components/seo"
import Layout from "../layout/layout"
import Logo from "../../public/assets/img/artwork/about-logo.png"
import ServiceBg from "../components/service-bg"
import GradientPosition from "../components/gradient-position"
import Breadcrumb from "../components/common/breadcrumb"
import sample from "./sample11.mp4"
import "./about.css"

const about = () => {
  return (
    <Layout>
      <section className=" banner-padding ">
        <div className="about-bg-image">
          <video className="bg-vedio" src={sample} autoPlay loop muted></video>
        </div>
        <div className="about">
          <div className="element-container">
            <div className="left-part">
              <img src={Logo} className="about-vector" />
            </div>
            <div className="right-part">
              <h2 className="headline">
                {" "}
                We're a team who is focused on using the latest AI technology to
                simplify Incorporation and GST compliance for startups.{" "}
              </h2>
              <p className="content" style={{ color: "#fff" }}>
                Our AI-powered platform is designed to streamline the entire
                process of incorporating a startup and handling GST compliance.
                From registering your company and obtaining the necessary
                licenses to filing GST returns and maintaining compliance, we
                have got you covered. Our platform provides a user-friendly
                interface, making it easy for our clients to access and manage
                all aspects of their business from one central location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default about

export const Head = () => <Seo title="about details" />
