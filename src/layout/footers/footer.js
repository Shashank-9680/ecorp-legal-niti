import { Link } from "gatsby"
import React from "react"
// import { animateScroll as scroll } from "react-scroll"
import "./footer.css"
import { BsWhatsapp } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"

// handle scroll to top
// const handleScrollToTop = () => {
//   scroll.scrollToTop()
// }

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div
          className="container"
          style={{
            background: "black",
            padding: "30px 0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <footer
              style={{ display: "flex" }}
              className=" row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 wraps box  "
            >
              <div className="col mb-3 col-1 ">
                <h5 className="businesses-heading">START A BUSINESS</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="/partnerfirmregister" className="nav-link p-0 ">
                      Partnership Firm Registration
                    </Link>
                  </li>
                  <li className="nav-item mb-2 about">
                    <Link to="/sectionregister" className="nav-link p-0 ">
                      Section 8 Company Registration
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/farmerproducercompany" className="nav-link p-0 ">
                      Farmer Producer Company
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/nidhicompany" className="nav-link p-0 ">
                      Nidhi Company Registration
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/StartupIndia" className="nav-link p-0 ">
                      Startup India Registration
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col mb-3 col-2">
                <h5>TRADEMARK & COPYRIGHT</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="/Interntionaltrademark" className="nav-link p-0 ">
                      International Trademark Registration
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/Usatrademark" className="nav-link p-0 ">
                      USA Trademark Registration
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/trademarkrenewal" className="nav-link p-0 ">
                      Trademark Renewal
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/trademarkassignment" className="nav-link p-0 ">
                      Trademark Assignment
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/Trademarkwatch" className="nav-link p-0 ">
                      Trademark Watch
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col mb-3 col-3">
                <h5>CONVERT/CHANGE IN BUSINESS</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="/Partnershipllp" className="nav-link p-0 ">
                      Partnership to LLP
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/Privatetoperson" className="nav-link p-0 ">
                      Private to One Person Company
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/Privatetopublic" className="nav-link p-0 ">
                      Private to Public Limited Company
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/changingobjective" className="nav-link p-0 ">
                      Change Objective of Business
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/Changecompnayname" className="nav-link p-0 ">
                      Change Company Name
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col mb-3 col-4">
                <h5>LEGAL DOCUMENTATION</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="/Termsheetagreement" className="nav-link p-0 ">
                      Term Sheet Agreement
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/sharepurchaseagreemenet"
                      className="nav-link p-0 "
                    >
                      Share Purchase Agreement
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/Noncompeteagreemenet" className="nav-link p-0 ">
                      Non Compete Agreement
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/Financeagreement" className="nav-link p-0 ">
                      Finance Agreement
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/Freelanceragreement" className="nav-link p-0 ">
                      Freelancer Agreement
                    </Link>
                  </li>
                </ul>
              </div>
            </footer>
            <div
              className=""
              style={{
                zIndex: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Link to="/service">
                <button
                  className="glow-on-hover"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 10px white",
                    transition: "box-shadow 0.3s ease-in-out",
                  }}
                  onMouseOver={e => {
                    e.target.style.boxShadow = "0px 0px 20px white"
                  }}
                  onMouseOut={e => {
                    e.target.style.boxShadow = "0px 0px 10px white"
                  }}
                  onFocus={e => {
                    e.target.style.boxShadow = "0px 0px 20px white"
                  }}
                  onBlur={e => {
                    e.target.style.boxShadow = "0px 0px 10px white"
                  }}
                >
                  {" "}
                  See more services{" "}
                </button>

                {/* className="glow-on-hover" */}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <h5 className="tool-heading">Tools</h5>
        <div
          className="container"
          style={{
            background: "black",
            padding: "30px 0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <footer
            style={{
              display: "flex",
              gap: "3.5rem",
            }}
            className=" row-cols-1 row-cols-sm-2 row-cols-md-5  wraps box  "
          >
            {" "}
            <div className="col mb-3 ">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/gstcalculator" className="nav-link p-0 ">
                    GST Calculator
                  </Link>
                </li>
                <li className="nav-item mb-2 about">
                  <Link to="/sipcalculator" className="nav-link p-0 ">
                    SIP Calculator
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/bussinesscalculator" className="nav-link p-0 ">
                    Business Setup Calculator
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/Salarycalculator" className="nav-link p-0 ">
                    Salary Calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/tdscalculator" className="nav-link p-0 ">
                    TDS Calculator
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/npscalculator" className="nav-link p-0 ">
                    NPS Calculator
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/ppfcalculator" className="nav-link p-0 ">
                    PPF Calculator
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/retirementcalculator" className="nav-link p-0 ">
                    Retirement Planning Calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/hracalculator" className="nav-link p-0 ">
                    HRA Calculator
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/epfcalculator" className="nav-link p-0 ">
                    EPF Calculator
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/incometaxcalculator" className="nav-link p-0 ">
                    Income Tax Calculator
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/rdcalculator" className="nav-link p-0 ">
                    RD Calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/gratuitycalculator" className="nav-link p-0 ">
                    Gratuity Calculator
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/sharepurchaseagreemenet" className="nav-link p-0 ">
                    HSN Code Finder
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/simpleinterstcalcularor" className="nav-link p-0 ">
                    Simple Compound Interest Calculator
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
        </div>
        <div className="useful-links-box">
          <h5 className="ul-heading">Useful Links</h5>
          <div className="useful-links-container">
            <a href="#">Contact Us</a>
            <a href="#">How it Works</a>
            <a href="#">Create</a>
            <a href="#">Explore</a>
            <a href="#">Terms & Services</a>
          </div>
          <div className="icons-container">
            <div className="icons">
              <BsWhatsapp />
            </div>
            <div className="icons">
              <BsFacebook />
            </div>
            <div className="icons">
              <BsTwitter />
            </div>
            <div className="icons">
              <BsYoutube />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
