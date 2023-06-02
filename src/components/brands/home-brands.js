import React, { useRef, useEffect } from "react"
import anime from "animejs/lib/anime.es.js"
import "./brand.css"
import sample from "./sample11.mp4"
export function SingleBrand({ img_1, img_2 }) {
  return (
    <div className="brand__item">
      <img
        width="83px"
        src={`/assets/img/customers/${img_1}`}
        style={{ margin: "0px 30px", height: "83.6px" }}
        className="has-active-light"
        alt="brand"
      />
      <img
        width="83px"
        style={{ margin: "0px 30px" }}
        src={`/assets/img/customers/${img_2}`}
        className="has-active-dark"
        alt="brand"
      />
    </div>
  )
}

const HomeBrands = () => {
  const animate_1 = useRef(null)
  // animate
  // useEffect(() => {
  //   anime({
  //     targets: animate_1.current,
  //     opacity: [0, 1], translateY: [24, 0], delay: 300,
  //     begin: () => {
  //       anime.set(animate_1.current, { opacity: '1' })
  //     },
  //   })
  // }, [])

  return (
    <>
      <section>
        <div
          ref={animate_1}
          className="brand-area section-pb-65"
          // style={{ opacity: "0" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-12">
                <h6 className="brand__title">OUR WONDERFUL CUSTOMERS </h6>
                <div className="brand__list">
                  {/* ////put the right images */}
                  <SingleBrand img_1="1.png" img_2="1.png" />
                  <SingleBrand img_1="2.png" img_2="2.png" />
                  <SingleBrand img_1="3.png" img_2="3.png" />
                  {/* <img src={`/assets/img/customers/3.png`} alt="" /> */}
                  <SingleBrand img_1="5.png" img_2="6.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeBrands
