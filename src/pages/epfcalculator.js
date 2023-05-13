import React, { useState, useEffect, useCallback } from "react"
import "./style.css"
import "./epf.css"
import Layout from "../layout/layout"
const Epfcalculator = () => {
  const [monthlyContribution, setMonthlyContribution] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [tenure, setTenure] = useState(0)
  const [maturityAmount, setMaturityAmount] = useState(0)

  const calculateMaturityAmount = useCallback(() => {
    const principal = monthlyContribution * tenure * 12
    const interest = (principal * interestRate) / 100
    const maturityAmount = principal + interest
    setMaturityAmount(maturityAmount.toFixed(2))
  }, [monthlyContribution, interestRate, tenure])

  useEffect(() => {
    calculateMaturityAmount()
  }, [calculateMaturityAmount])

  const handleMonthlyContributionChange = event => {
    setMonthlyContribution(parseFloat(event.target.value))
  }

  const handleInterestRateChange = event => {
    setInterestRate(parseFloat(event.target.value))
  }

  const handleTenureChange = event => {
    setTenure(parseFloat(event.target.value))
  }
  return (
    <Layout>
      <section className="epf-box">
        <div className="epf-container">
          <div className="left-side">
            <h4 className="epf-heading">EPF Calculator</h4>
            <p className="para1">
              Having trouble figuring out your PF, EPF Calculations?
            </p>
            <p className="para2">
              Let Your Calculations Go Better with Vakilsearch's PF Interest
              Calculator! Ready to explore more about PF, EPF?
            </p>

            <div className="given-input">
              <label htmlFor="monthly-contriution">Monthly Contribution</label>
              <div className="user-input-rs">
                <input
                  type="number"
                  value={monthlyContribution}
                  onChange={handleMonthlyContributionChange}
                />
                <p className="ruppes-symbol">₹</p>
              </div>
            </div>

            <div className="given-input">
              <label htmlFor="interst rate">Interest Rate</label>
              <div className="user-input-rs">
                <input
                  type="number"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                />
                <p className="percentage-symbol">%</p>
              </div>
            </div>

            <div className="given-input">
              <label htmlFor="tenure">Tenure</label>
              <div className="user-input-rs">
                <input
                  type="number"
                  value={tenure}
                  onChange={handleTenureChange}
                />
                <p className="year-symbol">yr</p>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="right-container">
              <div className="total-epf">
                <p>Total Maturity Amount:</p>
                <p>{maturityAmount}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Epfcalculator
