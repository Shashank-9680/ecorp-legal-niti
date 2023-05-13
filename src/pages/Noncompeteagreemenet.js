import React from "react"
import { useState } from "react"
import "./style.css"
import Layout from "../layout/layout"

const Noncompeteagreement = () => {
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
            <h2 className="left-wing-heading">Non Compete Agreement</h2>
            <br />
            <br />
            <list>
              <ul>
                <li>
                  If you are an employer, a non-compete agreement would give you
                  the authority over certain activities of your employees even
                  after the employment ends. It is a legal obligation that stops
                  the employees from competing with you or sharing your
                  sensitive information, in the future.
                </li>
                <br />
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

export default Noncompeteagreement
