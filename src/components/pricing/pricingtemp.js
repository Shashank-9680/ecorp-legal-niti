import React from "react"
import "./pricingtemp.css"
import data from "./data"

const Pricingtemp = ({ arrw = data }) => {
  return (
    <>
      {arrw.map(arr => (
        <div
          className="scale"
          style={{
            textAlign: "center",
            // display: "flex",
            // flexDirection: "row",
            // alignItems: "center",
            // justifyContent: "center",
            // alignContent: "center",
            width: "300px",
            // background: "#FFFFFF",
            boxShadow: "0px 4px 25px -1px #00474f",
            // padding: "45px 40px 45px 40px",
            height: "700px",
            borderRadius: " 20px",
            cursor: "pointer",
            margin: "10px 10px",
          }}
        >
          <div className="price-container" key={arr[0]}>
            <div className="first-heading">
              <h5 className="first">{arr[0]}</h5>
            </div>

            <h5 className="price">{arr[1]}</h5>
            <p className="money">{arr[2]}</p>
            <button className="btn border-btn banner__btn">
              <a className="con" href="/cart">
                {arr[3]}
              </a>
            </button>
            <h5 className="price">{arr[4]}</h5>
            <div className="second">
              {arr[5].map(a => {
                return <p className="bullets">{a}</p>
              })}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Pricingtemp
