import React, { useState, useEffect } from "react"
import "./style.css"
import "./salary.css"
import Layout from "../layout/layout"

const Salarycalculator = () => {
  const [hourlyRate, setHourlyRate] = useState("")
  const [hoursWorked, setHoursWorked] = useState("")
  const [salary, setSalary] = useState("")

  useEffect(() => {
    const calculateSalary = () => {
      const calculatedSalary = hourlyRate * hoursWorked
      setSalary(calculatedSalary)
    }

    calculateSalary()
  }, [hourlyRate, hoursWorked])

  const handleHourlyRateChange = e => {
    setHourlyRate(e.target.value)
  }

  const handleHoursWorkedChange = e => {
    setHoursWorked(e.target.value)
  }

  return (
    <Layout>
      <section className="salary-box">
        <div className="salary-container">
          <div className="left-side">
            <h4 className="salary-heading">Inhand Salary Calculator</h4>
            <p className="para1">Calculate Your Monthly Salary On the Go</p>
            <p className="para2">
              Quickly calculate your take-home salary and other deductions in
              seconds using the Vakilsearch Salary calculator online. Enjoy easy
              and accurate results!
            </p>
            <div className="given-input">
              <label htmlFor="rate">Hourly Rate</label>
              <div className="user-input-rs">
                <input
                  type="number"
                  value={hourlyRate}
                  onChange={handleHourlyRateChange}
                />
                <p className="ruppes-symbol">₹</p>
              </div>
            </div>
            <div className="given-input">
              <label htmlFor="work">Hours Workes</label>
              <div className="user-input-rs">
                <input
                  type="number"
                  value={hoursWorked}
                  onChange={handleHoursWorkedChange}
                />
                <p className="ruppes-symbol">₹</p>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="right-container">
              <div className="selling-cost">
                <p>Salary</p>
                <p>{salary}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Salarycalculator
