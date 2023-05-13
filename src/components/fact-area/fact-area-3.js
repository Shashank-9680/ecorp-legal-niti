import React from "react";

// single fact item
function SingleFactItem({ count, meta }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="fact__item text-center">
        <h2 className="fact__count">{count}</h2>
        <span className="meta">{meta}</span>
      </div>
    </div>
  )
}

const FactAreaThree = () => {
  return (
    <section className="fact-area fact-style-three section-pt-60 section-pb-30">
      <div className="container">
        <div className="fact__items-wrap position-relative">
          

      

          <div
            className="row justify-content-center"
            data-anime="targets: > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -250; delay: anime.stagger(100);"
          >
            <SingleFactItem count="40+" meta="satisfied customers" />
            <SingleFactItem count="20+" meta="profitable ventures." />
            <SingleFactItem count="32+" meta="lawyers connected " />
            <SingleFactItem count="2.5x" meta="Estimated value" />

          </div>
        </div>
      </div>
    </section>
  )
}

export default FactAreaThree
