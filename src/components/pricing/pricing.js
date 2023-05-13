import React, { useState } from "react"
import "./price.css"

import maindata from "./data"
import Pricingtemp from "./pricingtemp"
const Pricing = () => {
  const [number, setnumber] = useState([0, null])

  return (
    <>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "column",
          // textAlign:'center'
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "beige",
            margin: "23px 0px",
            borderRadius: "34px",
            width: "90%",
            flexWrap: "wrap",
            // height:"300pc"
          }}
          className=""
        >
          {[
            "Register your business",
            "Get licence and Registrations",
            "Protect your intellectual property",
            "Easy tax registration and filing",
          ].map((a, b) => {
            return (
              <h6
                className={number[1] === b ? "active1" : ""}
                style={{
                  cursor: "pointer",
                  padding: "20px 20px ",
                  margin: "12px 23px",
                  border: "1px solid black",
                  borderRadius: "10px",
                }}
                id="button"
                onClick={() => setnumber([b, b])}
                key={b}
              >
                {a}
              </h6>
            )
          })}
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {<Pricingtemp arrw={maindata[number[0]]} />}
        </div>
      </div>
    </>
  )
}

export default Pricing
