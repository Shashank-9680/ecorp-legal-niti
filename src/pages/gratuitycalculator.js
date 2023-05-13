import React, { useState, useEffect } from "react"
import "./style.css"
import "./gratuity.css"
import Layout from "../layout/layout"

const Gratuitycalculator = () => {
  const [monthlyService, setMonthlyService] = useState(0)
  const [yearsOfService, setYearsOfService] = useState(0)
  const [gratuityAmount, setGratuityAmount] = useState(0)

  useEffect(() => {
    const gratuity = monthlyService * yearsOfService * 12
    setGratuityAmount(gratuity)
  }, [monthlyService, yearsOfService])

  const handleMonthlyServiceChange = e => {
    setMonthlyService(parseInt(e.target.value))
  }

  const handleYearsOfServiceChange = e => {
    setYearsOfService(parseInt(e.target.value))
  }

  return (
    <Layout>
      <section className="gratuity-box">
        <div className="gratuity-container">
          <div className="left-side">
            <h4 className="gratuity-heading">
              Gratuity Calculator Online India 2023
            </h4>
            <p className="para1">Are you aware of your bonus eligibility?</p>
            <p className="para2">
              Invest some time with Vakilsearch & understand gratuity with our
              gratuity calculator online!
            </p>

            <div className="given-input">
              <label htmlFor="monthly-service">Monthly Service</label>
              <div className="user-input-rs">
                <input
                  type="number"
                  value={monthlyService}
                  onChange={handleMonthlyServiceChange}
                />
                <p className="ruppes-symbol">₹</p>
              </div>
            </div>

            <div className="given-input">
              <label htmlFor="year service">Year of Service</label>
              <div className="user-input-rs">
                <input
                  type="number"
                  value={yearsOfService}
                  onChange={handleYearsOfServiceChange}
                />
                <p className="year-symbol">yr</p>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="right-container">
              <div className="total-gratuity">
                <p>Gratuity Amount</p>
                <p>{gratuityAmount}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Gratuitycalculator
