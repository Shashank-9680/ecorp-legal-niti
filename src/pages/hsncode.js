import React, { useState } from "react"
import "./style.css"
import "./hsn.css"
import Layout from "../layout/layout"
import HSNCodeData from "./HSNCodeData.js"

const Hsncode = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  const filteredData = HSNCodeData.filter(
    item =>
      item.code.includes(searchTerm) || item.description.includes(searchTerm)
  )
  return (
    <Layout>
      <sction className="hsn-box">
        <div className="hsn-container">
          <h1 className="hsn-heading">HSN Code Finder</h1>
          <p className="para1">
            Find HSN Code or ITC HS Code and their GST Rates for your product
            with our HSN Code Search Tool. Search by either product name or HSN
            Code. Use a category list as an alternative way to get to your
            product's HS code
          </p>
          <div className="hsn-input">
            <input
              type="text"
              placeholder="Search HSN Code or Product Description"
              value={searchTerm}
              onChange={handleSearch}
            />
            {searchTerm && (
              <select>
                <option value="">-- Select --</option>
                {filteredData.length > 0 ? (
                  filteredData.map(item => (
                    <option
                      key={item.code}
                      value={`${item.code} - ${item.description}`}
                    >
                      {item.code} - {item.description}
                    </option>
                  ))
                ) : (
                  <option value="">Not Found</option>
                )}
              </select>
            )}
          </div>
        </div>
      </sction>
    </Layout>
  )
}

export default Hsncode
