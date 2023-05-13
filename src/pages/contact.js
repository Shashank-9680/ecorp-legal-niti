import React from 'react';
import Layout from '../layout/layout';
import './contact.css'
 import { Seo } from "../components/seo";


const contact = () => {

  return (
    <Layout>
      <section className=" banner-padding ">
        
      <div className="containeraaa">
  <div className="content">
    <div className="left-side">
      <div className="address details">
        <i className="fas fa-map-marker-alt" />
        <div className="topic">Address</div>
        <div className="text-one" style={{color:"black"}}>Legal-Niti workspace, PG Block 5th floor, BMS College of Engineering, Bengaluru - 560085
       </div>
      </div>
      <div className="phone details">
        <i className="fas fa-phone-alt" />
        <div className="topic">Phone</div>
        <div className="text-one" style={{color:"black"}}>7371889861</div>
        <div className="text-two" style={{color:"black"}}>9481829401</div>
      </div>
      <div className="email details">
        <i className="fas fa-envelope" />
        <div className="topic">Email</div>
        <div className="text-one" style={{color:"black"}}>contact@legalniti.com</div>
        {/* <div className="text-two">info.codinglab@gmail.com</div> */}
      </div>
    </div>
    <div className="right-side">
      <div className="topic-text" style={{fontSize:"35px"}}>Send us a message</div>
      <p style={{color:"black"}}>
      If you're looking for a trusted partner to help you navigate the complex world of taxes and corporate regulations, look no further than legal niti. Contact us today to learn more about how we can help your business thrive.
      </p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" />
        </div>
        
        <div className="input-box message-box">
        <textarea style={{padding:"8px 0px 30px 15px"}} type="text" placeholder="Send message" />
        </div>
        <div className="button">
          <input type="button" defaultValue="Send Now" />
        </div>
      </form>

    </div>
  </div>
  {/* <div>
   <h5  style={{marginTop:"80px",color:" #7B7583"}}>
   At CodingLab, we are dedicated to providing high-quality coding tutorials and services to our clients. Our team consists of experienced coders who are passionate about helping others learn and grow. We are always striving to improve our services and welcome any feedback or suggestions you may have. Please don't hesitate to reach out to us if you have any questions or concerns. We look forward to hearing from you and helping you achieve your coding goals!





   </h5>

  </div> */}
</div>

        
          
      </section>
    </Layout>
  );
};

export default contact;

export const Head = () => <Seo title="Contact Details" />
