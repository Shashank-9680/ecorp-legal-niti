import React from "react"
import { useState } from "react"
import "./style.css"
import Layout from "../layout/layout"

const Changecompanyname = () => {
  const [details, setDetails] = useState({
    Email: "",
    Mobile: "",
    City: "",
  })

  const Handleclick = e => {
    const name = e.target.name
    const value = e.target.value

    setDetails({ ...details, [name]: value })
  }

  const [record, setRecord] = useState([])

  const HandleSubmit = e => {
    e.preventDefault()

    const newData = { ...details }
    setRecord({ ...record, newData })
  }

  return (
    <Layout>
      <section className=" banner-padding ">
        <div className="wrapper">
          <div className="left-wing">
            <h2 className="left-wing-heading">Change Company Name</h2>
            <br />
            <br />
            <list>
              <ul>
                <li>
                  Change your company name with MCA compliance. Service includes
                  name availability search, name approval & complete
                  documentation
                </li>
                <br />
                <li>
                  We draft applications for approval of company name change and
                  file them with the registrar of companies
                </li>
              </ul>
            </list>
          </div>
          <div className="right-wing">
            <br />
            <div className="form-container">
              <p className="form-heading">Get Started!</p>
              <form className="signup-form">
                <div className="user-container">
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    onChange={Handleclick}
                    value={details.Email}
                    name="Email"
                  />
                </div>
                <div className="user-container">
                  <input
                    type="tel"
                    placeholder="Mobile No."
                    autoComplete="off"
                    onChange={Handleclick}
                    value={details.Mobile}
                    name="Mobile"
                  />
                </div>
                <div className="user-container">
                  <input
                    type="City"
                    placeholder="City"
                    autoComplete="off"
                    onChange={Handleclick}
                    name="City"
                    value={details.City}
                  />
                </div>

                <button onClick={HandleSubmit}>Consult an expert</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Changecompanyname
