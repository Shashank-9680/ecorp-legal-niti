import React from "react"
import { useState } from "react"
import "./style.css"
import Layout from "../layout/layout"

const Freelanceragreement = () => {
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
            <h2 className="left-wing-heading"> Freelancer Agreement</h2>
            <br />
            <br />
            <list>
              <ul>
                <li>
                  Now get a freelancer agreement drafted by experts from
                  Vakilsearch and work with talented freelancers without
                  hassles!
                </li>
                <br />
                <li>
                  Transparent process through follow-up and regular updates
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

export default Freelanceragreement
