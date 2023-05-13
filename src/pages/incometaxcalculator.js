import React, { useState, useEffect } from "react"
import "./style.css"
import "./it.css"
import Layout from "../layout/layout"

const Incometaxcalculator = () => {
  const [income, setIncome] = useState("")
  const [tax, setTax] = useState("")

  useEffect(() => {
    const calculateTax = () => {
      let calculatedTax = 0
      const incomeValue = parseFloat(income)

      if (incomeValue <= 18200) {
        calculatedTax = 0
      } else if (incomeValue <= 45000) {
        calculatedTax = (incomeValue - 18200) * 0.19
      } else if (incomeValue <= 120000) {
        calculatedTax = (incomeValue - 45000) * 0.325 + 5092
      } else if (incomeValue <= 180000) {
        calculatedTax = (incomeValue - 120000) * 0.37 + 29467
      } else {
        calculatedTax = (incomeValue - 180000) * 0.45 + 51667
      }

      setTax(calculatedTax.toFixed(2))
    }

    calculateTax()
  }, [income])

  const handleIncomeChange = e => {
    setIncome(e.target.value)
  }
  return (
    <Layout>
      <section className="it-box">
        <div className="it-container">
          <div className="left-side">
            <h4 className="it-heading">Income Tax Calculator</h4>
            <p className="para2">
              Plan your retirement in seconds with the retirement plan
              calculator from Vakilsearch!
            </p>
            <div className="given-input">
              <label htmlFor="income">Income</label>
              <div className="user-input-rs">
                <input
                  type="number"
                  value={income}
                  onChange={handleIncomeChange}
                />
                <p className="ruppes-symbol">₹</p>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="right-container">
              <div className="selling-cost">
                <p>tax</p>
                <p>{tax}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Incometaxcalculator
