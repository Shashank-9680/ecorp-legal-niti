import React from "react";

function SingleFactItem({ count, meta }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-8">
      <div className="fact__item text-center">
        <h2 className="fact__count tg-text-gradient">{count}</h2>
        <span className="meta">{meta}</span>
      </div>
    </div>
  )
}

const FactArea = () => {
  return (
    <section className="fact-area section-pt-60 section-pb-30">
      <div className="container">
        <div className="fact__items-wrap position-relative">
          <div
            className="row justify-content-center"
            data-anime="targets: > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -250; delay: anime.stagger(100);"
          >
            <SingleFactItem count="40+" meta="customers" />
            <SingleFactItem
              count="50+"
              meta="lawyers"
            />
            <SingleFactItem
              count="2.5x"
              meta="better than competition"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FactArea
